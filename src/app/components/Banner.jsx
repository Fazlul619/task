
import React from 'react';
import Image from "next/image";
const Banner = () => {
    return (
        <div>
            <div
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", // Adjust as needed
      }}
    >
     <div className='flex justify-center items-center h-full'>
        <div> <h1 className='text-2xl lg:text-5xl font-bold text-center'>Elevate Your Everyday Style</h1>
        <p className='text-sm lg:text-[#F5F3FF] text-center'>Discover the Latest Trends in Sustainable Fashion</p>
        <div className='flex justify-center'>
            <button className='bg-[#8F71E1] text-white rounded-2xl px-3 py-1'>Shop Now</button>
            <button className='bg-[#8F71E1] text-white rounded-full p-1'> <Image src="/arrow-up-right-01.png" alt="Logo" width={24} height={24} /></button>
        </div></div>
       
     </div>
    </div>
   
        </div>
    );
};

export default Banner;