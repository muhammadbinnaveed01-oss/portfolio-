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
    <footer className="relative bg-black font-semibold text-white pt-12 sm:pt-16 pb-10 px-3 sm:px-6 overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-60 h-60 sm:w-100 sm:h-100 md:w-150 md:h-150 bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* slogan */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-sm sm:text-2xl font-semibold tracking-wide">
            Build • Animate • Inspire
          </h2>
          <p className="text-white/50 text-[10px] sm:text-sm mt-1 sm:mt-2">
            Crafting modern web experiences with motion and meaning
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10 max-w-4xl mx-auto">

          {/* NAVIGATION */}
          <div className="text-center relative">

            {/* soft glowing left line */}
            <span className="absolute left-0 top-0 h-full w-[2px] bg-linear-to-b from-purple-500/80 via-purple-400/40 to-transparent rounded-full" />

            <h3 className="text-white font-semibold mb-2 text-[10px] sm:text-base">
              Nav
            </h3>

            <ul className="space-y-1 text-white/60 text-[9px] sm:text-sm">
              <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
              <li><Link to="/About" className="hover:text-purple-300">About</Link></li>
              <li><Link to="/Project" className="hover:text-purple-300">Work</Link></li>
              <li><Link to="/Contact" className="hover:text-purple-300">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center">

            <h3 className="text-white font-semibold mb-2 text-[10px] sm:text-base">
              Contact
            </h3>

            <p className="text-white/60 text-[9px] sm:text-sm">
              📞 92321 5081609
            </p>

            <p className="text-white/50 text-[8px] px-1 sm:text-sm mt-1 leading-tight">
              E-858 D-2 Bilal Street,<br />
              Abusar Chowk, Ali Park<br />
              Badia Road, Lahore Cantt
            </p>
          </div>

          {/* SOCIAL */}
          <div className="text-center relative pe-2  ">

            {/* soft glowing right line */}
            <span className="absolute right-0 top-0 h-full w-[2px] bg-linear-to-b from-purple-500/80 via-purple-400/40 to-transparent rounded-full" />

            <h3 className="text-white font-semibold mb-2 text-[10px] sm:text-base">
              Social
            </h3>

            <div className="flex justify-center gap-2 sm:gap-3 text-white/70">
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.facebook.com/share/1B8xo1mvwx/">
                <FaFacebookF className="text-sm sm:text-lg" />
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href=" https://www.instagram.com/musilmuham?igsh=MTR3OXQzZmxwY2Mxdw==">
                <FaInstagram className="text-sm sm:text-lg" />
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href="www.linkedin.com/in/muhammad-bin-naveed-236409252">
                <FaLinkedinIn className="text-sm sm:text-lg" />
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href="https://wa.me/923215081609?text=Hi%20Muhammad%20Bin%20Naveed,%20I%20want%20to%20connect%20with%20you">
                <FaWhatsapp className="text-sm sm:text-lg" />
              </motion.a>
            </div>

            <p className="text-white/40 text-[8px] sm:text-xs mt-1">
              Connecting beyond code — sharing ideas & creativity.
            </p>
          </div>

        </div>

        {/* availability */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <p className="text-white/40 text-[9px] sm:text-xs flex items-center gap-1">
            <FaRegClock className="text-purple-400 animate-pulse text-[10px]" />
            24/7 Mon–Sat
          </p>
        </div>

        {/* map */}
        <div className="mt-6 sm:mt-10 rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Lahore+Cantt&output=embed"
            className="w-full h-32 sm:h-64 md:h-72"
            loading="lazy"
          />
        </div>

        {/* bottom */}
        <div className="text-center mt-5 sm:mt-10 text-white/40 text-[9px] sm:text-xs">
          © {new Date().getFullYear()} Muhammad Bin Naveed
        </div>

      </div>
    </footer>
  );
}