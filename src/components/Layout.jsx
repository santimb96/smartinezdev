const Layout = ({ children }) => {
  return (
    <section className='w-screen md:w-[75vw] lg:w-[60vw] flex flex-col items-start gap-2.5 p-2.5'>{children}</section>
  )
}

export default Layout
