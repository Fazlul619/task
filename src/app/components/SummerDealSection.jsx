"use client";
import React from "react";
import SummerProductCard from "./SummerProductCard";
import products from "@/data/summerProducts.json";
import Image from "next/image";
const SummerDealSection = () => {
  return (
    <div className="py-4">
 <div className="md:w-11/12 mx-auto">
 <div className="mb-4 flex justify-between items-center">
    <div >
        <p className="text-[#7E53D4] text-lg">SUMMER</p>
        <p className="text-black text-3xl">Big Deal</p>
    </div>
    <div>
        <button className="mr-2"> <span><Image
             src='/Frame 51.png'
             alt='img'
            width={24}
            height={24}
            
          /></span></button>
        <button><span><Image
             src='/Frame 52.png'
             alt='img'
            width={24}
            height={24}
            
          /></span></button>
    </div>
 </div>
      <div className="container mx-auto ">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
    </div>
   
  );
};

export default SummerDealSection;
