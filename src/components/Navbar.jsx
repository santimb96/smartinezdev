import { BriefcaseBusiness, FolderGit2, UserRoundCheck, Mail } from 'lucide-preact'

const Navbar = () => {
  const LINKS = [{ link: '#experience', title: 'Experiencia', iconComponent: <BriefcaseBusiness className='w-[24px] md:w-[20px]' /> }, { link: '#projects', title: 'Proyectos', iconComponent: <FolderGit2 className='w-[24px] md:w-[20px]' /> }, { link: '#aboutme', title: 'Sobre mí', iconComponent: <UserRoundCheck className='w-[24px] md:w-[20px]' /> }, { link: '#contact', title: 'Contacto', iconComponent: <Mail className='w-[24px] md:w-[20px]' /> }]
  return (
    <section className='w-full flex flex-row justify-center'>
      <nav className='fixed top-0 mt-2 z-[9999] flex flex-row gap-4 md:gap-5 md:justify-center py-1 px-5'>
        {LINKS.map(({ link, title, iconComponent }, index) => {
          return (
            <a key={title} href={index !== LINKS.length - 1 ? link : 'mailto:santiagomartinezbota@gmail.com'} className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-3 md:p-3'>
              <span className='order-2 md:order-1'>{title}</span>
              {iconComponent && <div className='order-1 md:order-2'>{iconComponent}</div>}
            </a>
          )
        })}
      </nav>
    </section>
  )
}

export default Navbar
