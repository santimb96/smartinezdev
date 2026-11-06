import { Github, Globe, Lock } from 'lucide-preact'
import { PROJECTS } from '../constants/vars'

const EMPHASIS = /<i>(.+?)<\/i>/g

const renderEmphasis = (text) => {
  const parts = []
  let lastIndex = 0

  for (const match of text.matchAll(EMPHASIS)) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(<em key={match.index}>{match[1]}</em>)
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts
}

const parseDate = (value) => {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const yearOf = (value) => value.split('-')[0]

const sorted = [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date))

const Work = () => {
  return (
    <section id='obra' className='band'>
      <div className='band-head'>
        <h2 className='band-title'>Obra</h2>
        <span className='band-meta'>{sorted.length} proyectos · 2021—2026</span>
      </div>
      <p className='lede'>
        Productos de clientes y proyectos propios, del más reciente al más antiguo.
        Cada ficha incluye año, rol, stack y estado; los que están en producción se abren desde aquí.
      </p>

      <div style={{ marginTop: '40px' }}>
        {sorted.map((project, index) => (
          <Plate key={project.name} project={project} index={index} featured={index === 0} />
        ))}
      </div>
    </section>
  )
}

const Plate = ({ project, index, featured }) => {
  const { name, area, date, img, deployment, repository, description, stack } = project
  const finished = new Date() > parseDate(date)
  const primaryLink = deployment || repository
  const image = (
    <img
      src={img}
      alt={`Captura del sitio ${name}`}
      width='605'
      height='340'
      loading={featured ? 'eager' : 'lazy'}
      decoding='async'
    />
  )

  return (
    <article className={`plate${featured ? ' plate-featured' : ''}`}>
      <div>
        {primaryLink
          ? (
            <a className='plate-media' href={primaryLink} target='_blank' rel='noreferrer' aria-label={`Abrir ${name}`}>
              {image}
            </a>
            )
          : (
            <div className='plate-media'>{image}</div>
            )}
        <div className='plate-caption'>
          <span>Ficha {String(index + 1).padStart(2, '0')}</span>
          <span>{yearOf(date)}</span>
        </div>
      </div>

      <div>
        <h3 className='plate-title'>{name}</h3>
        <p className='plate-desc'>{renderEmphasis(description)}</p>

        <dl className='spec'>
          <div><dt>Rol</dt><dd>{area}</dd></div>
          <div><dt>Stack</dt><dd>{stack.join(' · ')}</dd></div>
          <div><dt>Estado</dt><dd>{finished ? 'Finalizado' : 'En curso'}</dd></div>
        </dl>

        {deployment || repository
          ? (
            <p style={{ display: 'flex', gap: '18px', marginTop: '16px' }}>
              {deployment && (
                <a className='spec-link' href={deployment} target='_blank' rel='noreferrer'>
                  <Globe size={13} strokeWidth={2} aria-hidden='true' /> Ver sitio
                </a>
              )}
              {repository && (
                <a className='spec-link' href={repository} target='_blank' rel='noreferrer'>
                  <Github size={13} strokeWidth={2} aria-hidden='true' /> Repositorio
                </a>
              )}
            </p>
            )
          : (
            <p className='plate-note'>
              <Lock size={14} strokeWidth={2} aria-hidden='true' />
              Proyecto privado: el código no está disponible.
            </p>
            )}
      </div>
    </article>
  )
}

export default Work
