import React from "react";
import Image from "next/image";
const ManCollectionSection = () => {
  return (
    <div>
         <div className="flex flex-col my-10  md:flex-row md:items-center gap-10 md:w-11/12 mx-auto ">
      <div className="bg-[#EEECFB]" >
        <div>
        <Image
          src="/man-with-sunglass.png"
          alt="Logo"
          width={468}
          height={566}
          className="bg-[#EEECFB]"
        />
        </div>
      </div>
      <div className="ml-4 md:ml-0">
        <h1 className="text-[#1D1D1D] mb-2 md:text-5xl md:mb-6">MEN COLLECTION</h1>
        <div className="flex">
          <button className="bg-[#8F71E1] text-white rounded-2xl px-3 py-1">
            Shop Now
          </button>
          <button className="bg-[#8F71E1] text-white rounded-full p-1">
            <Image
              src="/arrow-up-right-01.png"
              alt="Logo"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
        <div className="hidden md:flex justify-center gap-3">
        <p className="w-8 h-2 rounded-lg bg-[#7E53D4]"></p>
        <p className="w-4 h-2 rounded-lg bg-[#E0DCF8]"></p>
        <p className="w-4 h-2 rounded-lg bg-[#E0DCF8]"></p>
      </div>
    </div>
   
    
  );
};

export default ManCollectionSection;
