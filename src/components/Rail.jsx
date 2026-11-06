import { useEffect, useState } from 'preact/hooks'
import { LINKS } from '../constants/vars'
import useActiveSection from '../hooks/useActiveSection'

const Rail = () => {
  const [marks, setMarks] = useState([])
  const active = useActiveSection()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = LINKS
      .map(({ link }) => document.getElementById(link.replace('#', '')))
      .filter(Boolean)

    if (sections.length === 0) return

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setMarks(sections.map((section) => ({
        id: section.id,
        pos: scrollable > 0 ? Math.min(1, Math.max(0, section.offsetTop / scrollable)) : 0
      })))
    }

    measure()
    window.addEventListener('resize', measure, { passive: true })
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <nav className='rail' aria-label='Índice de la lámina'>
      <div className='rail-track'>
        <div className='rail-marker' aria-hidden='true' />
        {LINKS.map(({ link, title }) => {
          const id = link.replace('#', '')
          const mark = marks.find((item) => item.id === id)
          return (
            <a
              key={id}
              href={link}
              aria-current={active === id ? 'true' : undefined}
              className='rail-link'
              style={mark ? { top: `${mark.pos * 100}%` } : undefined}
            >
              {title}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Rail
