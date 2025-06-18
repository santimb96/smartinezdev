import { Copy, CopyCheck, Mail, Github } from 'lucide-preact'
import LinkedInIcon from '../icons/LinkedInIcon.jsx'
import { useState } from 'preact/hooks'

const Contact = () => {
    const [copied, setCopied] = useState(false)
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('santiagomartinezbota@gmail.com')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Error al copiar al portapapeles:', error)
        }
    }
    return (
        <section id='contact' className='w-full scroll-m-20 pb-[10px]'>
            <h2 className='scroll-m-20 pb-2.5 self-start mb-[5px] flex flex-row justify-start items-center gap-2.5'>
                <Mail className='min-w-[26px]' strokeWidth={2} />
                Contacto
            </h2>
            <div className='w-full flex-wrap lg:flex-nowrap flex flex-col justify-start items-start gap-2.5 lg:flex-row'>
                <div className='w-full lg:w-3/4 flex flex-col justify-start items-start gap-2.5'>
                    <p>¡Ponte en contacto conmigo por cualquiera de las siguientes vías!</p>
                    <div onClick={copyToClipboard} className={`mt-2.5 group transition-all duration-300 ease-in-out cursor-pointer flex justify-start items-center gap-5 lg:mb-5 lg:w-full border-slate-300 hover:border-[var(--detail)] rounded-full ${copied ? 'border-[var(--detail)] text-[var(--detail)]' : ''}`}>
                        <span className={`group-hover:text-[var(--detail)] group-hover:scale-105 transition-all`}>santiagomartinezbota@gmail.com</span>
                        <span className={`group-hover:text-[var(--detail)] group-hover:scale-110 transition-all lucideIcon relative`}>
                            {copied ? <CopyCheck strokeWidth={2} /> : <Copy strokeWidth={2} />}
                            {copied && <small className='absolute bottom-7 -right-5 min-w-full bg-[var(--detail)] text-[var(--primary)] rounded-full px-1 text-[10px] z-10 duration-150 ease-in-out'>¡Copiado!</small>}
                        </span>
                    </div>
                </div>
                <div className='flex justify-start items-start lg:flex-col gap-2.5 flex-wrap lg:w-1/2 mt-5 lg:mt-0'>
                    <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='buttonLink flex justify-start items-center gap-5 lg:w-full'>
                        <span className='lucideIcon'>
                            <Mail strokeWidth={2} />
                        </span>
                        <span>Correo electrónico</span>
                    </a>
                    <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='buttonLink lg:w-full'>
                        <span className='lucideIcon'>
                            <LinkedInIcon strokeWidth={2} />
                        </span>
                        <span>LinkedIn</span>
                    </a>
                    <a href='https://github.com/santimb96' target='_blank' rel='noreferrer' className='buttonLink lg:w-full'>
                        <span className='lucideIcon'>
                            <Github strokeWidth={2} />
                        </span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <div className='mt-20 w-full flex flex-col justify-center items-center'>
                <p className='text-center w-full md:w-3/4 lg:w-1/2'>
                    ¿Te ha gustado mi portfolio? Sería de gran ayuda que lo compartas con tu circulo de contactos. ¡Muchísimas gracias!
                </p>
                <div className='mt-5 flex justify-center items-center gap-5'>
                    <a href="https://www.linkedin.com/shareArticle?url=https://smartinezdev.com&title=Portfolio%20de%20Santiago%20Martínez&summary=Un%20portfolio%20desarrollado%20con%20ReactJS%20y%20TailwindCSS.&source=SmartinezDev" target="_blank" rel='noreferrer' aria-label='Compartir por LinkedIn' className='min-w-6 hover:text-[var(--detail)] duration-150 ease-in-out'>
                        <LinkedInIcon width='36px' height='36px' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact