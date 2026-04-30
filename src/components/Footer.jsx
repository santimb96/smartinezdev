import { LINKS } from '../constants/vars'

const Footer = () => {
  return (
    <footer className='min-h-min min-w-full bg-[var(--filled-accent-bg)] text-white flex flex-col items-center justify-start py-5 px-2.5 text-[14px] text-ellipsis'>
      <div className='md:w-[75vw] lg:w-[60vw] flex flex-row items-center justify-center gap-5 flex-wrap'>
        {LINKS.map(({ link, title }, index) => {
          const isContactLink = index === LINKS.length - 1
          return (
            <a key={title} href={isContactLink ? 'mailto:santiagomartinezbota@gmail.com' : link} aria-label={isContactLink ? 'Enviar correo a Santiago Martínez' : 'Ir a la sección ' + title} className='hover:underline hover:text-white flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:gap-2.5'>
              <span className='order-2 md:order-2 pt-[2px]'>{title}</span>
            </a>
          )
        })}
      </div>
      <hr className='footerDivider md:w-[75vw] lg:w-[60vw] w-full my-5' />
      <span className='text-center'>
        Hecho con ♥️ por
        <a href='https://github.com/santimb96' target='_blank' rel='noreferrer' className='underline ml-1.5'>
          Santi Martínez.
        </a>
      </span>
    </footer>
  )
}

export default Footer
