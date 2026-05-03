import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

/* ---------------- IMAGES ---------------- */
const images = [
  { id: 1, src: "/parallex_home/Capture.webp", alt: "The Curved Monitor" },
  { id: 2, src: "/parallex_home/mainframe.webp", alt: "The MERN Sculptures" },
  { id: 3, src: "/parallex_home/Gemini_Generated_Image_gt8vr0gt8vr0gt8v.webp", alt: "The Keyboard/Tablet" },
  { id: 4, src: "/parallex_home/mern_balance_desk_large.webp", alt: "Logic drives innovation." },
  { id: 5, src: "/parallex_home/mernimg1.webp", alt: "Architecting complex systems." },
  { id: 6, src: "/parallex_home/img6.webp", alt: "Built for scale." },
];

/* ---------------- SKILLS ---------------- */
const skillCategories = [
  {
    label: "Core Stack",
    accent: "border-purple-500/40 text-purple-300",
    dot: "bg-purple-400",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    label: "UI & Motion",
    accent: "border-sky-500/40 text-sky-300",
    dot: "bg-sky-400",
    skills: ["Tailwind CSS", "Framer Motion", "CSS3", "Bootstrap"],
  },
  {
    label: "Tools & Workflow",
    accent: "border-indigo-500/40 text-indigo-300",
    dot: "bg-indigo-400",
    skills: ["Git", "Postman", "Vite", "Namecheap", "Google Sheets"],
  },
];

/* ---------------- WHAT I DO ---------------- */
const whatIDo = [
  "Build responsive web applications using React",
  "Create interactive UI with Framer Motion animations",
  "Design clean modern interfaces with Tailwind CSS",
  "Focus on performance and usability",
  "Experiment with modern motion UI patterns",
];

/* ---------------- ANIMATION VARIANTS ---------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ParallaxGallery() {
  /* ---------- REFS ---------- */
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  /* ---------- PARALLAX SCROLL ---------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  /* ---------- VIEWPORT DETECTION ---------- */
  const isInView = useInView(galleryRef, {
    once: true,
    amount: 0.3,
  });

  /* ---------- AUTO ZOOM PULSE — removed (was 60 concurrent loops) ---------- */

  return (
    <section ref={sectionRef} className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* ABOUT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-300">My Work & Skills</h2>

              <p className="text-white/60 mt-3 leading-relaxed">
                I'm a frontend developer crafting modern interactive web
                experiences using React, Tailwind CSS, and advanced motion
                design.
              </p>
            </motion.div>

            {/* IMAGE GRID */}
            <motion.div
              ref={galleryRef}
              style={{ y }}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-2 sm:gap-3"
            >
              {images.map((img, i) => (
                <motion.div
                  key={img.id}
                  custom={i}
                  variants={item}
                  initial={{ scale: 0.9 }}
                  whileHover={{
                    scale: 1.12,
                    rotate: i % 2 === 0 ? 1 : -1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                  className="overflow-hidden rounded-md shadow-lg shadow-black/30"
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.15 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* WHAT I DO */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                What I Do
              </h3>

              <div className="space-y-4">
                {whatIDo.map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-white/80"
                  >
                    <FaCheckCircle className="text-purple-400 mt-1" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold">Skills</h3>

              <div className="space-y-5">
                {skillCategories.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: ci * 0.1 }}
                  >
                    {/* category label */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                      <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                        {cat.label}
                      </span>
                    </div>

                    {/* badges */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.88 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                          whileHover={{ scale: 1.06 }}
                          className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            bg-white/5 border backdrop-blur-sm
                            transition-colors duration-200
                            hover:bg-white/10
                            ${cat.accent}
                          `}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
