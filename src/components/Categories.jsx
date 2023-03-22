import React from 'react'
import {categories} from '../data/data'

const Categories = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
        <div>
            <h2 className='text-2xl font-semibold text-orange-600 text-center mb-8'>Top Rated Menu Items</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {categories.map((item, index) =>{
                    return (
                        <div key={index} className="bg-gray-300 flex items-center justify-between px-2 rounded-xl">
                            <p>{item.name}</p>
                            <img className='w-[50px] md:w-[100px]' src={item.image} alt={item.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Categories