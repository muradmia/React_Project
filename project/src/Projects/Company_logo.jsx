import React from 'react'
import slack from '../assets/slack (1).png'
import amazon from '../assets/amazon.png'
import woocomerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
const Company_logo = () => {
const logos =[slack,amazon, woocomerce, meundies, sitepoint];
  return (
    <div className=' overflow-hidden w-full container mx-auto py-20 px-4  lg:px-8 flex sm:flex-row flex-col sm:items-center'>
        <div className='w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 px-4 z-10 text-xl font-semibold text-left '>Pround partner at <br />Hubspot & Segment</div>
        <div className='flex animate-marquee '>
            {
                logos.map((logo,index)=>(
                    <img src={logo} alt="logos here" className='mx-12 h-8 w-36 opacity-75 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all' />
                ))
            }
        </div>
    </div>
  )
}

export default Company_logo