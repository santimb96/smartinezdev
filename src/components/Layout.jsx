const Layout = ({ children }) => {
  return (
    <section className='w-screen md:w-[75vw] xl:w-[50vw] flex flex-col items-center gap-[10px] p-[10px]'>{children}</section>
  )
}

export default Layout
