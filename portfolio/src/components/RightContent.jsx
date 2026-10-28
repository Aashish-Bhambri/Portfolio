import React from 'react'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import TechStack from './TechStack'
import Contact from './Contact'

const RightContent = () => {
  return (
    <div className='flex-1 w-full max-w-5xl px-6 sm:px-10 lg:px-16 py-12 flex flex-col gap-24 lg:gap-32'>
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default RightContent
