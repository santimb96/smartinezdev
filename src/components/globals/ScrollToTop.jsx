import { ArrowUp } from 'lucide-preact'
import { useEffect } from 'preact/hooks'

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollToTop = document.querySelector('#scrollToTop')
      if (window.scrollY > 500) {
        scrollToTop.classList.add('scrollToTopActive')
      } else {
        scrollToTop.classList.remove('scrollToTopActive')
      }
    })
  }, [])
  return (
    <div id='scrollToTop' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp className='min-w-[24px]' strokeWidth={2} />
    </div>
  )
}

export default ScrollToTop
