import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function What_you_do() {
  return (
    <section className="bg-black  overflow-hidden py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">

      {/* Background glow — purple 30% */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-purple-500/8 to-transparent pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center text-center gap-5 sm:gap-6 max-w-3xl mx-auto"
      >
        {/* Availability badge */}
        <motion.span
          variants={item}
          className="w-fit text-xs sm:text-sm text-purple-400 tracking-wide px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10"
        >
          Available for freelance &amp; collaborations
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-300 font-bold leading-tight"
          style={{ textShadow: "0 0 40px rgba(168,85,247,0.2)" }}
        >
          MERN Stack Developer
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
        >
          Building web experiences that feel fast, intuitive, and alive.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2">
          <Link to="/Project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium text-sm sm:text-base transition-colors"
            >
              View Projects
            </motion.button>
          </Link>

          <Link to="/Contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 border border-purple-500/40 text-purple-200 hover:border-purple-400 hover:text-white rounded-xl text-sm sm:text-base transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}

export default What_you_do;
