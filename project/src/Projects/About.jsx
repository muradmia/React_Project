import React from 'react'

const About = () => {
    const features = [
        {
          icon: "🟣", // Replace with your actual icon component or image
          title: "Built for impact",
          description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
          icon: "🔴", // Replace with your actual icon component or image
          title: "In sync with you",
          description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
      ];
  return (
    <section id='about' className='w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6'>
        <div className='max-w-6xl mx-auto'>
            {/* left div */}
            <div className='grid md:grid-cols-3 gird-cols-1 gap-8'>
                <div className=''>
                    <p className='text-sm text-purple-600 font-medium mb-2'>ACHIVE MORE</p>
                    <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a convoy is to keep your team</h2>
                </div>
            
            {/* middle div */}
            <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 justify-between'>
                {
                    features.map((features,index) =>(
                        <div key={index} className='flex items-start space-x-4'>
                            <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{features.icon}</div>
                            <div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{features.title}</h3>
                                <p className='text-gray-600'>{features.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* right div */}
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About