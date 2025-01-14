/* eslint-disable no-unused-vars */
import { EXPERIENCE } from '../constants/vars'
import { BriefcaseBusiness } from 'lucide-preact'
const Experience = () => {
  return (
    <section id='experience' className='scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-2.5 self-start mb-2.5 flex flex-row justify-start items-center gap-2.5'><BriefcaseBusiness className='min-w-[26px]' strokeWidth={2} />Experiencia</h2>
      <div className='flex flex-col gap-10'>
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
      <div className='flex flex-col gap-2.5'>
        <div>
          <h3>{role}</h3>
          <h5 className='flex flex-row gap-2.5 opacity-80'>
            {company}
            <span>|</span>
            <time>{date}</time>
          </h5>
        </div>
        <p>{description}</p>
        <h5>Stack utilizado</h5>
        <div className='flex flex-wrap gap-5'>
          {stack?.map((tech, index) => <span key={tech + index} className='badge'>{tech}</span>)}
        </div>
      </div>
    </div>
  )
}

export default Experience
