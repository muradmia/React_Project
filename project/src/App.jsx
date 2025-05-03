import { useState } from 'react'

import './App.css'
import Navbar from './Projects/Navbar'
import Hero from './Projects/Hero'
import Company_logo from './Projects/Company_logo'
import About from './Projects/About'
import { Features } from 'tailwindcss'
import FeaturesSection from './Projects/FeaturesSection'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute rounded-full blur-[80px] -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20'></div>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Company_logo></Company_logo>
        <About></About>
        <FeaturesSection></FeaturesSection>
      </div>
      {/* <h1 className='p-4 text-gray-900'>Hello world</h1> */}
      
    </main>
  )
}

export default App
