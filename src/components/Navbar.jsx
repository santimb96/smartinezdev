import { LaptopMinimal, FolderGit2, BookUser, Mail } from 'lucide-preact'

const Navbar = () => {
  const LINKS = [{ link: '#experience', title: 'Experiencia', iconComponent: <LaptopMinimal width={18} /> }, { link: '#projects', title: 'Proyectos', iconComponent: <FolderGit2 width={18} /> }, { link: '#aboutme', title: 'Sobre mí', iconComponent: <BookUser width={18} /> }, { link: '#contact', title: 'Contacto', iconComponent: <Mail width={18} /> }]
  return (
    <nav className='flex justify-around md:gap-[20px] md:justify-center'>
      {LINKS.map(({ link, title, iconComponent }) => {
        return (
          <a key={title} href={link} className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-[10px] md:p-[10px]'>
            <span className='order-2 md:order-1'>{title}</span>
            {iconComponent && <div className='order-1 md:order-2'>{iconComponent}</div>}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
