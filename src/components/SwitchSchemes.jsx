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
    <button onClick={toggleScheme} className='min-w-max p-2.5 border border-transparent rounded-full flex justify-center items-center lg:hover:border lg:hover:border-[var(--secondary)]/80' aria-label='Cambiar tema'>
      {scheme === 'dark' ? <Sun className='min-w-6' fill='orange' stroke='orange' strokeWidth={1.5} /> : <Moon className='min-w-6' fill='yellow' strokeWidth={1.5} />}
    </button>
  )
}

export default SwicthSchemes
