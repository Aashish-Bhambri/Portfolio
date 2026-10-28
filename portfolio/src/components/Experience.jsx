import React from 'react'
import { Check, Zap, Sparkles } from 'lucide-react'

const Experience = () => {
  const steps = [
    {
      title: "CS Degree & Core Foundations",
      org: "State University of Technology",
      date: "2022 – 2026",
      desc: "Mastered Data Structures & Algorithms, Object-Oriented Architecture, Database Systems (PostgreSQL), and modern web fundamentals.",
      badge: "Milestone 01",
      badgeColor: "text-accent-lime border-accent-lime/30 bg-accent-lime/10",
      status: "completed",
    },
    {
      title: "Hackathons & Open Source Contributions",
      org: "National Hackathon & GitHub",
      date: "2023 – 2024",
      desc: "Awarded 2nd place out of 45 teams for developing a real-time collaborative tool in 36 hours. Merged 10+ PRs to developer tooling repositories.",
      badge: "Shipped",
      badgeColor: "text-accent-lime border-accent-lime/30 bg-accent-lime/10",
      status: "completed",
    },
    {
      title: "Software Engineering Intern",
      org: "TechCorp Innovation Labs",
      date: "Jan 2024 – June 2024",
      desc: "Engineered responsive client dashboards with React & Next.js. Integrated REST APIs, managed state, and optimized UI render speeds by 28%.",
      badge: "Experienced",
      badgeColor: "text-accent-lime border-accent-lime/30 bg-accent-lime/10",
      status: "completed",
    },
    {
      title: "Full-Stack Production Projects",
      org: "Self-Directed Engineering",
      date: "Present Focus",
      desc: "Architecting full-stack SaaS applications using Next.js 15, TypeScript, Tailwind v4, and Prisma. Ensuring 98+ Lighthouse scores.",
      badge: "Current Stage",
      badgeColor: "text-accent-orange border-accent-orange/40 bg-accent-orange/15",
      status: "active",
    },
    {
      title: "Full-Time Software Engineer",
      org: "Your Engineering Team",
      date: "Ready to Deploy",
      desc: "Actively looking for full-time frontend or full-stack software engineering opportunities where I can contribute to high-impact products from Day 1.",
      badge: "Next Destination",
      badgeColor: "text-content-secondary border-dashed border-white/20 bg-transparent",
      status: "future",
    },
  ]

  return (
    <div>
      <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight'>
        EXPERIENCE & <br />
        <span className='text-content-ghost'>JOURNEY</span>
      </h1>

      <div className='relative pl-2 sm:pl-4 space-y-8'>
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1
          const isCompleted = step.status === 'completed'
          const isActive = step.status === 'active'
          const isFuture = step.status === 'future'

          return (
            <div key={idx} className='relative flex gap-5 sm:gap-7 group'>
              {/* Vertical connector line */}
              {!isLast && (
                <div
                  className={`absolute left-[15px] sm:left-[19px] top-10 bottom-[-32px] w-[2px] ${
                    isFuture
                      ? 'border-l-2 border-dashed border-white/15'
                      : isActive
                      ? 'bg-gradient-to-b from-accent-orange to-white/15'
                      : 'bg-accent-lime/40'
                  }`}
                />
              )}

              {/* Node / Dot */}
              <div className='relative z-10 flex-shrink-0'>
                {isCompleted && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-lime text-black flex items-center justify-center shadow-[0_0_15px_rgba(197,255,65,0.4)]'>
                    <Check className='w-4 h-4 sm:w-5 sm:h-5 stroke-[3]' />
                  </div>
                )}
                {isActive && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-orange text-white flex items-center justify-center shadow-[0_0_0_6px_rgba(244,108,56,0.2),0_0_20px_rgba(244,108,56,0.6)] animate-pulse'>
                    <Zap className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                )}
                {isFuture && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border-2 border-dashed border-white/30 text-white/40 flex items-center justify-center'>
                    <Sparkles className='w-4 h-4 sm:w-5 sm:h-5' />
                  </div>
                )}
              </div>

              {/* Card content */}
              <div
                className={`flex-1 p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-accent-orange/[0.07] to-surface border-accent-orange/40 shadow-[0_10px_30px_rgba(244,108,56,0.12)]'
                    : isFuture
                    ? 'bg-white/[0.015] border-dashed border-white/15'
                    : 'bg-surface border-white/5 hover:border-white/15 hover:bg-white/[0.05]'
                }`}
              >
                <div className='flex flex-wrap items-center justify-between gap-2 mb-2'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white'>
                    {step.title}
                  </h3>
                  <span
                    className={`text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full border ${step.badgeColor}`}
                  >
                    {step.badge}
                  </span>
                </div>

                <div className='flex items-center gap-2 text-xs sm:text-sm text-content-secondary mb-3'>
                  <span className='font-semibold text-accent-orange'>
                    {step.org}
                  </span>
                  <span>•</span>
                  <span className='font-mono text-content-secondary/80'>
                    {step.date}
                  </span>
                </div>

                <p className='text-sm text-content-secondary leading-relaxed'>
                  {step.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
