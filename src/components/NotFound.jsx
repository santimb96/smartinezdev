import { usePageSeo } from '../seo'

const NotFound = () => {
  usePageSeo('/404')

  return (
    <main id='contenido' className='sheet' style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <p className='measure-note'>Error 404</p>
      <h1 className='title-name' style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}>
        Página no<br />encontrada
      </h1>
      <p className='lede'>La página que buscas no existe o ha dejado de estar disponible.</p>
      <p style={{ marginTop: '32px' }}>
        <a className='btn btn-primary' href='/'>Volver al inicio</a>
      </p>
    </main>
  )
}

export default NotFound
