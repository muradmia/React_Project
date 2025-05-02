import { useState } from 'react'

import './App.css'
import Navbar from './Projects/Navbar'
import Hero from './Projects/Hero'

function App() {

  return (
    <>
      {/* <h1 className='p-4 text-gray-900'>Hello world</h1> */}
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
