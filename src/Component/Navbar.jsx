import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const navItems = [
  { path: "/", name: "Home", icon: <FaHome /> },
  { path: "/About", name: "About", icon: <FaUser /> },
  { path: "/Project", name: "Project", icon: <FaFolderOpen /> },
  { path: "/Contact", name: "Contact", icon: <FaEnvelope /> },
];

function Navbar() {
  // Track window scroll manually — avoids Framer's container position warning
  // which fires when useScroll() walks the DOM and finds a static ancestor
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const update = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [scrollY]);

  const pillPaddingX = useTransform(scrollY, [0, 80], [24, 16]);
  const pillPaddingY = useTransform(scrollY, [0, 80], [10, 7]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <motion.ul
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ paddingLeft: pillPaddingX, paddingRight: pillPaddingX, paddingTop: pillPaddingY, paddingBottom: pillPaddingY }}
        className="
          pointer-events-auto
          relative flex items-center justify-center
          gap-1 sm:gap-2 md:gap-3
          bg-black/70 backdrop-blur-xl
          border border-white/15
          rounded-full shadow-lg shadow-purple-900/20
          w-auto max-w-[95vw]
        "
      >
        {/* light sweep */}
        <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <motion.span
            layout={false}
            className="absolute inset-0 bg-linear-to-r
                       from-transparent via-purple-500/10 to-transparent
                       w-[200%]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
        </span>

        {navItems.map((item) => (
          <motion.li
            key={item.path}
            className="relative shrink-0"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={item.path}
              className="relative flex items-center justify-center
                         px-3 sm:px-4 md:px-5 py-2 sm:py-2.5"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full
                                 bg-linear-to-r from-violet-600 to-purple-600"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 md:hidden text-white">
                    {item.icon}
                  </span>

                  <span
                    className={`hidden md:block relative z-10 text-sm
                      ${isActive
                        ? "text-white"
                        : "text-purple-200/70 hover:text-white"}`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Navbar;
