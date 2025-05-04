import React, { useState } from 'react'

const Price = () => {
    const [count,setCount]=useState(1);

    const starter = Math.round(400 * count /50);
    const business = Math.round(7500 * count /50);
  return (
    <section className='px-4 py-20'>
        <div className='max-w-7xl mx-auto '>
            <h2 className='text-3xl md:text-4xl font-bold text-center'>Pricing</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                {/* Starter plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer'>
                    <h3 className='text-xl text-gray-600 mb-4'>Starter</h3>
                    <p className='text-3xl font-bold mb-6'>${starter}/mo</p>
                </div>
                {/* Business Plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer'>
                    <h3 className='text-xl text-gray-600 mb-4'>Business</h3>
                    <p className='text-3xl font-bold mb-6'>${business}/mo</p>
                </div>
            </div>

            <div className='max-w-2xl mx-auto'>
                <p className='text-center text-gray-600 mb-4 mt-6'>{count} Products</p>
                <div>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input
                        className='flex-1 h-2 bg-gray-200 rounded-lg '
                         type="range" min="1" max="50" value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>
                        <span>50</span>
                    </div>
                    <div className='text-center mt-6'>
                        <p className='text-xl text-gray-600 mb-4'>Ready to get Started?</p>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-color cursor-pointer'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>



    </section>
  )
}

export default Price