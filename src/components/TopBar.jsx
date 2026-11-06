import { LINKS } from '../constants/vars'
import useActiveSection from '../hooks/useActiveSection'
import SwitchSchemes from './SwitchSchemes'

const TopBar = () => {
  const active = useActiveSection()

  return (
    <header className='topbar'>
      <div className='sheet topbar-inner'>
        <a className='topbar-name' href='#perfil'>Santiago Martínez · SmartinezDev</a>
        <div className='topbar-right'>
          <nav aria-label='Secciones' className='topbar-links'>
            {LINKS.map(({ link, title }) => (
              <a
                key={link}
                href={link}
                aria-current={active === link.replace('#', '') ? 'true' : undefined}
              >
                {title}
              </a>
            ))}
          </nav>
          <SwitchSchemes />
        </div>
      </div>
    </header>
  )
}

export default TopBar
