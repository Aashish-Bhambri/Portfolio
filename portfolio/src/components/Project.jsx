import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Project = () => {
  const projects = [
    {
      img: '/shopease-thumbnail.png',
      name: 'ShopEase',
      des: 'Full-Stack E-Commerce Platform (React 19, Redux & Tailwind)',
    },
    {
      img: 'https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg?scale-down-to=512&width=2400&height=1800',
      name: 'TaskFlow MCP',
      des: 'Autonomous Project Orchestration Platform',
    },
    {
      img: 'https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png?scale-down-to=512&width=2400&height=1800',
      name: 'GameVerse Hub',
      des: 'Video Game Discovery & Analytics Platform',
    },
  ]

  return (
    <div>
      <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        RECENT<br />
        <span className='text-content-ghost'>PROJECTS</span>
      </h1>

      <div className='flex flex-col gap-3.5 sm:gap-4'>
        {projects.map((prj, idx) => (
          <div
            key={idx}
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
                  {prj.des}
                </p>
              </div>
            </div>

            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-orange/40 group-hover:bg-accent-orange/10 transition-colors flex-shrink-0'>
              <MoveUpRight className='text-accent-orange w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
