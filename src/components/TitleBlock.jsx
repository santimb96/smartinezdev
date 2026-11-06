import { Mail, ArrowDownToLine } from 'lucide-preact'
import linkedinPic from '../../public/img/linkedinPic.webp'

const START_YEAR = 2021
const YEAR = new Date().getFullYear()
const YEARS = Math.max(1, YEAR - START_YEAR)

const TitleBlock = ({ projectCount, teamCount }) => {
  return (
    <section id='ahora' className='title-block'>
      <div>
        <h1 className='title-name'>Santiago<br />Martínez</h1>
        <p className='title-role'>Desarrollador full-stack · Diseño de interfaces</p>
        <p className='title-state'>
          <span className='state-dot' aria-hidden='true' />
          Disponible para entrevistas y proyectos · Mallorca
        </p>

        <div className='measure'>
          <p className='measure-note'>{YEARS} años · {projectCount} proyectos · {teamCount} equipos</p>
          <div className='measure-line' aria-hidden='true' />
          <div className='measure-ends' aria-hidden='true'>
            <span>{START_YEAR}</span>
            <span>{YEAR}</span>
          </div>
        </div>

        <div className='title-actions'>
          <a
            className='btn btn-primary'
            href='/documents/cv_santiago_martinez.pdf'
            download='cv_santiago_martinez.pdf'
            aria-label='Descargar el CV de Santiago Martínez en PDF'
          >
            <ArrowDownToLine size={15} strokeWidth={2} aria-hidden='true' />
            Descargar CV
          </a>
          <a
            className='btn'
            href='mailto:santiagomartinezbota@gmail.com'
            aria-label='Escribir un correo a Santiago Martínez'
          >
            <Mail size={15} strokeWidth={2} aria-hidden='true' />
            Escríbeme
          </a>
        </div>
      </div>

      <figure className='portrait'>
        <div className='portrait-plate'>
          <img
            src={linkedinPic}
            // @ts-ignore
            fetchpriority='high'
            width='480'
            height='600'
            alt='Retrato de Santiago Martínez'
          />
        </div>
        <figcaption>
          <span>Retrato · {YEAR}</span>
          <span>Lámina 01</span>
        </figcaption>
      </figure>
    </section>
  )
}

export default TitleBlock
