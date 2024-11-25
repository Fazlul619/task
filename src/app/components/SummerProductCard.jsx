"use client";
import React from "react";
import Image from "next/image";
const SummerProductCard = ({
  image,
  name,
  price,
  discount,
  rating,
  reviews,
  img,
}) => {
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div>
      <div className="max-w-xs rounded-lg shadow-lg border border-gray-200 p-4 bg-white">
        <div className="relative">
          <div className="bg-[#F6F5FD] w-full h-[250px] rounded-lg flex justify-center items-center p-5">
            <Image
              src={image}
              alt={img}
              width={166}
              height={250}
              className="object-contain h-full"
            />
          </div>

          {discount > 0 && (
            <div className="absolute top-0 right-3 bg-[#7E53D4] text-white text-sm font-bold px-3 py-3 w-11 rounded-b-full text-center">
              Up to {discount}%
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.57 8.332 1.151-6.055 5.844 1.466 8.848L12 18.896l-7.411 4.104 1.466-8.848-6.055-5.844 8.332-1.151z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500">({reviews})</span>
          </div>
          <div className="flex justify-between items-center my-3">
            <h3 className="text-sm font-normal text-[#1D1D1D] w-20-">{name}</h3>

            <span className="text-xl font-semibold text-[#1D1D1D]">
              BDT {discountedPrice}
            </span>
          </div>
        </div>
        <button className="w-full border border-[#7E53D4] bg-[#FFF] text-[#7E53D4] text-base font-semibold py-2 rounded-lg ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SummerProductCard;
