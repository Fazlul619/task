import React from 'react';
import Image from "next/image";
const BigDealSection = () => {
    return (
        <div className='flex flex-col bg-[#F4F8FF] lg:flex-row items-center justify-center lg:bg-[#F4F8FF]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <div>
                <p className='text-[#6F42C1] italic font-mono'>Big Deal</p>
                <p className='text-4xl text-[#1D1D1D] lg:text-5xl'><span className='text-[#6F42C1]'>30%</span> Off for New Customers</p>
            </div>
            <div className="flex">
              <button className="bg-[#8F71E1] text-white rounded-2xl px-3 py-1">
                Shop Now
              </button>
              <button className="bg-[#8F71E1] text-white rounded-full p-1">
                {" "}
                <Image
                  src="/arrow-up-right-01.png"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            </div>
           <div>
           <Image
                  src="/image 2.png"
                  alt="Logo"
                  width={390}
                  height={ 438}
                />
           </div>

        </div>
    );
};

export default BigDealSection;