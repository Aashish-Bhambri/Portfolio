import React from 'react'
import { Check, Zap, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

const Experience = () => {
  const steps = [
    {
      title: 'B.E CSE',
      org: 'Chandigarh University',
      date: '2022 – 2026',
      desc: 'Mastered Data Structures & Algorithms, Object-Oriented Architecture, Database Systems (PostgreSQL), and modern web fundamentals.',
      status: 'completed',
    },
    {
      title: 'Software Engineering Intern',
      org: 'Webblaze Softech',
      date: 'September 2026 - Present',
      desc: 'Engineered responsive client dashboards with React & Next.js. Integrated REST APIs, managed state, and optimized UI render speeds by 28%.',
      status: 'active',
    },
    {
      title: 'Full-Time Software Engineer',
      org: 'Your Engineering Team',
      date: 'Ready to Deploy',
      desc: 'Actively looking for full-time frontend or full-stack software engineering opportunities where I can contribute to high-impact products from Day 1.',
      status: 'future',
    },
  ]

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >      <h2 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 sm:mb-10 tracking-tight leading-[0.95] break-words'>
        EXPERIENCE & <br />
        <span className='text-content-ghost'>JOURNEY</span>
      </h2>

      <div className='relative pl-1 sm:pl-3 space-y-6 sm:space-y-8'>
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1
          const isCompleted = step.status === 'completed'
          const isActive = step.status === 'active'
          const isFuture = step.status === 'future'

          return (
            <div key={step.title} className='relative flex gap-4 sm:gap-7 group'>
              {/* Vertical connector line */}
              {!isLast && (
                <div
                  aria-hidden='true'
                  className={`absolute left-[15px] sm:left-[19px] top-8 sm:top-10 bottom-[-24px] sm:bottom-[-32px] w-[2px] ${isFuture
                    ? 'border-l-2 border-dashed border-white/15'
                    : isActive
                      ? 'bg-gradient-to-b from-accent-orange to-white/15'
                      : 'bg-accent-lime/40'
                    }`}
                />
              )}

              {/* Node / Indicator Dot */}
              <div className='relative z-10 flex-shrink-0' aria-hidden='true'>
                {isCompleted && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-lime text-black flex items-center justify-center shadow-[0_0_15px_rgba(197,255,65,0.4)]'>
                    <Check className='w-4 h-4 sm:w-5 sm:h-5 stroke-[3]' />
                  </div>
                )}
                {isActive && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-orange text-[#151312] flex items-center justify-center shadow-[0_0_0_5px_rgba(244,108,56,0.2),0_0_20px_rgba(244,108,56,0.6)] animate-pulse motion-reduce:animate-none'>
                    <Zap className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                )}
                {isFuture && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border-2 border-dashed border-white/30 text-white/60 flex items-center justify-center'>
                    <Sparkles className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                )}
              </div>

              {/* Card content */}
              <div
                className={`flex-1 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 min-w-0 ${isActive
                  ? 'bg-gradient-to-br from-accent-orange/[0.07] to-surface border-accent-orange/40 shadow-[0_10px_30px_rgba(244,108,56,0.12)]'
                  : isFuture
                    ? 'bg-white/[0.015] border-dashed border-white/15'
                    : 'bg-surface border-white/5'
                  }`}
              >
                <div className='flex flex-wrap items-center justify-between gap-2 mb-1.5'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white'>
                    {step.title}
                  </h3>
                </div>

                <div className='flex flex-wrap items-center gap-2 text-xs sm:text-sm text-content-secondary mb-2.5'>
                  <span className='font-semibold text-accent-orange'>
                    {step.org}
                  </span>
                  <span aria-hidden='true'>•</span>
                  <span className='font-mono text-content-secondary'>
                    {step.date}
                  </span>
                </div>

                <p className='text-xs sm:text-sm text-content-secondary leading-relaxed'>
                  {step.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Experience
