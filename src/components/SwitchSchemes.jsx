import { Moon, Sun } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'

const THEME_COLORS = { light: '#E4E7E1', dark: '#111511' }

const storedScheme = () => {
  if (typeof window === 'undefined') return null

  const saved = window.localStorage.getItem('color-scheme')
  return saved === 'light' || saved === 'dark' ? saved : null
}

const systemScheme = () => {
  if (typeof window === 'undefined') return null

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyScheme = (scheme) => {
  document.documentElement.setAttribute('data-theme', scheme)
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute('content', THEME_COLORS[scheme])
  })
}

const SwitchSchemes = ({ compact = false }) => {
  const [scheme, setScheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'

    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const resolved = storedScheme() || systemScheme() || 'light'
    setScheme(resolved)
    applyScheme(resolved)

    const media = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!media) return

    const onSystemChange = (event) => {
      if (storedScheme()) return

      const next = event.matches ? 'dark' : 'light'
      setScheme(next)
      applyScheme(next)
    }

    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  const toggleScheme = () => {
    const next = scheme === 'dark' ? 'light' : 'dark'

    applyScheme(next)
    window.localStorage.setItem('color-scheme', next)
    setScheme(next)
  }

  const label = scheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  if (compact) {
    return (
      <button type='button' onClick={toggleScheme} className='mobile-link' aria-label={label} title={label}>
        Tema
      </button>
    )
  }

  return (
    <button type='button' onClick={toggleScheme} className='theme-toggle' aria-label={label} title={label}>
      {scheme === 'dark'
        ? <Moon className='theme-icon moon' strokeWidth={2} />
        : <Sun className='theme-icon sun' strokeWidth={2} />}
    </button>
  )
}

export default SwitchSchemes
