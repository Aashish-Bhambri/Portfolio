import React, { useState, useEffect } from 'react'
import { Briefcase, Folder, House, SquarePen, Wrench } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'Home', icon: House },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'tech-stack', label: 'Tools', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: SquarePen },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    // If URL contains a hash on load, position to it immediately
    if (window.location.hash) {
      const initialId = window.location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(initialId)
        if (el) {
          el.scrollIntoView({ behavior: 'auto' })
          setActiveSection(initialId)
        }
      }, 100)
    }

    const handleScroll = () => {
      const scrollTrigger = 280

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const section = document.getElementById(item.id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= scrollTrigger) {
            setActiveSection(item.id)
            return
          }
        }
      }
      setActiveSection('about')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setActiveSection(id)

    if (id === 'about' && window.scrollY < 400) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <nav
      aria-label='Primary Navigation'
      className='fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]'
    >
      <div className='flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-[#1c1917]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              aria-label={item.label}
              title={item.label}
              className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 group ${
                isActive
                  ? 'bg-accent-orange text-white shadow-[0_0_14px_rgba(244,108,56,0.55)] scale-105'
                  : 'text-content-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className='w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]' />

              {/* Hover Tooltip */}
              <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#111111] border border-white/10 text-[10px] font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg'>
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
