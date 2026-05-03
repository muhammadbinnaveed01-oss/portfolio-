import React from 'react'
import Ball_animation from '../Component/ball_animation'
import Projectcomp from '../Component/Projectcomp'
import SEO from '../Component/SEO'

function Project() {
  return (
    <div>
      <SEO page="project" />
<div className="min-h-screen pt-24 sm:pt-28 w-full bg-linear-to-r from-purple-900 via-purple-800 to-purple-900">

  <div className="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between px-6 lg:px-20 py-20 lg:py-0">

    {/* LEFT SIDE TEXT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left text-white space-y-6 mt-6 lg:mt-0">

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Real Projects. <br />
        <span className="text-purple-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
          Real Problems.
        </span>{" "}
        <br />
        Real Solutions 
      </h1>

      <p className="text-sm sm:text-base lg:text-lg opacity-80 px-2 lg:px-0">
        I build real-world web applications using MERN stack, transforming ideas
        into scalable, user-focused digital products.
      </p>

      <a
        href="#projects"
        className="bg-purple-600 hover:bg-purple-500 w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-colors inline-block text-center"
      >
        View Projects
      </a>
    </div>

    {/* RIGHT SIDE ANIMATION */}
    <div className="w-full  pt-20  lg:w-1/2 flex justify-center">
      <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
        <Ball_animation />
      </div>
    </div>

  </div>
</div>
<div id="projects" className="">
  <Projectcomp/>
</div>
    </div>
  )
}

export default Project
