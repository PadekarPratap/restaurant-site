import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative max-h-[500px]">
        {/* overlay  */}
        <div className="absolute text-gray-200 flex flex-col justify-center inset-0 pl-5 bg-black/50">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full max-h-[500px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
