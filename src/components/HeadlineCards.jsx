import React from "react";

const HeadlineCards = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6 pb-10">
        <div className="max-h-[200px] relative">
          {/* overlay  */}
          <div className="absolute text-white bg-black/70 inset-0 flex flex-col justify-between px-8 py-6 rounded-lg">
            <div>
            <h3 className="font-bold text-2xl text-orange-500">Sun's Out, BOGO's Out</h3>
            <p>Through 8/26</p>
            </div>
            <button className="border-white bg-white text-black rounded-xl self-start">Order Now</button>
          </div>
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="headline img 1"
            className="w-full max-h-[200px] rounded-lg object-cover"
          />
        </div>
        <div className="max-h-[200px] relative">
          {/* overlay  */}
          <div className="absolute text-white bg-black/70 inset-0 flex flex-col justify-between px-8 py-6 rounded-lg">
            <div>
            <h3 className="font-bold text-2xl text-orange-500">New Restaurants</h3>
            <p>Added Daily</p>
            </div>
            <button className="border-white bg-white text-black rounded-xl self-start">Order Now</button>
          </div>
          <img
            src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="headline img 1"
            className="w-full max-h-[200px] rounded-lg object-cover"
          />
        </div>
        <div className="max-h-[200px] relative">
          {/* overlay  */}
          <div className="absolute text-white bg-black/70 inset-0 flex flex-col justify-between px-8 py-6 rounded-lg">
            <div>
            <h3 className="font-bold text-2xl text-orange-500">We Deliver Desserts too</h3>
            <p>Tasty Treats</p>
            </div>
            <button className="border-white bg-white text-black rounded-xl self-start">Order Now</button>
          </div>
          <img
            src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="headline img 1"
            className="w-full max-h-[200px] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
