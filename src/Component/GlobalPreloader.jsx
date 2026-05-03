import { motion, AnimatePresence } from "framer-motion";

export default function GlobalPreloader({ progress, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="global-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#0a0a0f] select-none"
        >
          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-xs font-medium tracking-[0.25em] uppercase mb-10"
          >
            Muhammad Bin Naveed
          </motion.p>

          {/* Progress bar track */}
          <div className="w-52 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-violet-600 to-purple-400"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-white/30 text-[11px] tabular-nums"
          >
            {progress}%
          </motion.p>

          {/* Pulsing dot */}
          <motion.div
            className="mt-8 w-1 h-1 rounded-full bg-purple-500"
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
