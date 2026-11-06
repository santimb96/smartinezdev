import { EXPERIENCE } from '../constants/vars'

const yearLabel = (experience) => {
  if (experience.dateTime) return experience.dateTime.slice(0, 4)
  return `${new Date().getFullYear()} —`
}

const Timeline = () => {
  return (
    <section id='trayectoria' className='band'>
      <div className='band-head'>
        <h2 className='band-title'>Trayectoria</h2>
        <span className='band-meta'>{EXPERIENCE.length} equipos · 2021—2026</span>
      </div>

      <div className='timeline'>
        {EXPERIENCE.map((experience) => (
          <div className='timeline-row' key={experience.company}>
            <div className='timeline-year'>
              {experience.logo && (
                <img
                  className='timeline-logo'
                  src={experience.logo}
                  alt=''
                  width='24'
                  height='24'
                  loading='lazy'
                  decoding='async'
                />
              )}
              <span>{yearLabel(experience)}</span>
            </div>
            <div>
              <h3 className='timeline-role'>{experience.role}</h3>
              <p className='timeline-meta'>
                {experience.company} · {experience.location} ·{' '}
                {experience.dateTime
                  ? <time dateTime={experience.dateTime}>{experience.date}</time>
                  : <span>{experience.date}</span>}
              </p>
              <p className='timeline-desc'>{experience.description}</p>
              <p className='timeline-stack'>{experience.stack.join(' · ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
