import React from 'react'

const FeaturesSection = () => {
    const features = [
        {
          icon: "🔍", 
          title: "Find out what you need",
          description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
          icon: "⚙️",
          title: "Work out the details", 
          description: "Communication protocols apart from engagement models"
        },
        {
          icon: "🚀",
          title: "We get to work fast",
          description: "Protocols apart from engage models, pricing billing"
        }
      ]
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 '>
        {/* heading */}
         <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold '>How can we help your business?</h2>
            <p className='text-gray-600'>when you resell besnik, you build trust and increase</p>
         </div>
        {/* boxs */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                features.map((features,index)=>(
                    <div className='flex flex-col items-center py-16'>
                        <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-gray-300' style={{backgroundColor:index==0 ? '#f1eff0' : index==1 ? '#f0f1ef' : '#eff0f1'}}>
                            <div className='text-3xl'>{features.icon}</div>
                        </div>
                        <h3 className='text-2xl font-medium mb-3'>{features.title}</h3>
                        <p className='text-gray-500 text-center'>{features.description}</p>
                    </div>
                ))
            }
        </div>
        {/* button */}
        <div className='text-center mt-12'>
            <button className='bg-blue-600 py-4 px-8 text-white font-bold rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-2xl relative text-center'>Become a partner</button>
        </div>
    </section>
  )
}

export default FeaturesSection