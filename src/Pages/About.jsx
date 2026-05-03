import React from "react";
import SEO from "../Component/SEO";
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBriefcase,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaServer,
  FaSearch,
  FaCloudUploadAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiVite, 
  SiGoogle, 
  SiFramer // Using SiFramer instead of FiTriangle for consistency
} from "react-icons/si";
import { motion } from "framer-motion";

import { MdSecurity } from "react-icons/md";
const animation = "MERN Stack • Full Stack • Production Systems"
const text= animation.split(" ")


function About() {
  const projects = [
    "https://click2print.pk/",
    "https://iqx.world/",
    "https://faizalamfaizi.com/",
    "https://www.aitransportltd.co.uk/",
  ];

  const container={
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.3,
      }
    }
  }
  const item={
    hidden:{
      opacity:0,
      y:30,
    },
    show:{
      opacity:1,
      y:0,
    }

  }
const Skilldata = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "REST APIs", icon: FaServer, color: "#555555" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: FiTriangle, color: "#0055FF" }, // Note: Framer Motion often uses FiTriangle or SiFramer
  { name: "Google API", icon: SiGoogle, color: "#4285F4" },
  { name: "Auth Systems", icon: MdSecurity, color: "#FF9800" },
  { name: "SEO, GEO, AEO", icon: FaSearch, color: "#4CAF50" },
  { name: "Deployment", icon: FaCloudUploadAlt, color: "#2196F3" },
];

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      <SEO page="about" />
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/project_logo/fallback.jpg"
      >
        <source src="/project_logo/img.webm" type="video/webm" />
      </video>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/75 to-blue-950/70" />

      {/* Soft Cosmic Glow — removed to reduce visual noise */}

      {/* Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            {/* About */}
<section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-6 sm:p-8 lg:p-10 mt-5">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        About Me
      </h1>

      <p className="mt-4 text-white/85 text-base sm:text-lg lg:text-xl leading-relaxed">
        I’m{" "}
        <span className="text-purple-300 font-semibold">
          Muhammad Bin Naveed
        </span>
        , a Full Stack MERN Developer focused on building modern,
        responsive, and production-ready web applications with clean UI,
        scalable architecture, and strong backend systems.
      </p>

      {/* Optional Highlight Badge */}
      <motion.div
     
       className=" mt-6 text-center rounded-full bg-purple-500/10 border border-purple-400/20 text-sm text-purple-300">
       {
        text.map((i, index)=>(
           <motion.div 
       key={index}
         initial={{opacity:0,y:10,filter:"blur(10px)"}}
      animate={{opacity:1,y:0,filter:"blur(0px)"}}
      transition={{duration:1,delay: index * 0.2}}
      className="p-1 inline-block"
     >
     {i}
            </motion.div>
        ))
      }
     </motion.div>

      {/* Social Links */}
      <div className="mt-6">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Connect with me</p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <a
            href="https://www.linkedin.com/in/muhammad-bin-naveed-236409252"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-purple-300 transition-all duration-200"
          >
            <FaLinkedinIn className="text-base shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/share/1B8xo1mvwx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-blue-800/20 hover:border-blue-700/40 hover:text-blue-200 transition-all duration-200"
          >
            <FaFacebookF className="text-base shrink-0" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/musilmuham?igsh=MTR3OXQzZmxwY2Mxdw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-pink-600/20 hover:border-pink-500/40 hover:text-pink-300 transition-all duration-200"
          >
            <FaInstagram className="text-base shrink-0" />
            <span>Instagram</span>
          </a>
          <a
            href="https://wa.me/923215081609"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-green-600/20 hover:border-green-500/40 hover:text-green-300 transition-all duration-200"
          >
            <FaWhatsapp className="text-base shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative group">
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl rounded-2xl opacity-70 group-hover:opacity-100 transition" />

      <img
        src="/project_logo/apps.webp"
        alt="Developer workspace"
        className="relative rounded-2xl w-full h-full object-cover border border-white/10 shadow-lg"
      />

    </div>

  </div>

