/* eslint-disable no-unused-vars */
import { Linkedin, Mail } from 'lucide-preact'
import linkedinPic from '../assets/img/linkedinPic.webp'

const Header = () => {
  return (
    <section className='h-full scroll-m-20 mt-20 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center'>
      <img src={linkedinPic} alt='Profile picture' className='profileImg' />
      <div className='flex flex-col justify-between h-full'>
        <h1>Santi Martínez</h1>
        <p className='presentation'>Programador web con <strong>+3 años de experiencia</strong> como desarrollador <strong><i>front-end</i></strong>, así como en el <strong>diseño de interfaces y experiencia de usuario</strong>. Keep it simple 😉</p>
        <div className='flex flex-row gap-2.5 mt-3'>
          <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='buttonLink'><Linkedin className='lucideIcon' strokeWidth={1.5} /> <span>LinkedIn</span></a>
          <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='buttonLink'><Mail className='lucideIcon' strokeWidth={1.5} /><span>Contacto</span></a>
        </div>
      </div>
    </section>
  )
}

export default Header
