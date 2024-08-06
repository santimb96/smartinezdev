import { hydrate, prerender as ssr } from 'preact-iso'
import './style.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

export function App () {
  return (
    <Layout>
      <Navbar />
    </Layout>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender (data) {
  return await ssr(<App {...data} />)
}
