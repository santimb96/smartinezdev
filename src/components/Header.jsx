/* eslint-disable no-unused-vars */
import { Linkedin, Mail } from 'lucide-preact'
import linkedinPic from '../assets/img/linkedinPic.webp'

const Header = () => {
  return (
    <header className='h-full scroll-m-20 mt-20 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center'>
      <img src={linkedinPic} alt='Profile picture' className='profileImg' />
      <div className='flex flex-col justify-between h-full'>
        <h1>Santi Martínez</h1>
        <p className='presentation'>Programador web con <strong>+3 años de experiencia</strong> trabajando en el mundo <strong><i>front-end</i></strong>, así como en el <strong>diseño de interfaces y experiencia de usuario</strong>. Keep it simple 😉</p>
        <div className='flex flex-row gap-3 mt-3'>
          <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='contactLink'>LinkedIn <Linkedin className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>
          <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='contactLink'>Contacto <Mail className='w-[16px] md:w-[18px] xl:w-[20px]' /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
