import { useEffect, useState } from 'preact/hooks'
import { LINKS } from '../constants/vars'
import SwicthSchemes from './SwitchSchemes'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(typeof window !== 'undefined' ? window?.location.hash.replace('#', '') : '')
  const sectionsIds = LINKS.map(section => section.link.replace('#', ''))

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window?.scrollY
        let currentSection = ''

        for (const sectionId of sectionsIds) {
          const section = document.getElementById(sectionId)
          if (section) {
            const offsetTop = section.offsetTop - 100
            const sectionHeight = section.offsetHeight + 100

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
              currentSection = sectionId
            }
          }
        }
        setActiveSection(currentSection)
      }
    }

    if (typeof window !== 'undefined') {
      window?.addEventListener('scroll', handleScroll)
      handleScroll()

      return () => {
        window?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <header className='w-full flex flex-row justify-center'>
      <nav className='fixed top-0 z-50 flex flex-row justify-center gap-4 md:gap-5 md:justify-center py-2.5 px-5'>
        {LINKS.map(({ link, title, IconComponent }, index) => {
          const isActive = activeSection === link.replace('#', '')
          return (
            <a key={title} href={index !== LINKS.length - 1 ? link : 'mailto:santiagomartinezbota@gmail.com'} className={`${isActive ? 'currentNavSection' : ''} flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-2.5 rounded-full md:px-5 lg:py-1 text-[16px] duration-150 ease-in-out`}>
              <span className='order-2 hidden md:block md:order-2 pt-[2px]'>{title}
              </span>
              {IconComponent && (
                <span className={`order-1 min-w-6 p-2.5 md:p-0 flex justify-center items-center ${isActive ? 'text-[var(--detail)] md:text-current' : ''}`}>
                  <IconComponent className='min-w-6' strokeWidth={1.5} />
                </span>
              )}
            </a>
          )
        })}
        <SwicthSchemes />
      </nav>
    </header>
  )
}

export default Navbar
