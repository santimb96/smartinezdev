import { hydrate, prerender as ssr, Router, Route, LocationProvider } from 'preact-iso'
import Rail from './components/Rail'
import TopBar from './components/TopBar'
import TitleBlock from './components/TitleBlock'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import NotFound from './components/NotFound'
import { PROJECTS, EXPERIENCE } from './constants/vars'
import { HOME_SEO, resetSeoState, usePageSeo } from './seo'
import './style.css'

const STATIC_ASSET_PATTERN = /\.(pdf|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot|mp4|webm|mp3|wav|zip)$/i

// Only the canonical route is handled client-side. Asset links (the CV PDF)
// must keep their native download behavior instead of being intercepted.
const CLIENT_ROUTE_PATTERN = /^\/$/

const filterPrerenderLinks = (links) => {
  if (!links) return links

  return new Set(
    [...links].filter((link) => {
      if (typeof link !== 'string') return false
      return !STATIC_ASSET_PATTERN.test(link)
    })
  )
}

export function App () {
  return (
    <LocationProvider scope={CLIENT_ROUTE_PATTERN}>
      <Router>
        <Route path='/' component={WebApp} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  )
}

function WebApp () {
  usePageSeo('/')

  return (
    <>
      <a href='#contenido' className='skip-link'>Saltar al contenido</a>
      <Rail />
      <TopBar />
      <main id='contenido'>
        <div className='sheet'>
          <TitleBlock projectCount={PROJECTS.length} teamCount={EXPERIENCE.length} />
          <Work />
          <Timeline />
          <Contact />
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender (data) {
  resetSeoState()

  const result = await ssr(<App {...data} />)
  const seoHead = globalThis.__SEO_HEAD__ || {
    title: HOME_SEO.title,
    lang: 'es',
    elements: []
  }

  return {
    ...result,
    links: filterPrerenderLinks(result.links),
    head: {
      lang: seoHead.lang,
      title: seoHead.title,
      elements: new Set(seoHead.elements)
    }
  }
}
