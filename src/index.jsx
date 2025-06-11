/* eslint-disable no-unused-vars */
import { hydrate, prerender as ssr } from 'preact-iso'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Experience from './components/Experience'
import Divider from './components/globals/Divider'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/globals/ScrollToTop'
import Contact from './components/Contact'
import './style.css'

export function App() {
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

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
