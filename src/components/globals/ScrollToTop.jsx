import { ArrowUp } from 'lucide-preact'
import { useEffect } from 'preact/hooks'

const ScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const scrollToTop = document.querySelector('#scrollToTop')
        if (window.scrollY > 500) {
          scrollToTop.classList.add('scrollToTopActive')
        } else {
          scrollToTop.classList.remove('scrollToTopActive')
        }
      })
    }
  }, [])
  return (
    <button type='button' id='scrollToTop' aria-label='Volver arriba' onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp className='min-w-[24px]' strokeWidth={2} />
    </button>
  )
}

export default ScrollToTop
