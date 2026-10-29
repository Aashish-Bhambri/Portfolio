import React from 'react'
import { ArrowRight, Layers, Layout } from 'lucide-react'

const About = () => {
  const stats = [
    { count: '03+', label: 'FEATURED APPS' },
    { count: '500+', label: 'HOURS CODED' },
    { count: '2026', label: 'GRADUATION' },
  ]

  return (
    <div className='flex flex-col gap-6 sm:gap-8'>
      {/* Signature Sawad Dual-Tone Header */}
      <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] break-words'>
        FULL-STACK<br />
        <span className='text-content-ghost'>DEVELOPER</span>
      </h1>

      <p className='text-content-secondary max-w-xl text-sm sm:text-base md:text-lg leading-relaxed'>
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </p>

      {/* Responsive Metrics / Stats */}
      <div className='grid grid-cols-3 gap-2 sm:gap-8 py-2 max-w-md sm:max-w-lg'>
        {stats.map((item, idx) => (
          <div key={idx} className='flex flex-col gap-1'>
            <span className='text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
              {item.count}
            </span>
            <p className='text-content-secondary text-[10px] sm:text-xs font-semibold tracking-wider uppercase'>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Signature Sawad Colored Accent Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
        <div className='bg-accent-orange min-h-[170px] sm:min-h-[190px] flex flex-col justify-between p-5 sm:p-6 rounded-3xl text-white shadow-lg shadow-accent-orange/15 transition-transform hover:-translate-y-0.5 duration-300'>
          <Layers className='w-6 h-6 sm:w-7 sm:h-7' />
          <p className='text-lg sm:text-xl md:text-2xl font-bold leading-snug'>
            DYNAMIC ANIMATION, MOTION DESIGN
          </p>
          <div className='flex justify-end'>
            <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6' />
          </div>
        </div>

        <div className='bg-accent-lime min-h-[170px] sm:min-h-[190px] flex flex-col justify-between p-5 sm:p-6 rounded-3xl text-black shadow-lg shadow-accent-lime/15 transition-transform hover:-translate-y-0.5 duration-300'>
          <Layout className='w-6 h-6 sm:w-7 sm:h-7' />
          <p className='text-lg sm:text-xl md:text-2xl font-bold leading-snug'>
            REACT, TYPESCRIPT, NEXT.JS, TAILWIND
          </p>
          <div className='flex justify-end'>
            <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
