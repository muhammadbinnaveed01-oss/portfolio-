import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use requestAnimationFrame to let Lenis initialize on the new route
    // before attempting to scroll, avoiding the window.scrollTo / Lenis conflict
    const id = requestAnimationFrame(() => {
      // Try Lenis first (attached to window by App.jsx raf loop)
      const lenis = window.__lenis
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}

export default ScrollToTop
