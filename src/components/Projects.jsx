import { FolderGit2, Github, Globe, MessageCircleWarning } from 'lucide-preact'
import { PROJECTS } from '../constants/vars'
const Projects = () => {
  // @ts-ignore
  return (
    <section id='projects' class='w-full scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-2.5 self-start mb-[5px] flex flex-row justify-start items-center gap-2.5'><FolderGit2 className='min-w-[26px]' strokeWidth={2} />Proyectos</h2>
      <div className='flex flex-col md:grid md:grid-cols-2 md:gap-10'>
        {PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

const Project = ({ name, area, date, img, deployment, repository, description, stack }) => {
  const getYear = date.split('-')[0]
  const projectDate = new Date(date)
  const currentDate = new Date()
  return (
    <article className='w-full max-w-full flex flex-col justify-start items-start gap-2.5 mb-10'>
      <a href={deployment !== null && deployment} target='__blank' className='overflow-hidden'>
        <img src={img || 'src/assets/img/linkedinPic.webp'} alt={`${name} portada`} className={`duration-150 ease-out ${deployment !== null && 'lg:hover:scale-105 cursor-pointer'}`} />
      </a>
      <div className='w-full flex flex-col'>
        <h3>{name}</h3>
        <h4>{area}</h4>
        <h4><span>Estado: </span>{currentDate > projectDate ? <span className='opacity-80'>finalizado en {getYear} ✅</span> : <span className='developmentBadge'>en desarrollo 💻</span>}</h4>
      </div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      {deployment === null && repository === null
        ? (
          <div className='flex flex-row items-start gap-2.5'>
            <span className='min-w-6 opacity-90'><MessageCircleWarning strokeWidth={2} /></span>
            <p className='opacity-90 font-semibold italic'>Este proyecto es privado, por lo que el código no está disponible en estos momentos</p>
          </div>
        )
        : (
          <div className='flex flex-row gap-2.5 flex-wrap'>
            {deployment !== null && <a href={deployment} target='_blank' rel='noreferrer' className='buttonLink'><span className='lucideIcon'><Globe strokeWidth={1.5} /></span><span>Sitio web</span></a>}
            {repository !== null && <a href={repository} target='_blank' rel='noreferrer' className='buttonLink'><span className='lucideIcon'><Github strokeWidth={1.5} /></span><span>Respositorio</span></a>}
          </div>
        )}
      <h4>Stack utilizado</h4>
      <div className='flex flex-row gap-5 flex-wrap'>
        {stack.map((tech, index) => <span key={tech + index} className='badge'>{tech}</span>)}
      </div>
    </article>
  )
}

export default Projects
