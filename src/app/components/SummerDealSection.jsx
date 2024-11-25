"use client";
import React, { useRef } from "react";
import SummerProductCard from "./SummerProductCard";
import products from "@/data/summerProducts.json";
import Image from "next/image";
const SummerDealSection = () => {
  const productCarouselRef = useRef(null);
  const CARD_WIDTH = 300; 

  const scrollCarousel = (direction) => {
    if (productCarouselRef.current) {
      productCarouselRef.current.scrollBy({
        left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="py-4">
      <div className="md:w-11/12 mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <p className="text-[#7E53D4] text-lg">SUMMER</p>
            <p className="text-black text-3xl">Big Deal</p>
          </div>
          <div>
            <button className="mr-2" onClick={() => scrollCarousel("left")}>
              <span>
                <Image
                  src="/Frame 51.png"
                  alt="Left Scroll"
                  width={24}
                  height={24}
                />
              </span>
            </button>
            <button onClick={() => scrollCarousel("right")}>
              <span>
                <Image
                  src="/Frame 52.png"
                  alt="Right Scroll"
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="container mx-auto">
          <div
            ref={productCarouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth sm:hidden"
          >
            {products.map((product) => (
              <SummerProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>

          {/* Grid Layout for Larger Screens */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <SummerProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#7E53D4] text-white px-3 py-2 rounded-lg mt-5">
            See more
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default SummerDealSection;
