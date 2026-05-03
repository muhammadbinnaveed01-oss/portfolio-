import { lazy, Suspense, useEffect } from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './Component/ScrollToTop'
import Navbar from './Component/Navbar'
import Lenis from "lenis";
import Footer from './Component/Footer';
import ScrollUI from './Component/ScrollUI';
import GlobalPreloader from './Component/GlobalPreloader';
import { usePreloader } from './hooks/usePreloader';

// Lazy-load pages — three.js chunk only downloads when Contact is visited
const Home    = lazy(() => import('./Pages/Home'))
const About   = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const Project = lazy(() => import('./Pages/Project'))

function App() {
  const { progress, done } = usePreloader();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
      {/* Global preloader — blocks UI until all critical assets are ready */}
      <GlobalPreloader progress={progress} visible={!done} />

      {/* Main site — rendered behind preloader, opacity-0 so WebGL initializes correctly */}
      <div
        className="relative bg-[#0a0a0f] min-h-screen"
        style={{
          opacity: done ? 1 : 0,
          pointerEvents: done ? "auto" : "none",
          transition: done ? "opacity 0.4s ease" : "none",
        }}
      >
        <ScrollToTop />
        <ScrollUI />
        <Navbar />
        {/* No fallback needed — assets already loaded by preloader */}
        <Suspense   fallback={
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading experience...
    </div>
  }>
          <Routes>
            <Route path='/'        element={<Home />} />
            <Route path='/About'   element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Project' element={<Project />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
