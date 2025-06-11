import { Copy, CopyCheck, Github, Linkedin, Mail } from 'lucide-preact'
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
                <div className='w-full lg:w-1/2 flex flex-col justify-start items-start gap-2.5'>
                    <p>¡Ponte en contacto conmigo por cualquiera de las siguientes vías!</p>
                    <div onClick={copyToClipboard} className={`group transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center gap-5 lg:mb-5 lg:w-full border border-slate-300 hover:border-[var(--detail)] rounded-full px-5 py-1 ${copied ? 'border-[var(--detail)] text-[var(--detail)]' : ''}`}>
                        <span className={`group-hover:text-[var(--detail)] group-hover:scale-105 transition-all`}>santiagomartinezbota@gmail.com</span>
                        <span className={`group-hover:text-[var(--detail)] group-hover:scale-110 transition-all lucideIcon relative`}>
                            {copied ? <CopyCheck strokeWidth={1.5} /> : <Copy strokeWidth={1.5} />}
                            {copied && <small className='absolute bottom-7 -right-5 min-w-full bg-[var(--detail)] text-[var(--primary)] rounded-full px-2.5 py-1 text-[10px] z-10 duration-150 ease-in-out'>¡Copiado!</small>}
                        </span>
                    </div>

                </div>
                <div className='flex justify-start items-start lg:flex-col gap-2.5 flex-wrap lg:w-1/2'>
                    <a href='mailto:santiagomartinezbota@gmail.com' target='_blank' rel='noreferrer' className='buttonLink flex justify-start items-center gap-5 lg:w-full'>
                        <span className='lucideIcon'>
                            <Mail strokeWidth={1.5} />
                        </span>
                        <span>Correo electrónico</span>
                    </a>
                    <a href='https://www.linkedin.com/in/santi-martinez-bota/' target='_blank' rel='noreferrer' className='buttonLink lg:w-full'>
                        <span className='lucideIcon'>
                            <Linkedin strokeWidth={1.5} />
                        </span>
                        <span>LinkedIn</span>
                    </a>
                    <a href='https://github.com/santimb96' target='_blank' rel='noreferrer' className='buttonLink lg:w-full'>
                        <span className='lucideIcon'>
                            <Github strokeWidth={1.5} />
                        </span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact