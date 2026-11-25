import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Lenis from 'lenis'

const App = () => {
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
        <RightContent />
      </main>
    </div>
  )
}

export default App
