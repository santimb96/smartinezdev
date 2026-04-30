import { hydrate, prerender as ssr, Router, Route, LocationProvider } from 'preact-iso'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Experience from './components/Experience'
import Divider from './components/globals/Divider'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/globals/ScrollToTop'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import { HOME_SEO, resetSeoState, usePageSeo } from './seo'
import './style.css'

export function App () {
  return (
    <LocationProvider scope='/app'>
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
      <Layout>
        <Navbar />
        <Header />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Contact />
      </Layout>
      <Footer />
      <ScrollToTop />
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
    head: {
      lang: seoHead.lang,
      title: seoHead.title,
      elements: new Set(seoHead.elements)
    }
  }
}
