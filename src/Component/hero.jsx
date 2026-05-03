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

let preloadStarted = false;
function startPreload() {
  if (preloadStarted) return;
  preloadStarted = true;
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

  useEffect(() => {
    const id = requestAnimationFrame(() => startPreload());
    return () => cancelAnimationFrame(id);
  }, []);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // Background parallax
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

  // Profile parallax
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
    [0, 0.5, 1],
    isMobile ? [0, 0] : [0, 1]
  );

  // Content fades out only in the last 20% of the hero scroll
  const contentOpacity = useTransform(scrollYProgress, [0,0.2, 1], [1,0, 0]);
  const contentblur = useTransform(scrollYProgress, [0,0.2, 1],["0px","0px","10px"])
  const contentY = useTransform(scrollYProgress, [0,1], [0, isMobile ? -30 : -60]);

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
    <section
      ref={sectionRef}
      className="relative h-[200vh] w-full  bg-black"
    >
      {/* Sticky container — pins for the full 250vh then releases */}
      <div className="sticky top-0 h-[200vh] w-full overflow-hidden">

        {/* BACKGROUND FRAME */}
        <motion.img
          ref={frameRef}
          src={frameSrc(0)}
          style={{ y: frameY, scale: frameScale }}
          className="relative -z-10 inset-0 w-full h-full"
        />
        {/* Dark overlay */}
        <div className="relative z-0 inset-0 bg-black" />

        {/* CONTENT — centered, fades out near end of hero */}
        <motion.div
        initial={{opacity:0 }}
          style={{ opacity: contentOpacity, y: contentY,  filter: `blur(${contentblur}px)` }}
          exit={{opacity:0 ,filter: `blur(50px)`}}
          className="fixed inset-0 z-1 flex items-center justify-center px-6 pt-4 sm:px-10 md:px-16"
        >
          {/* offset wrapper accounts for fixed navbar (~64px) without breaking centering */}
          <div className="w-full max-w-7xl translate-y-8">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

            {/* LEFT — text */}
            <div className="text-center md:text-left space-y-4 order-2 md:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sceneIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
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
                className="inline-block rounded-full bg-purple-600/30 border border-purple-400/40 px-5 py-2 text-sm text-white hover:bg-purple-600/50 transition-colors"
              >
                Explore My Work
              </Link>
            </div>

            {/* RIGHT — profile image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <motion.div
                style={{ y: profileY, scale: profileScale, rotate: profileRotate }}
                className="relative"
              >
                <div className="w-32 h-40 sm:w-48 sm:h-56 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-purple-400/40 shadow-lg shadow-purple-900/30">
                  <img
                    src={`${BASE}muhammad.webp`}
                    alt="Muhammad Bin Naveed — MERN Stack Developer"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
