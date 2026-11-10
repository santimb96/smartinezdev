import { Copy, CopyCheck, Mail, Github, ArrowDownToLine, Printer, Coffee } from 'lucide-preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import LinkedInIcon from '../icons/LinkedInIcon.jsx'

const EMAIL = 'santiagomartinezbota@gmail.com'

const Contact = () => {
  const [copyState, setCopyState] = useState('idle')
  const resetTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const scheduleReset = (delay) => {
    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopyState('idle'), delay)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyState('copied')
      scheduleReset(2200)
    } catch (error) {
      console.error('No se pudo copiar el correo:', error)
      setCopyState('error')
      scheduleReset(3200)
    }
  }

  return (
    <section id='contacto' className='band'>
      <div className='band-head'>
        <h2 className='band-title'>Contacto</h2>
        <span className='band-meta'>Mallorca · España</span>
      </div>

      <div className='contact-grid'>
        <div>
          <p className='contact-line'>¿Hablamos?</p>
          <p className='contact-soft'>
            Estoy disponible para entrevistas y proyectos. Cuéntame qué necesitas
            y te responderé con una propuesta concreta.
          </p>
          <button
            type='button'
            className='copy-mail'
            onClick={copyToClipboard}
            aria-label={`Copiar el correo ${EMAIL}`}
          >
            {EMAIL}
            {copyState === 'copied'
              ? <CopyCheck size={17} strokeWidth={2} aria-hidden='true' />
              : <Copy size={17} strokeWidth={2} aria-hidden='true' />}
          </button>
          <p className='copy-status' role='status'>
            {copyState === 'copied' && 'Correo copiado.'}
            {copyState === 'error' && 'No se pudo copiar. Selecciónalo y cópialo manualmente.'}
          </p>
        </div>

        <div className='contact-links'>
          <a href={`mailto:${EMAIL}`} aria-label='Escribir un correo a Santiago Martínez'>
            Correo
            <Mail size={16} strokeWidth={2} aria-hidden='true' />
          </a>
          <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' aria-label='Ver el perfil de LinkedIn de Santiago Martínez'>
            LinkedIn
            <LinkedInIcon width='16' height='16' />
          </a>
          <a href='https://github.com/santimb96' target='_blank' rel='noreferrer' aria-label='Ver el perfil de GitHub de Santiago Martínez'>
            GitHub
            <Github size={16} strokeWidth={2} aria-hidden='true' />
          </a>
          <button
            type='button'
            className='contact-action no-print'
            onClick={() => window.print()}
            aria-label='Imprimir la página o guardarla en PDF'
          >
            Imprimir o guardar en PDF
            <Printer size={16} strokeWidth={2} aria-hidden='true' />
          </button>
          <a className='no-print' href='/documents/cv_santiago_martinez.pdf' download='cv_santiago_martinez.pdf' aria-label='Descargar el CV en PDF'>
            CV en PDF
            <ArrowDownToLine size={16} strokeWidth={2} aria-hidden='true' />
          </a>
          <a
            className='no-print'
            href='https://ko-fi.com/smartinezdev'
            target='_blank'
            rel='noreferrer'
            aria-label='Donar a Santiago Martínez en Ko-fi (se abre en una pestaña nueva)'
          >
            Invítame a un café
            <Coffee size={16} strokeWidth={2} aria-hidden='true' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
