import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

/* ── DATA ── */
const pvtld = [
  { id: 1, src: "/click2print/unnamed (1).webp", alt: "Click2Print project preview 1" },
  { id: 2, src: "/click2print/unnamed (7).webp", alt: "Click2Print project preview 2" },
  { id: 3, src: "/click2print/unnamed (3).webp", alt: "Click2Print project preview 3" },
  { id: 4, src: "/click2print/unnamed (4).webp", alt: "Click2Print project preview 4" },
  { id: 5, src: "/click2print/unnamed (5).webp", alt: "Click2Print project preview 5" },
  { id: 6, src: "/click2print/unnamed (6).webp", alt: "Click2Print project preview 6" },
  { id: 7, src: "/click2print/unnamed (8).webp", alt: "Click2Print project preview 7" },
  { id: 8, src: "/click2print/unnamed (9).webp", alt: "Click2Print project preview 8" },
];

const portfolio = [
  { id: 1, src: "/faizalamfazi/failalamfazi1.webp", alt: "Faiz Alam Faizi portfolio preview 1" },
  { id: 2, src: "/faizalamfazi/faizalamfazi2.webp", alt: "Faiz Alam Faizi portfolio preview 2" },
  { id: 3, src: "/faizalamfazi/faizalamfazi3.webp", alt: "Faiz Alam Faizi portfolio preview 3" },
  { id: 4, src: "/faizalamfazi/faizalamfazi4.webp", alt: "Faiz Alam Faizi portfolio preview 4" },
  { id: 5, src: "/faizalamfazi/faizalamfazi5.webp", alt: "Faiz Alam Faizi portfolio preview 5" },
  { id: 6, src: "/faizalamfazi/faizalamfazi6.webp", alt: "Faiz Alam Faizi portfolio preview 6" },
  { id: 7, src: "/faizalamfazi/faizalamfazi7.webp", alt: "Faiz Alam Faizi portfolio preview 7" },
  { id: 8, src: "/faizalamfazi/faizalamfazi8.webp", alt: "Faiz Alam Faizi portfolio preview 8" },
];

const pvtldFirstRow = pvtld.slice(0, 4);
const pvtldSecondRow = pvtld.slice(4, 8);
const portfolioFirstRow = portfolio.slice(0, 4);
const portfolioSecondRow = portfolio.slice(4, 8);

/* ── SCROLL STRIP ── */
function ScrollStrip({ images, direction, scrollProgress }) {
  const range = direction === "right" ? [-80, 80] : [80, -80];
  const x = useTransform(scrollProgress, [0, 1], range);

  return (
    <div className="overflow-hidden w-full py-4 sm:py-5">
      <motion.div
        style={{ x }}
        className="flex min-w-full justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8"
      >
        {images.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative shrink-0 w-[78vw] max-w-[320px] sm:w-64 md:w-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg shadow-black/40"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-44 sm:h-52 md:h-60  object-contain bg-black/10"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
function Projects_hom_intro() {
  const portfolioRef = useRef(null);
  const pvtldRef = useRef(null);

  const { scrollYProgress: portfolioScroll } = useScroll({
    target: portfolioRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: pvtldScroll } = useScroll({
    target: pvtldRef,
    offset: ["start end", "end start"],
  });

  const infoCards = [
    {
      emoji: "💻",
      title: "Development Focus",
      body: "Scalable MERN apps with clean architecture and reusable logic.",
    },
    {
      emoji: "🎨",
      title: "UI & Experience",
      body: "Smooth animations, modern layouts, and user-first design systems.",
    },
    {
      emoji: "🚀",
      title: "Real Projects",
      body: "Production-style interfaces built for real-world use cases.",
    },
  ];

  return (
    <>
      <section className="bg-black text-center py-14 sm:py-16 md:py-20 px-4 sm:px-5 relative">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Project Gallery
        </h1>

        <p className="text-white/60 max-w-3xl mx-auto mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
          Selected web applications and digital experiences focused on
          performance, clean UI, and real-world functionality.
        </p>

        <div className="w-20 sm:w-24 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mt-5 sm:mt-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto mt-10 sm:mt-12">
          {infoCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md shadow-lg shadow-black/30 text-left"
            >
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                {card.emoji} {card.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        ref={portfolioRef}
        className="relative py-14 sm:py-16 md:py-20 bg-black overflow-hidden"
      >
        <div className="text-center px-4 sm:px-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Faiz Alam Faizi, Web Experience
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            UI designs focused on clarity, usability, and smooth interaction.
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <ScrollStrip
            images={portfolioFirstRow}
            direction="right"
            scrollProgress={portfolioScroll}
          />
          <ScrollStrip
            images={portfolioSecondRow}
            direction="left"
            scrollProgress={portfolioScroll}
          />
        </div>
      </section>

      <section
        ref={pvtldRef}
        className="relative py-14 sm:py-16 md:py-20 bg-black overflow-hidden"
      >
        <div className="text-center px-4 sm:px-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Click2Print, Business Platform
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            A structured print-service workflow system with real-world usability.
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <ScrollStrip
            images={pvtldFirstRow}
            direction="right"
            scrollProgress={pvtldScroll}
          />
          <ScrollStrip
            images={pvtldSecondRow}
            direction="left"
            scrollProgress={pvtldScroll}
          />
        </div>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-14 flex justify-center"
>
  <Link to="/Project" className="group">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="
        relative
        px-8 py-4
        rounded-full
        border border-purple-500/40
        bg-purple-600/20
        backdrop-blur-md
        text-white font-medium
        shadow-lg shadow-purple-900/30
        overflow-hidden
      "
    >
      {/* moving glow */}
      <span
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent via-purple-400/30 to-transparent
          translate-x-[-120%]
          group-hover:translate-x-[120%]
          transition-transform duration-700
        "
      />

      <span className="relative flex items-center gap-3">
        View Full Projects
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </span>
    </motion.div>
  </Link>
</motion.div>
      </section>
      
    </>
  );
}

export default Projects_hom_intro;