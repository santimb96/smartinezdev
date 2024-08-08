/* eslint-disable no-unused-vars */
import { Linkedin, Mail } from 'lucide-preact'
import linkedinPic from '../assets/img/linkedinPic.webp'

const Header = () => {
  return (
    <header className='flex flex-col gap-[10px] pt-20'>
      <div className='flex flex-row justify-start items-center gap-[10px] xl:gap-[20px]'>
        <img src={linkedinPic} alt='linkedinPic' className='filter grayscale contrast-100 rounded-full h-auto max-h-[150px] md:max-h-[200px] xl:max-h-[250px] w-auto' />
        <div className='flex flex-col justify-start'>
          <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='rounded-3xl text-center pt-[5px] pb-[5px] pr-[10px] pl-[10px] bg-gradient-to-r from-green-400 to-green-600 text-white w-min text-nowrap text-[12px] md:text-[14px] xl:text-[16px] transition ease-in-out delay-200 hover:animate-pulse hover:text-white visited:text-white'>Disponible para trabajar</a>
          <h1 className='text-[28px] md:text-[36px] xl:text-[44px] font-extrabold mt-[10px]'>Santi Martínez</h1>
          <h2 className='text-[20px] md:text-[28px] xl:text-[36px] font-medium'>Desarrollador front-end</h2>
          <div className='flex flex-row justify-between mt-[10px] gap-[5px] md:gap-[10px]'>
            {/* <a href='https://github.com/santimb96' target='_blank' rel='noreferrer' className='w-full flex flex-row gap-[5px] items-center justify-center border border-green-700 rounded-md p-[5px] text-[14px] lg:text-[20px]'>GitHub <Github className='w-[18px] lg:w-[24px]' /></a> */}
            <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='w-full flex flex-row gap-[5px] items-center justify-center border border-green-700 rounded-md p-[5px] text-[14px] md:text-[16px] xl:text-[18px]'>LinkedIn <Linkedin className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>
            <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='w-full flex flex-row gap-[5px] items-center justify-center border border-green-700 rounded-md p-[5px] text-[14px] md:text-[16px] xl:text-[18px]'>Contacto <Mail className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>
          </div>
        </div>
      </div>
      <p className='w-full xl:w-[60ch] text-[18px] md:text-[22px] xl:text-[28px]'>Programador web con <strong>+3 años de experiencia</strong> trabajando en el mundo <i className='font-bold'>front-end</i>, así como en el <strong>diseño de interfaces y experiencia de usuario</strong>. Keep it simple 😉</p>
    </header>
  )
}

export default Header