</section>

            {/* Journey + Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300">
                  My Journey
                </h2>
                <p className="text-white/80 mt-4 leading-relaxed text-sm sm:text-base">
                  I started with HTML, CSS, and JavaScript, then moved into
                  React.js and later expanded into Node.js, Express, and
                  MongoDB. Over time, I transitioned from basic UI development
                  into full-stack systems, API design, and real-world
                  deployment.
                </p>
                <p className="text-white/80 mt-4 leading-relaxed text-sm sm:text-base">
                  In 2026, I completed certifications in MERN Stack, Full Stack
                  Development, and Frontend Development while actively building
                  live production projects.
                </p>
              </section>

             <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
  <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300">
    Skills & Tech Stack
  </h2>

  <motion.div variants={container}  
  initial="hidden"        // Required to tell children where to start
    whileInView="show"     // Required to tell children when to animate
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
{
  Skilldata.map((i,index)=>{
    const Icon=i.icon
    return (
<motion.div
key={index}
variants={item}
 className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition">
      <Icon className={`text-xl `} style={{ color: i.color }}/>
      <span className="text-[0.675rem] text-white/80">{i.name}</span>
    </motion.div>
  )
  })
}
  

  </motion.div>
</section>
            </div>

            {/* Internship */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
              <h2 className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-purple-300">
                <FaBriefcase />
                Internship Experience
              </h2>

              <div className="mt-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold">
                  MERN Stack Web Developer Intern
                </h3>

                <p className="text-white/75">Click2Print.pk</p>

                <p className="text-white/60">Duration: 6-Month Internship</p>

                <p className="text-white/60">Completion Date: 6 May 2026</p>

                <ul className="text-white/85 mt-4 list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                  <li>Worked on real production-level MERN stack applications.</li>
                  <li>
                    Developed responsive UI components using React and Tailwind
                    CSS.
                  </li>
                  <li>
                    Integrated backend APIs and handled authentication systems.
                  </li>
                  <li>
                    Participated in live deployment workflows and hosting
                    environments.
                  </li>
                  <li>
                    Collaborated on real client-based projects and feature
                    development.
                  </li>
                </ul>

                <p className="text-white/75 mt-4 text-sm sm:text-base leading-relaxed">
                  This internship provided hands-on industry experience and
                  strengthened practical development skills, teamwork, and
                  production deployment understanding.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300">
                Real Projects
              </h2>

              <ul className="mt-5 space-y-3">
                {projects.map((project) => (
                  <li key={project}>
                    <a
                      href={project}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/85 hover:text-purple-300 transition-colors duration-300 break-all text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="text-xs opacity-80" />
                      {project}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
                These projects include real deployment, API integration,
                responsive UI systems, and production hosting environments.
              </p>
            </section>

            {/* Education */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
              <h2 className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-purple-300">
                <FaGraduationCap />
                Education
              </h2>

              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl flex items-center gap-2">
                    <FaUniversity className="text-purple-400" />
                    Bachelor of Science in Computer Science (BSCS)
                  </h3>

                  <p className="text-white/70 mt-2">
                    Rise Group of Colleges, Lahore
                  </p>

                  <p className="text-white/60 mt-1">
                    Status: Ongoing, Currently 4th Semester
                  </p>

                  <ul className="text-white/85 mt-3 space-y-1 list-disc list-inside text-sm sm:text-base">
                    <li>Semester 1 CGPA: 3.40 / 5.00</li>
                    <li>Semester 2 CGPA: 3.37 / 5.00</li>
                  </ul>

                  <p className="text-white/75 mt-3 text-sm sm:text-base leading-relaxed">
                    Focused on software development, programming fundamentals,
                    and modern web technologies while building real-world
                    projects alongside academic studies.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl flex items-center gap-2">
                    <FaCertificate className="text-purple-400" />
                    Full Stack Web Development, MERN Stack Certification
                  </h3>

                  <p className="text-white/70 mt-2">
                    EVS Training Institute, Lahore
                  </p>

                  <p className="text-white/60 mt-1">
                    Completed: <b>January 25, 2026</b>
                  </p>

                  <ul className="text-white/85 mt-3 list-disc list-inside space-y-1 text-sm sm:text-base">
                    <li>MERN Stack Development</li>
                    <li>Frontend Development</li>
                    <li>Backend API Development</li>
                    <li>Real-world deployment practices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Intermediate (FSc)
                  </h3>

                  <p className="text-white/70 mt-2">
                    Fazaia Inter College, PAF Base Minhas
                  </p>

                  <p className="text-white/60 mt-1">Duration: 2022 to 2024</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Matriculation
                  </h3>

                  <p className="text-white/70 mt-2">
                    Fazaia Inter College, PAF Base Minhas
                  </p>

                  <p className="text-white/60 mt-1">Duration: 2019 to 2022</p>
                </div>
              </div>
            </section>

            {/* Approach */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300">
                My Approach
              </h2>
              <p className="text-white/80 mt-4 leading-relaxed text-sm sm:text-base max-w-4xl">
                I build in three steps: functionality first, then structure,
                then design refinement. My focus is on real-world usability,
                performance, and scalable architecture rather than only static
                interface design.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
