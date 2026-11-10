import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DIST = join(import.meta.dirname, '..', 'dist')
const read = (file) => readFileSync(join(DIST, file), 'utf8')
const html = read('index.html')

// covers: critical-chain fix (no render-blocking stylesheet)
test('stylesheet is inlined once and no render-blocking link remains', () => {
	assert.equal((html.match(/rel="stylesheet"/g) ?? []).length, 0)
	const blocks = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)]
	assert.equal(blocks.length, 1)
	const css = blocks[0][1]
	assert.ok(css.length > 1000, 'inlined css looks empty')
	assert.match(css, /@media print/)
	assert.match(css, /\.sheet\s*\{/)
})

// covers: inlining safety (url() resolution, style-tag escaping)
test('inlined css uses only absolute or data urls and never opens a style tag', () => {
	const css = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)][0][1]
	assert.doesNotMatch(css, /<\/style/i)
	assert.deepEqual(
		css.match(/url\((?!['"]?(?:https?:|\/|data:))/g) ?? [],
		[],
		'relative url() would resolve against / instead of /assets/ once inlined'
	)
})

// covers: emitted CSS file is deleted
test('no emitted css asset survives the build', () => {
	const assets = join(DIST, 'assets')
	const files = existsSync(assets) ? readdirSync(assets) : []
	assert.deepEqual(files.filter((file) => file.endsWith('.css')), [])
})

// covers: entry script stays discoverable in head
test('entry script is still discovered in head', () => {
	const head = html.split('</head>')[0]
	assert.match(head, /<script type="module"[^>]+src="\/assets\/[^"]+\.js"/)
})

// covers: prerender output not regressed
test('prerendered content is intact', () => {
	assert.equal((html.match(/<h1/g) ?? []).length, 1)
	const titles = ['Catálogo IHF', 'Ressò', 'Docmark', 'TMDB movie app', 'Scraping TV3/SX3', 'PokeDuel', 'Clon de Spotify', 'Palmimax']
	for (const title of titles) {
		assert.ok(html.includes(title), `missing project ${title}`)
	}
	assert.ok(html.includes('santiagomartinezbota@gmail.com'))
})

// covers: donation link (Ko-fi) is prerendered, external and hidden in print
test('ko-fi donation link is prerendered safely', () => {
	const match = html.match(/<a[^>]*href="https:\/\/ko-fi\.com\/smartinezdev"[^>]*>/)
	assert.ok(match, 'missing Ko-fi donation link')
	assert.match(match[0], /target="_blank"/)
	assert.match(match[0], /rel="noreferrer"/)
	assert.match(match[0], /class="[^"]*no-print/)
})

// covers: llms.txt audit (H1 + links, not the SPA HTML)
test('llms.txt is a real markdown document with an H1 and links', () => {
	const txt = read('llms.txt')
	assert.equal(txt.split('\n')[0].slice(0, 2), '# ')
	assert.equal((txt.match(/^# /gm) ?? []).length, 1)
	assert.ok((txt.match(/\[[^\]]+\]\([^)]+\)/g) ?? []).length >= 5)
	assert.doesNotMatch(txt, /<[a-z]/i)
})

// covers: _headers syntax + immutable hashed assets
test('_headers is a valid netlify/cloudflare rules file', () => {
	const rules = []
	for (const line of read('_headers').split('\n')) {
		if (!line.trim()) continue
		if (line.startsWith(' ')) {
			assert.ok(rules.length > 0, `header line without a path: ${line}`)
			assert.match(line, /^\s+[A-Za-z-]+:\s*\S/)
			rules.at(-1).headers.push(line.trim())
		} else {
			assert.match(line, /^\//)
			rules.push({ path: line.trim(), headers: [] })
		}
	}
	assert.ok(rules.some((rule) => rule.path === '/assets/*' && rule.headers.some((header) => /immutable/.test(header))))
})

// covers: SPA fallback coexists with real static files
test('spa fallback is present and does not need to cover real files', () => {
	assert.equal(read('_redirects').trim(), '/* /index.html 200')
	for (const file of ['llms.txt', 'robots.txt', 'sitemap.xml', 'codeIcon.svg']) {
		assert.ok(existsSync(join(DIST, file)), `${file} missing from dist`)
	}
})
