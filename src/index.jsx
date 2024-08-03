import { hydrate, prerender as ssr } from 'preact-iso'
import './style.css'
import Layout from './components/Layout'
import Divider from './components/globals/Divider'

export function App () {
  return (
    <Layout>
      <h2 className='font-bold text-2xl'>hello world!</h2>
      <Divider />
      <h2 className='font-bold'>hello world!</h2>
      <h2 className='font-bold'>hello world!</h2>
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
