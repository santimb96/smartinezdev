import { FolderGit2, Github, Globe } from 'lucide-preact'
import { PROJECTS } from '../constants/vars'
const Projects = () => {
  // @ts-ignore
  return (
    <section id='projects' class='w-full scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-2.5 self-start mb-[5px] flex flex-row justify-start items-center gap-2.5'><FolderGit2 className='min-w-[26px]' strokeWidth={2} />Proyectos</h2>
      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-10'>
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
    <article className='w-full max-w-sm lg:max-w-full flex flex-col justify-start items-start gap-2.5 mb-10'>
      <img src={img || 'src/assets/img/linkedinPic.webp'} alt={`${name} portada`} className='projectImg' />
      <div className='w-full flex flex-col'>
        <h3>{name}</h3>
        <h4>{area}</h4>
        <h5 className='opacity-80'><span>Estado: </span>{currentDate > projectDate ? <span>finalizado en {getYear} ✅</span> : <span className='text-green-700'>en desarrollo 💻</span>}</h5>
      </div>
      <p>{description}</p>
      <div className='flex flex-row gap-2.5'>
        {deployment !== null && <a href={deployment} target='_blank' rel='noreferrer' className='buttonLink'><Globe className='lucideIcon' strokeWidth={1.5} /><span>Sitio web</span></a>}
        <a href={repository} target='_blank' rel='noreferrer' className='buttonLink'><Github className='lucideIcon' strokeWidth={1.5} /><span>Respositorio</span></a>
      </div>
      <h4>Stack utilizado</h4>
      <div className='flex flex-row gap-5 flex-wrap'>
        {stack.map((tech, index) => <span key={tech + index} className='badge'>{tech}</span>)}
      </div>
    </article>
  )
}

export default Projects
