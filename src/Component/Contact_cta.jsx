import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact_cta() {
  return (
    <section className="relative bg-black py-20 px-5 overflow-hidden">

      {/* soft purple glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-125 h-125 bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white leading-tight"
        >
          Have an Idea in Mind?
        </motion.h2>

        {/* sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base"
        >
          I'm always open to building modern web experiences,
          collaborating on projects, or discussing new opportunities.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* CONTACT PAGE */}
          <Link to="/Contact" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors shadow-lg shadow-purple-900/30"
            >
              Start a Conversation →
            </motion.div>
          </Link>

          {/* PROJECT PAGE */}
          <Link to="/Project" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:border-purple-400 text-purple-200 hover:text-white transition-colors"
            >
              View My Work
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}