/* eslint-disable no-unused-vars */
import { Linkedin, Mail, ArrowDownToLine } from 'lucide-preact'
import linkedinPic from '../../public/img/linkedinPic.webp'

const Header = () => {
  return (
    <section id='aboutme' className='h-full scroll-m-28 mt-20 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center group'>
      <img src={linkedinPic} alt='Profile picture' className='profileImg grayscale lg:group-hover:grayscale-0 duration-300 ease-in-out' />
      <div className='flex flex-col justify-between h-full'>
        <h1>Santi Martínez</h1>
        <p className='presentation'>Programador web con <strong>+3 años de experiencia</strong> como desarrollador <strong><i>front-end</i></strong>, así como en el <strong>diseño de interfaces y experiencia de usuario</strong>. Keep it simple 😉</p>
        <div className='flex flex-row flex-wrap gap-2.5 mt-3'>
          <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='buttonLink'><span className='lucideIcon'><Linkedin strokeWidth={1.5} /></span><span>LinkedIn</span></a>
          <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='buttonLink'><span className='lucideIcon'><Mail strokeWidth={1.5} /></span><span>Contacto</span></a>
          <a href='/documents/cv_santiago_martinez.pdf' download='cv_santiago_martinez.pdf' className='buttonLink'><span className='lucideIcon'><ArrowDownToLine strokeWidth={1.5} /></span><span>CV</span></a>
        </div>
      </div>
    </section>
  )
}

export default Header
