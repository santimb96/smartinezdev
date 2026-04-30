import { useEffect } from 'preact/hooks'

const SITE_URL = 'https://smartinezdev.com'
const SITE_NAME = 'SmartinezDev'
const AUTHOR_NAME = 'Santiago Martínez'
const DEFAULT_IMAGE = `${SITE_URL}/img/linkedinPic.webp?v=1`

const BASE_KEYWORDS = [
  'Santiago Martínez',
  'SmartinezDev',
  'desarrollador web',
  'desarrollador frontend',
  'desarrollador full stack',
  'React',
  'Preact',
  'Node.js',
  'Tailwind CSS',
  'portfolio desarrollador'
]

const HOME_SEO = {
  title: 'Santiago Martínez | Desarrollador web frontend y full stack',
  description: 'Portfolio de Santiago Martínez, desarrollador web especializado en React, Preact, Tailwind CSS, Node.js y creación de interfaces rápidas, claras y escalables.',
  path: '/',
  robots: 'index, follow',
  type: 'website',
  keywords: BASE_KEYWORDS,
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'es',
      description: 'Portfolio profesional de Santiago Martínez, desarrollador web.',
      author: {
        '@type': 'Person',
        name: AUTHOR_NAME
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
      image: DEFAULT_IMAGE,
      jobTitle: 'Desarrollador web frontend y full stack',
      knowsAbout: ['React', 'Preact', 'Node.js', 'Tailwind CSS', 'UX/UI'],
      sameAs: [
        'https://github.com/santimb96',
        'https://www.linkedin.com/in/santi-martinez-bota/'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Inicio',
      url: SITE_URL,
      description: 'Página principal del portfolio profesional de Santiago Martínez.',
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL
      }
    }
  ]
}

const NOT_FOUND_SEO = {
  title: '404 | Página no encontrada | Santiago Martínez',
  description: 'Página no encontrada en SmartinezDev. Volvé al inicio para ver experiencia, proyectos y contacto de Santiago Martínez.',
  path: '/404',
  robots: 'noindex, follow',
  type: 'website',
  keywords: [...BASE_KEYWORDS, '404'],
  schema: []
}

const SEO_BY_PATH = {
  '/': HOME_SEO,
  '/404': NOT_FOUND_SEO
}

const ensureTrailingSlashlessPath = (path = '/') => {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
}

const createMetaEntry = (name, content, property = false) => ({
  type: 'meta',
  props: property ? { property: name, content } : { name, content }
})

const createLinkEntry = (rel, href) => ({
  type: 'link',
  props: { rel, href }
})

const createScriptEntry = (schema, index) => ({
  type: 'script',
  props: {
    type: 'application/ld+json',
    id: `ld-json-${index}`,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
  }
})

const buildSeo = (path = '/') => {
  const normalizedPath = ensureTrailingSlashlessPath(path)
  const seo = SEO_BY_PATH[normalizedPath] || NOT_FOUND_SEO
  const url = normalizedPath === '/' ? SITE_URL : `${SITE_URL}${normalizedPath}`

  return {
    ...seo,
    url,
    image: DEFAULT_IMAGE,
    locale: 'es_ES',
    twitterCard: 'summary_large_image',
    siteName: SITE_NAME,
    author: AUTHOR_NAME
  }
}

const buildHeadElements = (seo) => {
  const elements = [
    createMetaEntry('description', seo.description),
    createMetaEntry('keywords', seo.keywords.join(', ')),
    createMetaEntry('robots', seo.robots),
    createMetaEntry('author', seo.author),
    createMetaEntry('og:title', seo.title, true),
    createMetaEntry('og:description', seo.description, true),
    createMetaEntry('og:image', seo.image, true),
    createMetaEntry('og:url', seo.url, true),
    createMetaEntry('og:type', seo.type, true),
    createMetaEntry('og:locale', seo.locale, true),
    createMetaEntry('og:site_name', seo.siteName, true),
    createMetaEntry('twitter:card', seo.twitterCard),
    createMetaEntry('twitter:title', seo.title),
    createMetaEntry('twitter:description', seo.description),
    createMetaEntry('twitter:image', seo.image),
    createLinkEntry('canonical', seo.url)
  ]

  seo.schema.forEach((item, index) => {
    elements.push(createScriptEntry(item, index))
  })

  return elements
}

const applyHeadOnClient = (seo) => {
  document.title = seo.title
  document.documentElement.lang = 'es'

  const upsertMeta = (selector, attrs) => {
    let element = document.head.querySelector(selector)

    if (!element) {
      element = document.createElement('meta')
      document.head.appendChild(element)
    }

    Object.entries(attrs).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
  }

  const upsertLink = (selector, attrs) => {
    let element = document.head.querySelector(selector)

    if (!element) {
      element = document.createElement('link')
      document.head.appendChild(element)
    }

    Object.entries(attrs).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
  }

  const removeSchema = () => {
    document.head.querySelectorAll('[data-seo-schema="true"]').forEach(node => node.remove())
  }

  upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
  upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords.join(', ') })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots })
  upsertMeta('meta[name="author"]', { name: 'author', content: seo.author })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: seo.url })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: seo.type })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: seo.locale })
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: seo.siteName })
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: seo.twitterCard })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image })
  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: seo.url })

  removeSchema()

  seo.schema.forEach((item, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoSchema = 'true'
    script.id = `ld-json-${index}`
    script.textContent = JSON.stringify(item)
    document.head.appendChild(script)
  })
}

const setSeoState = (seo) => {
  globalThis.__SEO_HEAD__ = {
    title: seo.title,
    lang: 'es',
    elements: buildHeadElements(seo)
  }
}

const resetSeoState = () => {
  globalThis.__SEO_HEAD__ = {
    title: HOME_SEO.title,
    lang: 'es',
    elements: buildHeadElements(buildSeo('/'))
  }
}

const usePageSeo = (path) => {
  const seo = buildSeo(path)

  if (typeof window === 'undefined') {
    setSeoState(seo)
  }

  useEffect(() => {
    applyHeadOnClient(seo)
  }, [seo.title, seo.description, seo.path])

  return seo
}

export {
  HOME_SEO,
  NOT_FOUND_SEO,
  buildHeadElements,
  buildSeo,
  resetSeoState,
  SITE_URL,
  usePageSeo
}
