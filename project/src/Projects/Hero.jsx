import React from 'react'
import heroImg from '../assets/hero-image.png'
const Hero = () => {
  return (
    <section id="home" className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
        {/* left collum */}
        <div className='w-full md:w-1/2 space-y-8'>
            {/* star badge */}
            <div className='flex w-1/2 items-center gap-2 px-6 bg-gray-50 ps-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
                <span className='group-hover:text-blue-600 transition-transform'>⭐</span>
                <span className='text-sm font-medium'>Jump start your growth</span>

            </div>

            {/* heading */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>We boost the growth for <span className='text-blue-600 relative inline-block'>Startup for Fortune 500 <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60 opacity-50'></span></span> Companies <span className='inline-block ml-2 animate-pulse'>⏰</span></h1>
            <p className='text-l text-gray-600 md:text-xl max-w-xl'>Lorem ipsudipisicing elit. Plaistinctio veritatis perferendis repellat, fugiat modi earum assumenda corporis, tempore omnis temporibus commodi facere porro!</p>
            <div className='flex max-w-md'>
                <input type="email" placeholder='Email address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' />
                <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition:all hover:shadow-lg hover:shadow-blue-300' >→</button>
            </div>
        </div>

        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
                <img src={heroImg} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
            </div>

        </div>

    </section>
  )
}

export default Hero