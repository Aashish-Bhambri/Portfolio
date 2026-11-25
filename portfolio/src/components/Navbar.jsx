import React, { useState, useEffect } from 'react'
import { Briefcase, Folder, House, SquarePen, Wrench } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About', icon: House },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'tech-stack', label: 'Stack', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: SquarePen },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const scrollToHash = (behavior = 'auto') => {
      const id = window.location.hash.replace('#', '')
      if (!id) {
        setActiveSection('about')
        return
      }
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior })
        setActiveSection(id)
      }
    }

    let timerId
    if (window.location.hash) {
      timerId = setTimeout(() => scrollToHash('auto'), 100)
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

    const handlePopState = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
        setActiveSection('about')
      } else {
        scrollToHash(reducedMotion ? 'auto' : 'smooth')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handlePopState)
    handleScroll()

    return () => {
      if (timerId) clearTimeout(timerId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setActiveSection(id)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reducedMotion ? 'auto' : 'smooth'

    if (id === 'about' && window.scrollY < 400) {
      window.scrollTo({ top: 0, behavior })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior })
      }
    }
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <nav
      aria-label='Primary Navigation'
      className='fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]'
    >
      <div className='flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-full bg-[#1c1917]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'location' : undefined}
              title={item.label}
              className={`relative flex items-center justify-center gap-1.5 w-11 h-11 sm:w-auto sm:h-10 sm:px-3.5 rounded-full transition-colors duration-200 group ${
                isActive
                  ? 'bg-accent-orange text-[#151312] font-bold shadow-[0_0_14px_rgba(244,108,56,0.45)]'
                  : 'text-content-secondary font-semibold hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className='w-4 h-4 stroke-[2.2] flex-shrink-0' aria-hidden='true' />
              <span className='hidden sm:inline text-xs whitespace-nowrap'>
                {item.label}
              </span>

              {/* Mobile / Focus Tooltip */}
              <span className='sm:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#111111] border border-white/10 text-[10px] font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity shadow-lg'>
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
