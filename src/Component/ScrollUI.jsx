import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923215081609";
const WHATSAPP_MESSAGE = "Hi Muhammad! I'd like to discuss a project with you.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function ScrollUI() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.08);
    });
    return unsub;
  }, [scrollYProgress]);

  const scrollToTop = () => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-violet-600 to-purple-400 z-60 origin-left"
      />

      {/* ── WhatsApp button — always visible ── */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-6 right-6 z-50
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-[#25D366] hover:bg-[#1ebe5d]
          shadow-lg shadow-green-900/40
          text-white
          transition-colors duration-200
        "
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

      {/* ── Scroll-to-top button — appears after 8% scroll ── */}
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="
              fixed bottom-6 right-20 z-50
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-purple-600/80 hover:bg-purple-500
              border border-purple-400/40
              backdrop-blur-md
              shadow-lg shadow-purple-900/40
              text-white
              transition-colors duration-200
            "
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
