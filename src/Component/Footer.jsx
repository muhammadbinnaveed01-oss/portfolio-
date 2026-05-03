import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaRegClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-14 sm:pt-16 pb-10 px-4 sm:px-6 overflow-hidden">

      {/* purple glow background (FIXED RESPONSIVE) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-70 h-70 sm:w-100 sm:h-100 md:w-150 md:h-150 bg-purple-600/10 blur-[140px] sm:blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* slogan */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-lg sm:text-2xl font-semibold tracking-wide text-white">
            Build • Animate • Inspire
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-2">
            Crafting modern web experiences with motion and meaning
          </p>
        </div>

        {/* grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 border-t border-white/10 pt-10 max-w-4xl mx-auto">

  {/* NAVIGATION */}
  <div className="text-center md:text-left">
    <h3 className="text-white font-semibold mb-4">Navigation</h3>

    <ul className="space-y-2 text-white/60 text-sm">
      <li><Link to="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
      <li><Link to="/About" className="hover:text-purple-300 transition-colors">About</Link></li>
      <li><Link to="/Project" className="hover:text-purple-300 transition-colors">Project</Link></li>
      <li><Link to="/Contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
    </ul>
  </div>

  {/* CONTACT */}
  <div className="text-center md:text-left">
    <h3 className="text-white font-semibold mb-4">Contact</h3>

    <p className="text-white/60 text-sm">
      📞 +92 321 5081609
    </p>

    <p className="text-white/50 text-sm mt-3 leading-relaxed">
      E-858 D-2 Bilal Street<br />
      Abusar Chowk, Ali Park<br />
      Badia Road, Lahore Cantt
    </p>
  </div>

  {/* SOCIAL */}
  <div className="text-center md:text-left">
    <h3 className="text-white font-semibold mb-4">Social</h3>

    <div className="flex justify-center md:justify-start flex-wrap gap-3 text-white/70">
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://www.facebook.com/share/1B8xo1mvwx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="p-2"
      >
        <FaFacebookF className="text-lg" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://www.instagram.com/musilmuham?igsh=MTR3OXQzZmxwY2Mxdw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-2"
      >
        <FaInstagram className="text-lg" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://www.linkedin.com/in/muhammad-bin-naveed-236409252"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2"
      >
        <FaLinkedinIn className="text-lg" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/923215081609"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="p-2"
      >
        <FaWhatsapp className="text-lg" />
      </motion.a>
    </div>

    <p className="text-white/50 text-sm mt-3 leading-relaxed">
      Let’s stay connected beyond code — I share my work, ideas, and creative
      experiments across social platforms.
    </p>
  </div>

</div>
<div className="flex justify-center mt-3">
  <p className="text-white/40 text-xs mt-3 flex items-center gap-2">
    <FaRegClock className="text-purple-400 animate-pulse" />
    24/7 Availability • Mon – Sat
  </p>
</div>

        {/* map */}
        <div className="mt-10 sm:mt-12 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Lahore+Cantt&output=embed"
            className="w-full h-48 sm:h-64 md:h-72"
            loading="lazy"
          />
        </div>

        {/* bottom line */}
        <div className="text-center mt-8 sm:mt-10 text-white/40 text-xs">
          © {new Date().getFullYear()} All rights reserved | Muhammad Bin Naveed
        </div>

      </div>
    </footer>
  );
}