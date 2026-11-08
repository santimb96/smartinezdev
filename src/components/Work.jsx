import { Github, ArrowUpRight, Lock } from 'lucide-preact'
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

const yearOf = (value) => value.split('-')[0]

const statusOf = ({ deployment, repository }) => {
  if (deployment) return 'En producción'
  if (repository) return 'Repositorio público'
  return 'Privado'
}

const sorted = [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date))

const Work = () => {
  return (
    <section id='proyectos' className='band'>
      <div className='band-head'>
        <h2 className='band-title'>Proyectos</h2>
        <span className='band-meta'>{sorted.length} proyectos · 2021—2026</span>
      </div>
      <p className='lede'>
        Productos de clientes y proyectos propios, del más reciente al más antiguo.
        Cada ficha incluye año, tipo, rol, stack y estado; los que están en producción se abren desde aquí.
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
  const { name, area, type, date, img, deployment, repository, description, stack, caption } = project
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
        <p className='plate-caption'>
          <span>{caption}</span>
          <span>{yearOf(date)}</span>
        </p>
      </div>

      <div>
        <h3 className='plate-title'>
          {primaryLink
            ? <a href={primaryLink} target='_blank' rel='noreferrer'>{name}</a>
            : name}
        </h3>
        <p className='plate-desc'>{renderEmphasis(description)}</p>

        <dl className='spec'>
          <div><dt>Rol</dt><dd>{area}</dd></div>
          <div><dt>Tipo</dt><dd>{type}</dd></div>
          <div><dt>Stack</dt><dd>{stack.join(' · ')}</dd></div>
          <div><dt>Estado</dt><dd>{statusOf(project)}</dd></div>
        </dl>

        {deployment || repository
          ? (
            <div className='spec-links'>
              {deployment && (
                <a className='spec-link' href={deployment} target='_blank' rel='noreferrer'>
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden='true' />
                  <span>Ver sitio</span>
                </a>
              )}
              {repository && (
                <a className='spec-link' href={repository} target='_blank' rel='noreferrer'>
                  <Github size={14} strokeWidth={2} aria-hidden='true' />
                  <span>Repositorio</span>
                </a>
              )}
            </div>
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
