import React from 'react'
// import headphone from './assets/Image/photo-1505740420928-5e560c06d30e.avif'
import headphone from '../assets/Image/photo-1505740420928-5e560c06d30e.avif'
const Card2 = () => {
    const card={
        title:'Premium Wireless Headphones',
        price:1000,
        disprice:700,
        description:'Noise-cancelling Bluetooth headphones with premium sound quality',
        img:headphone,
        review:128,
    }
  return (
    <div>

        <div className='max-w-md rounded-lg mx-auto mt-10 px-6 border border-gray-300 shadow-lg pb-8 '>
            <div className=''>
                <img className='w-full h-48' src={card.img} alt="Image" />
            </div>
            <p className='text-gray-500 pt-2 px-6'>({card.review} reviews)</p>
            <h2 className='text-black text-xl font-bold px-6 py-2'>{card.title}</h2>
            <p className='px-6 text-gray-700'>{card.description}</p>

            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center'>
                <p className='text-xl font-bold text-red-600 px-6 pt-2 pe-4'>BDT :{card.price}</p>
                <p className='text-gray-500 line-through pt-2'>BDT :{card.disprice}</p>
                </div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer'>Add to Card</button>
            </div>
        </div>

    </div>
  )
}

export default Card2