import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'

const App = () => {
  return (
    <div className='min-h-screen bg-canvas text-white selection:bg-accent-orange selection:text-white'>
      {/* Floating Interactive Navbar */}
      <Navbar />

      {/* Main Content: Single-column on mobile/tablet (<lg), dual-column on desktop (lg+) */}
      <main className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0 pb-16 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-10 lg:gap-12'>
        <LeftContent />
        <RightContent />
      </main>
    </div>
  )
}

export default App
