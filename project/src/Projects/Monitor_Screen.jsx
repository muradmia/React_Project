import React from 'react'
import monitor from '../assets/monitor-card.webp'
import { FaArrowRight } from "react-icons/fa6";
const Monitor_Screen = () => {
  return (
    <section className='max-w-7xl mx-auto px-8 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            {/* right div */}
            <div className='w-full md:w-1/2'>
                <p className='text-green-600 font-semibold mb-4'>MONITOR</p>
                <h2 className='text-3xl font-bold mb-6'>Introducing best mobile <br /> carousles</h2>
                <p className='font-semibold text-gray-500 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum hic tempora expedita at voluptatum maxime, quaerat neque sunt quisquam vel architecto dolores consequuntur?</p>
                <a href="#" className='text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer'>
                    Explore The Features
                    <FaArrowRight className='size-4' />
                    </a>
            </div>
            {/* left div */}
            <div className='w-full md:w-1/2 '>
                <img className='w-full h-auto' src={monitor}/>
            </div>

        </div>
    </section>
  )
}

export default Monitor_Screen