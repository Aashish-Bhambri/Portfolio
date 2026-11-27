import React from 'react'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import TechStack from './TechStack'
import Contact from './Contact'
import { motion } from 'motion/react'

const RightContent = ({ onOpenProject }) => {
  return (
    <div className='flex-1 w-full min-w-0 max-w-3xl xl:max-w-4xl py-4 sm:py-6 lg:pt-24 lg:pb-16 flex flex-col gap-20 sm:gap-28 lg:gap-32'>
      <section id='about' className='scroll-mt-24 sm:scroll-mt-28 w-full'>
        <About />
      </section>

      <section id='projects' className='scroll-mt-24 sm:scroll-mt-28 w-full'>
        <Project onOpenProject={onOpenProject} />
      </section>

      <section id='experience' className='scroll-mt-24 sm:scroll-mt-28 w-full'>
        <Experience />
      </section>

      <section id='tech-stack' className='scroll-mt-24 sm:scroll-mt-28 w-full'>
        <TechStack />
      </section>

      <section id='contact' className='scroll-mt-24 sm:scroll-mt-28 w-full'>
        <Contact />
      </section>
    </div>
  )
}

export default RightContent
