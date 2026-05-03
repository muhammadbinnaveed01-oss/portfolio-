import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import {
  SiMongodb,
  SiFramer,
  SiOpenai,
  SiNamecheap,
  SiExpress,
  SiPostman,
  SiGooglesheets,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

/* ---------------- ICONS AS COMPONENT REFERENCES ---------------- */
const skills = [
  { icon: FaHtml5, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/25", label: "HTML5" },
  { icon: FaCss3Alt, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-400/25", label: "CSS3", float: true },
  { icon: FaJs, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-400/25", label: "JavaScript" },
  { icon: FaBootstrap, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30", label: "Bootstrap" },
  { icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-400/25", label: "React", float: true },
  { icon: FaNodeJs, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/25", label: "Node.js" },
  { icon: SiExpress, color: "text-white/80", bg: "bg-white/5", border: "border-white/15", label: "Express.js" },
  { icon: SiMongodb, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/25", label: "MongoDB" },
  { icon: TbApi, color: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/30", label: "REST API", pulse: true },
  { icon: SiPostman, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/25", label: "Postman" },
  { icon: SiGooglesheets, color: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/25", label: "G. Sheets" },
  { icon: SiNamecheap, color: "text-purple-200", bg: "bg-purple-500/10", border: "border-purple-400/25", label: "Namecheap" },
  { icon: SiOpenai, color: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/30", label: "AI" },
  { icon: SiFramer, color: "text-white", bg: "bg-white/10", border: "border-white/20", label: "Framer", scale: true },
];

/* ---------------- SINGLE ORB ---------------- */
function SkillOrb({ skill }) {
  const Icon = skill.icon;

  const base = `
    group
    flex flex-col items-center justify-center gap-1.5
    w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
    rounded-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]
    transition-all duration-300 ease-out
    hover:border-purple-500/40
    hover:bg-white/10
    hover:shadow-[0_0_18px_2px_rgba(138,43,226,0.35),inset_0_1px_0_0_rgba(255,255,255,0.12)]
    will-change-transform cursor-pointer
  `;

  const inner = (
    <>
      <div className="text-2xl sm:text-3xl md:text-4xl transition-all duration-300 group-hover:filter-[drop-shadow(0_0_6px_rgba(138,43,226,0.7))]">
        <Icon className={skill.color} />
      </div>
      <span className="text-white/40 group-hover:text-white/70 text-[9px] sm:text-[10px] text-center leading-tight px-1 transition-colors duration-300">
        {skill.label}
      </span>
    </>
  );

  if (skill.spin)
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className={base}
      >
        {inner}
      </motion.div>
    );

  if (skill.float)
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={base}
      >
        {inner}
      </motion.div>
    );

  if (skill.pulse)
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className={base}
      >
        {inner}
      </motion.div>
    );

  if (skill.scale)
    return (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={base}
      >
        {inner}
      </motion.div>
    );

  return (
    <motion.div whileHover={{ scale: 1.06, y: -3 }} transition={{ type: "spring", stiffness: 300 }} className={base}>
      {inner}
    </motion.div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
function Who_am_i() {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white px-5 sm:px-8 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-10 sm:gap-12 w-full max-w-4xl"
      >
        {/* TITLE */}
        <div className="text-center max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who Am I ?</h2>

          <div className="flex justify-center my-4 gap-1">
            <div className="w-24 sm:w-32 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent rounded-full" />
            <div className="w-24 sm:w-32 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent rounded-full" />
          </div>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            A MERN Stack developer building fast, animated, and human-centered web experiences.
          </p>
        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 w-full">
          {skills.map((skill) => (
            <SkillOrb key={skill.label} skill={skill} />
          ))}
        </div>

        {/* TAGLINE */}
        <p className="text-white text-xs sm:text-sm text-center max-w-md leading-relaxed">
          I turn ideas into interactive experiences using modern tools and clean design systems.
        </p>
      </motion.div>
    </section>
  );
}

export default Who_am_i;
