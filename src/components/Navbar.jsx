import { useState } from 'preact/hooks'
import { LINKS } from '../constants/vars'
import SwicthSchemes from './SwitchSchemes'

const Navbar = () => {
  const [section, setSection] = useState('')
  return (
    <header className='w-full flex flex-row justify-center'>
      <nav className='fixed top-0 z-50 flex flex-row justify-center gap-4 md:gap-5 md:justify-center py-2.5 px-5'>
        {LINKS.map(({ link, title, IconComponent }, index) => {
          return (
            <a key={title} href={index !== LINKS.length - 1 ? link : 'mailto:santiagomartinezbota@gmail.com'} onClick={() => setSection(link)} className={`${link === section ? 'underlinedLink' : ''} flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-2.5 border border-transparent rounded-full lg:px-5 lg:py-2.5 text-[16px] lg:hover:border-[var(--secondary)] duration-150 ease-in-out`}>
              <span className='order-2 hidden md:block md:order-2 pt-[2px]'>{title}</span>
              {IconComponent && <span className='order-1 min-w-6 p-2.5 md:p-0 flex justify-center items-center'><IconComponent className='min-w-6' strokeWidth={1.5} /></span>}
            </a>
          )
        })}
        <SwicthSchemes />
      </nav>
    </header>
  )
}

export default Navbar
