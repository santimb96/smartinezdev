/* eslint-disable no-unused-vars */
import { EXPERIENCE } from '../constants/vars'
import { BriefcaseBusiness } from 'lucide-preact'
const Experience = () => {
  return (
    <section id='experience' className='scroll-m-20 pb-[10px]'>
      <h2 className='scroll-m-20 pb-[10px] self-start text-[24px] md:text-[32px] xl:text-[40px] font-bold mb-[5px] flex flex-row justify-start items-center gap-[10px]'><BriefcaseBusiness className='text-[24px] md:text-[32px] xl:text-[40px]' />Experiencia</h2>
      <ol className='ml-[10px] relative border-s border-green-500'>
        {EXPERIENCE.map((experience, index) => <TimeLine key={index + experience.company} experience={experience} />)}
      </ol>
    </section>

  )
}

const TimeLine = ({ experience }) => {
  const { company, role, date, location, description, stack } = experience
  return (
    <li className='mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 mt-1'>
        <BriefcaseBusiness className='w-[14px] md:w-[20px] xl:w-[24px]' />
      </span>
      <h3 className='mb-1 text-[20px] md:text-[24px] xl:text-[28px] font-semibold'>{role}</h3>
      <h4 className='mb-1 text-[18px] md:text-[22px] xl:text-[26px] font-medium opacity-80'>{company}</h4>
      <div className='flex flex-row justify-start items-center mb-1 gap-3'>
        <time className='text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-none opacity-60'>{date}</time>
        <span className='font-normal text-[16px] md:text-[18px] xl:text-[20px] opacity-60'>|</span>
        <span className='text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-none opacity-60'>{location}</span>
      </div>
      <p className='mb-4 md:text-[20px] xl:text-[22px]'>{description}</p>
      <h4 className='font-semibold text-[18px] md:text-[22px] xl:text-[26px] mb-2'>Stack:</h4>
      <div className='flex flex-row justify-start items-center gap-[5px] flex-wrap'>{stack.map((item, index) => (<span key={index + item} className='rounded-3xl pt-[2px] pb-[2px] pl-[10px] pr-[10px] bg-green-700 text-white text-[14px] md:text-[16px] xl:text-[18px]'>{item}</span>))}</div>
    </li>
  )
}

export default Experience
