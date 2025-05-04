import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'

const Service = () => {
    const services = [
        {
          icon: <BsStack className="w-8 h-8 text-indigo-600" />,
          title: "Web Design",
          description: "One for all and all for one, Muskehounds are always ready.",
          link: "#learn-more"
        },
        {
          icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
          title: "Ad-Creatives", 
          description: "Alphabet Village and the subline of her own road.",
          link: "#learn-more"
        },
        {
          icon: <FiSettings className="w-8 h-8 text-red-400" />,
          title: "Automation",
          description: "Little Blind Text should turn around and return.",
          link: "#learn-more"
        },
        {
          icon: <BiTime className="w-8 h-8 text-cyan-400" />,
          title: "Infographics",
          description: "Nothing the copy said could convince her.",
          link: "#learn-more"
        }
      ]

  return (
    <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
            {/* header */}
            <div className='md:w-1/2 w-full gap-24'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>Future of Support with new shape </h2>
                <p className='text-gray-600 text-lg mb-4 md:w-4/5'>Discuss your goals, determine success metrices, indenity problems</p>
                <div className='space-y-3'>
                    {/* for circle */}
                    <div className='flex items-center gap-2'>
                        <div className='w-5 h-5 bg-indigo-100 rounded-full items-center flex justify-center'>
                            <div className='w-2.5 h-2.5 bg-indigo-600 rounded-full'></div>
                        </div>
                        <span className='text-gray-600'>UX Design content stagery</span>
                    </div>
                    {/* for circle */}
                    <div className='flex items-center gap-2'>
                        <div className='w-5 h-5 bg-indigo-100 rounded-full items-center flex justify-center'>
                            <div className='w-2.5 h-2.5 bg-indigo-600 rounded-full'></div>
                        </div>
                        <span className='text-gray-600'>Development Bring</span>
                    </div>
                </div>
                <button className='mt-8 bg-indigo-800 px-8 py-3 text-white cursor-pointer rounded-full hover:bg-indigo-700 transition-color'>Get Started</button>
            </div>

            {/* Service card */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    // gird grid-cols-1 md:grid-cols-2 gap-12
                    services.map((service,index)=>(
                        <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-500'>
                            <div className='mb-4'>
                                {service.icon}
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600 mb-4'>{service.description}</p>
                            <a href={service.link} className='text-indigo-600 font-medium text-lg'>Learn More</a>
                        
                        </div>
                    ))
                }
            </div>
        </div>

    </section>
  )
}

export default Service