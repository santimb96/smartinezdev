import { readFile, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// The single stylesheet is small (18 KiB raw, 4.8 KiB gzip) and
// render-blocking, so it would add a second round trip before the first paint.
// Inline it into the prerendered HTML and drop the emitted file (Lighthouse:
// network dependency tree). The entry script already sits in <head>, so the
// browser discovers it while parsing.
const inlineStylesheet = () => {
  let outDir = 'dist'

  return {
    name: 'inline-stylesheet',
    apply: 'build',
    enforce: 'post',
    configResolved (config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle () {
      const htmlPath = join(outDir, 'index.html')
      let html = await readFile(htmlPath, 'utf8')
      const tags = [...html.matchAll(/<link[^>]*\brel="stylesheet"[^>]*>/g)]
        .map(([tag]) => ({ tag, href: tag.match(/\bhref="([^"]+\.css)"/)?.[1] }))
        .filter(({ href }) => Boolean(href))

      for (const { tag, href } of tags) {
        const cssPath = join(outDir, href.replace(/^\//, ''))
        const css = await readFile(cssPath, 'utf8')
        html = html.replace(tag, () => `<style>${css}</style>`)
        await rm(cssPath, { force: true })
      }

      await writeFile(htmlPath, html)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app'
      }
    }),
    inlineStylesheet()
  ]
})
