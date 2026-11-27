import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import ProjectDetail from './components/ProjectDetail'
import { getProjectBySlug } from './data/projects'
import Lenis from 'lenis'

const getSlugFromPath = (pathname) => {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const App = () => {
  const [activeSlug, setActiveSlug] = useState(() => getSlugFromPath(window.location.pathname))
  const [focusProjectHeading, setFocusProjectHeading] = useState(false)
  const pendingSectionRef = useRef(null)
  const activeProject = activeSlug ? getProjectBySlug(activeSlug) : null

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis()
    let rafId = 0

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setFocusProjectHeading(false)
      setActiveSlug(getSlugFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (activeProject) {
      document.title = `${activeProject.title} — Aashish Bhambri`
    } else if (activeSlug) {
      document.title = 'Project Not Found — Aashish Bhambri'
    } else {
      document.title = 'Aashish Bhambri — Full-Stack Software Engineer'
    }
  }, [activeProject, activeSlug])

  useEffect(() => {
    if (activeSlug || !pendingSectionRef.current) return
    const targetId = pendingSectionRef.current
    pendingSectionRef.current = null
    const el = document.getElementById(targetId)
    if (el) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }, [activeSlug])

  const openProject = (slug) => {
    window.history.pushState(null, '', `/projects/${encodeURIComponent(slug)}`)
    setFocusProjectHeading(true)
    setActiveSlug(slug)
  }

  const navigateHomeToSection = (sectionId) => {
    pendingSectionRef.current = sectionId
    window.history.pushState(null, '', `/#${sectionId}`)
    setFocusProjectHeading(false)
    setActiveSlug(null)
  }

  const goBackToProjects = () => navigateHomeToSection('projects')
  const goToContact = () => navigateHomeToSection('contact')

  if (activeProject) {
    return (
      <ProjectDetail
        key={activeProject.slug}
        project={activeProject}
        onNavigate={openProject}
        onBack={goBackToProjects}
        onContact={goToContact}
        focusHeadingOnMount={focusProjectHeading}
      />
    )
  }

  if (activeSlug) {
    return (
      <div className='min-h-screen bg-canvas text-white selection:bg-accent-orange selection:text-[#151312] flex items-center justify-center px-4 sm:px-6'>
        <main className='w-full max-w-xl rounded-2xl sm:rounded-3xl bg-surface border border-white/10 p-6 sm:p-10 space-y-6'>
          <h1 className='text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-[0.95] text-white'>
            PROJECT
            <br />
            <span className='text-content-ghost'>NOT FOUND</span>
          </h1>
          <p className='text-sm sm:text-base text-content-secondary leading-relaxed'>
            No case study matches <span className='font-mono text-white'>/projects/{activeSlug}</span>. Return to the featured projects list or inspect the full resume.
          </p>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <button
              type='button'
              onClick={goBackToProjects}
              className='inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-accent-orange hover:brightness-105 active:scale-[0.98] text-[#151312] font-bold text-xs sm:text-sm transition-all cursor-pointer'
            >
              <ArrowLeft className='w-4 h-4' aria-hidden='true' />
              <span>Back to All Projects</span>
            </button>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-colors'
            >
              View Resume (PDF)
            </a>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-canvas text-white selection:bg-accent-orange selection:text-[#151312]'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-accent-orange focus:text-[#151312] focus:font-bold focus:text-sm focus:shadow-lg'
      >
        Skip to main content
      </a>

      {/* Floating Interactive Navbar */}
      <Navbar />

      {/* Main Content: Single-column on mobile/tablet (<lg), dual-column on desktop (lg+) */}
      <main
        id='main-content'
        className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-0 pb-16 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-10 lg:gap-12 '
      >
        <LeftContent />
        <RightContent onOpenProject={openProject} />
      </main>
    </div>
  )
}

export default App
