import React, { useState } from "react";
import {data} from '../data/data'

const Food = () => {

    const [foods, setFoods] = useState(data)

    const fitlerCategory = (category) =>{
        setFoods(
            data.filter((item) => item.category === category)
        )
    }

    const filterPrice = (price) =>{
        setFoods(
            data.filter((item) => item.price === price)
        )
    }

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-orange-700 font-bold text-3xl text-center mb-5">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between ">
        {/* filter by category  */}
        <div>
          <p className="text-gray-600 text-lg font-mono">Filter Type</p>
          <div className="flex gap-5 my-3 flex-wrap">
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => setFoods(data)}>
              All
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => fitlerCategory('burger')}>
              Burgers
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => fitlerCategory('pizza')}>
              Pizza
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => fitlerCategory('salad')}>
              Salad
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => fitlerCategory('chicken')}>
              Chicken
            </button>
          </div>
        </div>

        {/* filter by price  */}
        <div>
          <p className="text-gray-600 text-lg font-mono">Filter Price</p>
          <div className="flex gap-5 my-3 flex-wrap">
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => filterPrice('$')}>
              $
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => filterPrice('$$')}>
              $$
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => filterPrice('$$$')}>
              $$$
            </button>
            <button className="border-orange-600 rounded-full text-orange-600 border-2 font-semibold hover:bg-orange-600 hover:text-white" onClick={() => filterPrice('$$$$')}>
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* map iteration  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {foods.map((item, index) => {
                return (
                    <div key={index} className='min-h-[200px] border shadow-lg rounded-t-lg hover:scale-105 hover:duration-150'>
                        <img className="h-[200px] w-full object-cover rounded-t-lg" src={item.image} alt={item.name} />
                        <div className="flex items-center justify-between px-5 py-3">
                            <p className="text-sm font-semibold">{item.name}</p>
                            <p className="text-lg font-semibold bg-orange-600 p-1 rounded-full text-white">{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default Food;
