import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            {" "}
            <h1 className="text-2xl lg:text-5xl font-bold text-center">
              Elevate Your Everyday Style
            </h1>
            <p className="text-sm lg:text-[#F5F3FF] text-center">
              Discover the Latest Trends in Sustainable Fashion
            </p>
            <div className="flex justify-center">
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
        </div>
      </div>

      
        <div className="space-y-3 md:flex md:gap-20 px-4 bg-[#6441C2F2] ">
          <div className="flex gap-2">
            <div>
              <Image
                src="/truck-delivery.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>

            <div>
              <p className="text-base lg:text-lg">FREE SHIPPING</p>
              <p className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image
                src="/exchange-01.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>

            <div>
              <p className="text-base lg:text-lg">7 DAYS EXCHANGE</p>
              <p className="text-sm">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
            </div>
          </div>
           <div className="flex gap-2">
            <div>
              <Image
                src="/payment-02.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>

            <div>
              <p className="text-base lg:text-lg">100% PAYMENT SECURE</p>
              <p className="text-sm">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
