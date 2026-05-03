import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
  useTransform,
} from "framer-motion";

const TOTAL_FRAMES = 50;
const BASE = import.meta.env.BASE_URL;
const frameSrc = (i) =>
  `${BASE}Home_frames/frame_${String(i).padStart(6, "0")}.webp`;

const HEADLINES = [
  "I build digital experiences that feel alive.",
  "Feel the flow... break the speed of light...",
  "Evolving the standard... redefining what's possible.",
  "Logic drives every motion.",
  "Build • Animate • Inspire",
];

// Defer preloading until after first paint — avoids 50 blocking requests on parse
let preloadStarted = false;
function startPreload() {
  if (preloadStarted) return;
  preloadStarted = true;
  // Skip frame 0 — it's already rendered as the src
  for (let i = 1; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = frameSrc(i);
  }
}

export default function Hero() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [sceneIdx, setSceneIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Defer frame preloading until after first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => startPreload());
    return () => cancelAnimationFrame(id);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // reduce motion on mobile
  const frameY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 40] : [0, 120]
  );

  const frameScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1.02] : [1, 1.08]
  );

  const profileY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -20] : [0, -70]
  );

  const profileScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1.05] : [1, 1.12]
  );

  const profileRotate = useTransform(
    scrollYProgress,
    [0, 0.5,1],
    isMobile ? [0, 0] : [0, 1]
  );

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const c = Math.max(0, Math.min(1, p));
    const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(c * (TOTAL_FRAMES - 1)));

    if (frameRef.current) {
      frameRef.current.src = frameSrc(idx);
    }

    const si = Math.floor(c * (HEADLINES.length - 1));
    setSceneIdx(si);
  });

  return (
    <section ref={sectionRef} className="h-[150vh] md:h-[130vh] bg-black">

      <div className="sticky top-0 h-screen md:h-[150vh]">

        {/* FRAME BACKGROUND */}
        <motion.img
          ref={frameRef}
          src={frameSrc(0)}
          style={{ y: frameY, scale: frameScale }}
          className="absolute inset-0 w-full h-full "
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT WRAPPER */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-10 md:px-16 pt-20 sm:pt-0">

          {/* STACK ON MOBILE, GRID ON DESKTOP */}
          <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="text-center md:text-left space-y-4">

              <AnimatePresence mode="wait">
                <motion.div
                  key={sceneIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    {HEADLINES[sceneIdx]}
                  </h1>
                </motion.div>
              </AnimatePresence>

              <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                I'm Muhammad — a MERN Stack developer focused on building fast,
                animated, and human-centered web apps.
              </p>

              <Link
                to="/Project"
                className="mt-3 inline-block rounded-full bg-purple-600/30 border border-purple-400/40 px-5 py-2 text-sm text-white hover:bg-purple-600/50 transition-colors"
              >
                Explore My Work
              </Link>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">

              <motion.div
                style={{
                  y: profileY,
                  scale: profileScale,
                  rotate: profileRotate,
                }}
                className="relative"
              >
                <div className="absolute -inset-4 md:-inset-6 rounded-full  blur-xl" />

                <div className="cyberpunk-photo w-28 h-36 sm:w-48 sm:h-48 md:w-64 md:h-80 rounded-full border border-purple-400/40 ">
                  <img
                    src={`${BASE}muhammad.webp`}
                    alt="Muhammad Bin Naveed — MERN Stack Developer"
                    fetchPriority="high"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}