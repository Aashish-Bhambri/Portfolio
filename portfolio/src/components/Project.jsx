import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'

const Project = ({ onOpenProject }) => {
  const handleProjectClick = (e, slug) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    if (onOpenProject) {
      e.preventDefault()
      onOpenProject(slug)
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        RECENT<br />
        <span className='text-content-ghost'>PROJECTS</span>
      </h1>

      <div className='flex flex-col gap-3.5 sm:gap-4'>
        {projects.map((prj) => (
          <a
            key={prj.slug}
            href={`/projects/${prj.slug}`}
            onClick={(e) => handleProjectClick(e, prj.slug)}
            aria-label={`View ${prj.name} case study`}
            className='flex items-center justify-between p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface border border-white/5 hover:border-accent-orange/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer group gap-3'
          >
            <div className='flex items-center gap-3.5 sm:gap-5 min-w-0 flex-1'>
              <img
                src={prj.img}
                alt={prj.name}
                className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-cover rounded-xl sm:rounded-2xl flex-shrink-0 border border-white/10'
              />
              <div className='flex flex-col gap-1 min-w-0'>
                <span className='font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-accent-orange transition-colors truncate'>
                  {prj.name}
                </span>
                <p className='text-xs sm:text-sm text-content-secondary line-clamp-2 leading-relaxed'>
                  {prj.shortDes}
                </p>
              </div>
            </div>

            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-orange/40 group-hover:bg-accent-orange/10 transition-colors flex-shrink-0'>
              <MoveUpRight className='text-accent-orange w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' aria-hidden='true' />
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default Project
