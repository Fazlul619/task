"use client";

import Image from "next/image";
import React, { useRef } from "react";

const RelatedProducts = () => {
   // References for carousel and arrows
  const productCarouselRef = useRef(null);
  const CARD_WIDTH = 342; // 302px width + 40px gap

  const scrollCarousel = (direction) => {
    if (productCarouselRef.current) {
      productCarouselRef.current.scrollBy({
        left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-2">
      <div >
        <div className="px-12 bg-[#F4F8FF] pt-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[28px] font-bold leading-[1.3] text-black">
              Related Products
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                width={24}
                height={24}
                src="/left.svg"
                alt="Left Arrow"
                className="cursor-pointer"
                onClick={() => scrollCarousel("left")}
              />
              <Image
                width={24}
                height={24}
                src="/right.svg"
                alt="Right Arrow"
                className="cursor-pointer rotate-180"
                onClick={() => scrollCarousel("right")}
              />
            </div>
          </div>

          <div
            ref={productCarouselRef}
            className="flex gap-10 overflow-x-auto scroll-smooth py-6"
          >
            {[
              { image: "/saree.png", name: "Indian Saree", price: "BDT 2,300" },
              { image: "/Hoodie.png", name: "Hoodie", price: "BDT 2,300" },
              { image: "/Plazu.png", name: "Plazu", price: "BDT 2,300" },
              { image: "/Jacket.png", name: "Jacket", price: "BDT 2,300" },
            ].map((product, index) => (
              <div
                key={index}
                className="min-h-[400px] w-[302px] flex-shrink-0 flex flex-col rounded-lg"
              >
                <div className="p-2 flex flex-col gap-4 flex-grow">
                  <div>
                    <Image
                      width={252}
                      height={287}
                      src={product.image}
                      alt={product.name}
                      className="bg-[#F4F8FF] px-[17px] w-full h-[287px] rounded-lg"
                    />
                  </div>
                  <div className="px-2 text-[#1D1D1D] flex justify-between items-center">
                    <span className="text-base leading-[1.3] font-normal">
                      {product.name}
                    </span>
                    <span className="text-[19px] font-semibold leading-[1.3]">
                      {product.price}
                    </span>
                  </div>
                  <div className="h-10 py-2 px-6 flex justify-center items-center rounded-lg border text-[#7E53D4] border-[#7E53D4] hover:bg-[#7E53D4] hover:text-white">
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#7E53D4] text-white px-3 py-2 rounded-lg mt-5">
          See more
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;