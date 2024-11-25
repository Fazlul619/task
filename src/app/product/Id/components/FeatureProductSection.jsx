"use client";
import React, { useState } from "react";
const FeatureProductSection = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 1) return prev - 1;
      return prev;
    });
  };
  return (
    <div className="relative">
      <div className="bg-[#F4F8FF] p-6 max-w-xl mx-auto rounded-lg shadow-md">
        <div className="bg-[#2F1C59] text-white text-xs px-4 py-2 inline-block rounded-lg mb-4">
          New Arrival
        </div>
        <h1 className="text-2xl font-bold mb-2 text-black ">White Hoodie</h1>
        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <span className="text-[#FFCF11]">★★★★☆</span>
          <span className="text-sm text-black">(4.0)</span>
          <a href="#" className="text-sm text-[#7E53D4] underline">
            121 reviews
          </a>
        </div>
        <div className="text-xl font-semibold mb-4 text-black">BDT 2500</div>
        <hr className="border-dotted my-3" />
        {/* Sizes */}
        <div className="flex flex-col  gap-4 md:flex-row md:items-center justify-between">
          <div className="mb-6">
            <p className="text-sm font-medium mb-2 text-black">
              Available Size
            </p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border border-[#7E53D4] rounded-md ${
                    selectedSize === size
                      ? "bg-[#7E53D4] text-[#F6F5FD] "
                      : "bg-[#F6F5FD] text-gray-700 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6 hidden md:block">
            <p className="text-sm font-medium mb-2 text-black">
              Available Color
            </p>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="Off White"
                  onChange={() => handleColorSelect("Off White")}
                  checked={selectedColor === "Off White"}
                  className="hidden peer"
                />
                <span className="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-black peer-checked:border-black"></span>
                <span className="text-black text-xs">Off White</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="Black"
                  onChange={() => handleColorSelect("Black")}
                  checked={selectedColor === "Black"}
                  className="hidden peer"
                />
                <span className="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-black peer-checked:border-black"></span>
              </label>
            </div>
          </div>
        </div>
        <hr className="border-dotted block my-2" />
        {/* Quantity */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2 text-black">Quantity</p>
          <div className="flex items-center justify-between gap-4  px-5 py-2 bg-[#ECE9FE] rounded-full w-32">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="text-lg font-bold text-black"
            >
              -
            </button>
            <span className="text-lg font-medium text-black">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="text-lg font-bold text-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4  md:flex-row">
          <button className="flex-1 bg-[#7E53D4] text-white py-2 rounded-md">
            Buy Now
          </button>
          <button className="flex-1 border border-[#7E53D4] bg-[#F4F8FF] text-gray-700 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
       
      </div>
      <div className="hidden md:block absolute right-0 top-1/4">
          <div className="w-28 h-28 bg-[#581FC1] rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 10H4l1-10z"
              />
            </svg>

            <p className="text-sm font-semibold">Your bag</p>

            <p className="text-sm font-bold mt-1">0</p>
          </div>
        </div>
    </div>
  );
};

export default FeatureProductSection;
