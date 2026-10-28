import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
const App = () => {
  return (
    <div className='bg-canvas p-4 '>
      <div className='flex justify-center'>
        <Navbar />
      </div>
      <div className='flex text-white'>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}

export default App