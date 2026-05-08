import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

export default function MobileHero() {
  return (
    <div
      className="relative flex flex-col items-center text-center space-y-8 py-30 px-4"
      style={{
        backgroundImage: "url(/project_logo/mobilehero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">

        {/* PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 rounded-full overflow-hidden border border-purple-400/40"
        >
          <img
            src="/muhammad.webp"
            className="w-full h-full object-cover object-top"
            alt="profile"
          />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg"
        >
          MERN Stack Developer
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="text-white/90 text-sm max-w-sm leading-relaxed">
          Building fast, animated and modern web experiences.
        </p>

        {/* CTA */}
        <Link
          to="/Project"
          className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium shadow-lg"
        >
          View Projects
        </Link>

      </div>
    </div>
  );
}
