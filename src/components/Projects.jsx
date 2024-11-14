import { FolderGit2, Github, Globe } from 'lucide-preact'
import { PROJECTS } from '../constants/vars'
const Projects = () => {
  // @ts-ignore
  return (
    <section id='projects' class='w-full scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-[10px] self-start text-[24px] md:text-[32px] xl:text-[40px] font-bold mb-[5px] flex flex-row justify-start items-center gap-[10px]'><FolderGit2 className='w-[24px] md:w-[32px] xl:w-[40px]' />Proyectos</h2>
      <div className='flex flex-col gap-5'>
        {PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

// @ts-ignore
const Project = ({ name, area, date, img, deployment, repository, description, stack }) => {
  const getYear = date.split('-')[0]
  const projectDate = new Date(date)
  const currentDate = new Date()
  return (
    <article className='w-full flex flex-col justify-start items-start gap-[10px] border border-black'>
      <div className='p-3 w-full flex flex-col gap-3'>
        <img src={img || 'src/assets/img/linkedinPic.webp'} alt={`${name} portada`} className='projectImg' />
        <div className='w-full'>
          <div className='flex flex-col'>
            <h3>{name}</h3>
            <h4 className='font-medium'>{area}</h4>
            <h5 className='font-medium'>Estado: {currentDate > projectDate ? <span className='opacity-80'>finalizado en {getYear} ✅</span> : <span className='text-green-700'>en desarrollo 💻</span>}</h5>
          </div>
        </div>
        <p>{description}</p>
        <div className='flex flex-row gap-2'>
          {deployment !== null && <a href={deployment} target='_blank' rel='noreferrer' className='contactLink'>Despliegue <Globe className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>}
          <a href={repository} target='_blank' rel='noreferrer' className='contactLink'>Repositorio <Github className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>
        </div>
        <h3>Stack utilizado</h3>
        <div className='flex flex-row gap-2 flex-wrap'>
          {stack.map((tech, index) => <span key={tech + index} className='badge'>{tech}</span>)}
        </div>
      </div>
    </article>
  )
}

export default Projects
