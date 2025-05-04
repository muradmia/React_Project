import React from 'react'
import schudle from '../assets/stats.webp'
import { FaArrowRight } from "react-icons/fa6";
const Schudle = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/* left section */}
            <div className='md:w-1/2 w-full'>
                <img src={schudle} alt="schadule" className='w-full h-auto' />
            </div>
            {/* right section */}
            <div className='md:w-1/2 w-full'>
                <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                <h2 className='text-3xl md:font-4xl font-bold text-neutral-900 mt-4 mb-6'>Stream Your Business <br /> with smart  Scheduling solutions</h2>
                <p className='text-gray-600 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero veritatis repellendus excepturi aspernatur nemo cumque fugit quisquam odit. Repellendus veritatis officiis ea praesentium explicabo.</p>
                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                    Explore The Features
                    <FaArrowRight className='size-5' />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Schudle