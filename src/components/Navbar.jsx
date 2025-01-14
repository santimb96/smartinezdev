import { BriefcaseBusiness, FolderGit2, UserRoundCheck, Mail } from 'lucide-preact'

const Navbar = () => {
  const LINKS = [{ link: '#aboutme', title: 'Sobre mí', iconComponent: <UserRoundCheck className='lucideIcon' strokeWidth={1.5} /> }, { link: '#experience', title: 'Experiencia', iconComponent: <BriefcaseBusiness className='lucideIcon' strokeWidth={1.5} /> }, { link: '#projects', title: 'Proyectos', iconComponent: <FolderGit2 className='lucideIcon' strokeWidth={1.5} /> }, { link: '#contact', title: 'Contacto', iconComponent: <Mail className='lucideIcon' strokeWidth={1.5} /> }]
  return (
    <header className='w-full flex flex-row justify-center'>
      <nav className='fixed top-0 z-50 flex flex-row justify-center gap-4 md:gap-5 md:justify-center py-2.5 px-5'>
        {LINKS.map(({ link, title, iconComponent }, index) => {
          return (
            <a key={title} href={index !== LINKS.length - 1 ? link : 'mailto:santiagomartinezbota@gmail.com'} className='navButton hover:highlight flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-2.5'>
              <span className='order-2 md:order-2 pt-[2px]'>{title}</span>
              {iconComponent && <div className='order-1 md:order-1'>{iconComponent}</div>}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Navbar
