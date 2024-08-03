import { hydrate, prerender as ssr } from 'preact-iso'
import './style.css'
import Layout from './components/Layout'

export function App () {
  return (
    <Layout>
      <h2 className='font-bold'>hello world!</h2>
    </Layout>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender (data) {
  return await ssr(<App {...data} />)
}
