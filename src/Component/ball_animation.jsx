import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function ProjectSequence() {
  const [showTick, setShowTick] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div className="h-80 w-80 rounded-2xl border border-yellow-500 flex items-center justify-center bg-black text-white overflow-hidden">

      {/* MAIN SCENE */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: showText ? 0.6 : 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-10"
      >

        {/* BALL */}
        <motion.div
          className="w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center"
          initial={{ y: -200 }}
          animate={{ y: [0, -80, 0, -40, 0] }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
          onAnimationComplete={() => setShowTick(true)}
        >
          {/* TICK */}
          {showTick && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() =>
                setTimeout(() => setShowText(true), 800)
              }
            >
              <Check size={48} />
            </motion.div>
          )}
        </motion.div>

        {/* TEXT SEQUENCE */}
        {showText && (
          <motion.div
            className="text-3xl font-semibold space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.6,
                },
              },
            }}
          >
            {["Quality Work", "On-Time Delivery", "Client Satisfaction"].map((word, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {word}
              </motion.p>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
