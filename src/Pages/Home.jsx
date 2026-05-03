import React from 'react'
import Hero from '../Component/hero'
import Who_am_i from '../Component/Who_am_i'
import Powerfull_line from '../Component/Powerfull_line'
import ParallaxGallery from '../Component/ParallaxGallery'
import What_you_do from '../Component/What_you_do'
import Projects_hom_intro from '../Component/projects_hom_intro'
import Contact_cta from '../Component/Contact_cta'
import SEO from '../Component/SEO'

const Home = () => {
  return (
    <div className="relative">
      <SEO page="home" />
      <Hero/>
      <div className="bg-black z-10 relative">
        <Powerfull_line/>
        <What_you_do/>
        <Who_am_i/>
        <ParallaxGallery/>
        <Projects_hom_intro/>
        <Contact_cta/>
      </div>
     
     
      
    </div>
  )
}

export default Home
