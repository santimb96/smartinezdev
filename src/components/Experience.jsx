/* eslint-disable no-unused-vars */
import { EXPERIENCE } from '../constants/vars'
import { BriefcaseBusiness } from 'lucide-preact'
const Experience = () => {
  return (
    <section id='experience' className='scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-[10px] self-start text-[24px] md:text-[32px] xl:text-[40px] font-bold mb-[5px] flex flex-row justify-start items-center gap-[10px]'><BriefcaseBusiness className='w-[24px] md:w-[32px] xl:w-[40px]' />Experiencia</h2>
      <div className='flex flex-col gap-5'>
        {EXPERIENCE.map((experience, index) => <TimeLine key={index + experience.company} experience={experience} />)}
      </div>
    </section>

  )
}

const TimeLine = ({ experience }) => {
  const { company, role, date, description, logo, stack } = experience
  return (
    <div className='timelineCard'>
      <img src={logo} alt='Company picture' className='companyImg mt-[7px]' />
      <div className='flex flex-col gap-2'>
        <h3>{role}</h3>
        <div className='flex flex-row gap-2 font-medium opacity-80'>
          <h4>{company}</h4>
          <span> - </span>
          <time>{date}</time>
        </div>
        <p>{description}</p>
        <h3>Stack</h3>
        <div className='flex flex-wrap gap-2'>
          {stack?.map((tech, index) => <span key={tech + index} className='badge'>{tech}</span>)}
        </div>
      </div>
    </div>
  )
}

export default Experience
