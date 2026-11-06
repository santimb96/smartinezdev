import { LINKS } from '../constants/vars'
import useActiveSection from '../hooks/useActiveSection'
import SwitchSchemes from './SwitchSchemes'

const MobileNav = () => {
  const active = useActiveSection()

  return (
    <nav className='mobile-nav' aria-label='Secciones'>
      {LINKS.map(({ link, title }) => (
        <a
          key={link}
          href={link}
          className='mobile-link'
          aria-current={active === link.replace('#', '') ? 'true' : undefined}
        >
          {title}
        </a>
      ))}
      <SwitchSchemes compact />
    </nav>
  )
}

export default MobileNav
