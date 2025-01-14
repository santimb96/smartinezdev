import ScrollToTop from './globals/ScrollToTop'

const Layout = ({ children }) => {
  return (
    <>
      <section id='aboutme' className='relative w-screen md:w-[75vw] lg:w-[60vw] flex flex-col items-start gap-2.5 p-2.5'>
        {children}
        <ScrollToTop />
      </section>
    </>
  )
}

export default Layout
