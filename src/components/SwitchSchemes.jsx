/* eslint-disable no-undef */
import { Moon, Sun } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'

const SwicthSchemes = () => {
  const [scheme, setScheme] = useState('light')

  useEffect(() => {
    const savedScheme = localStorage.getItem('color-scheme') || 'light'
    setScheme(savedScheme)
    document.documentElement.setAttribute('data-theme', savedScheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', scheme)
    localStorage.setItem('color-scheme', scheme)
  }, [scheme])

  const toggleScheme = () => {
    setScheme((prevscheme) => (prevscheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <button onClick={toggleScheme} className={`min-w-10 p-3 border border-transparent rounded-full flex justify-center items-center lg:hover:border lg:hover:border-[var(--secondary)]/80 ${scheme === 'dark' ? 'lg:hover:backdrop-brightness-125' : 'lg:hover:backdrop-brightness-90'} group duration-150 ease-in-out`} aria-label='Cambiar modos de visualización' title={scheme === 'dark' ? 'Cambiar a modo claro' : 'cambiar a modo oscuro'}>
      {scheme === 'dark' ? <Moon className='min-w-6 lg:group-hover:scale-125 duration-150 ease-in-out' fill='yellow' stroke='' strokeWidth={2} /> : <Sun className='min-w-6 lg:group-hover:scale-125 duration-150 ease-in-out' fill='orange' stroke='orange' strokeWidth={2} />}
    </button>
  )
}

export default SwicthSchemes
