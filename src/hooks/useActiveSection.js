import { useEffect, useState } from 'preact/hooks'
import { LINKS } from '../constants/vars'

const useActiveSection = () => {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = LINKS
      .map(({ link }) => document.getElementById(link.replace('#', '')))
      .filter(Boolean)

    if (sections.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      const line = window.scrollY + window.innerHeight * 0.35
      let current = sections[0].id

      for (const section of sections) {
        if (line >= section.offsetTop) current = section.id
      }

      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  return active
}

export default useActiveSection
