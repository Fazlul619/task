
"use client";
import React from "react";
import Image from "next/image";

const ReviewSection = () => {
  const totalReviews = 121;
  const averageRating = 4.0;
  const ratingDistribution = [
    { stars: 5, count: 50 },
    { stars: 4, count: 5 },
    { stars: 3, count: 10 },
    { stars: 2, count: 30 },
    { stars: 1, count: 2 },
  ];
  const maxCount = Math.max(...ratingDistribution.map((r) => r.count));
  return (
    <div className="p-4 md:w-11/12 mx-auto ">
      <div className="flex space-x-12 md:space-x-4 my-4">
        <p className="text-[#747474] font-semibold text-lg">Details</p>
        <p className="text-[#7E53D4] font-semibold text-lg">Review & Rating</p>
        <p className="text-[#747474] font-semibold text-lg">Discussion </p>
      </div>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <div className="md:w-2/3">
          <div className=" flex flex-col space-y-3">
            <div>
              <button className="bg-[#F4F8FF] text-black border border-[#7E53D4]  px-4 py-2 rounded-lg flex justify-center items-center gap-2">
                Newest{" "}
                <span>
                  {" "}
                  <Image
                    src="/arrow-down-01.png"
                    alt="Logo"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/Frame97.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Cameron Williamson
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    star <= 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={star <= 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.09 6.42a1 1 0 00.95.69h6.762c.969 0 1.371 1.24.588 1.81l-5.485 4.011a1 1 0 00-.364 1.118l2.09 6.42c.3.921-.755 1.688-1.538 1.118l-5.485-4.011a1 1 0 00-1.175 0l-5.485 4.011c-.783.57-1.838-.197-1.538-1.118l2.09-6.42a1 1 0 00-.364-1.118L2.208 11.847c-.783-.57-.38-1.81.588-1.81h6.762a1 1 0 00.95-.69l2.09-6.42z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700">Very Nice!!</p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Image src="/thumbs-up.png" alt="Logo" width={16} height={16} />
              <span className="text-sm">10</span>
            </div>
          </div>
          <hr className="border-dotted my-3 border-[#CECECE]" />
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <Image
                src="/Frame97.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Cameron Williamson
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    star <= 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={star <= 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.09 6.42a1 1 0 00.95.69h6.762c.969 0 1.371 1.24.588 1.81l-5.485 4.011a1 1 0 00-.364 1.118l2.09 6.42c.3.921-.755 1.688-1.538 1.118l-5.485-4.011a1 1 0 00-1.175 0l-5.485 4.011c-.783.57-1.838-.197-1.538-1.118l2.09-6.42a1 1 0 00-.364-1.118L2.208 11.847c-.783-.57-.38-1.81.588-1.81h6.762a1 1 0 00.95-.69l2.09-6.42z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700">Very Nice!!</p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Image src="/thumbs-up.png" alt="Logo" width={16} height={16} />
              <span className="text-sm">10</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Product Review
              </h3>
              <p className="text-purple-600 cursor-pointer text-sm">
                {totalReviews} reviews
              </p>
            </div>
            <div className="flex items-center mt-4 space-x-2 justify-between">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      star <= averageRating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill={star <= averageRating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.09 6.42a1 1 0 00.95.69h6.762c.969 0 1.371 1.24.588 1.81l-5.485 4.011a1 1 0 00-.364 1.118l2.09 6.42c.3.921-.755 1.688-1.538 1.118l-5.485-4.011a1 1 0 00-1.175 0l-5.485 4.011c-.783.57-1.838-.197-1.538-1.118l2.09-6.42a1 1 0 00-.364-1.118L2.208 11.847c-.783-.57-.38-1.81.588-1.81h6.762a1 1 0 00.95-.69l2.09-6.42z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-800">
                ({averageRating})
              </span>
            </div>
            <hr className="border-dotted  my-4 border-[#CECECE]" />
            <div>
              {ratingDistribution.map((rating) => (
                <div
                  key={rating.stars}
                  className="flex items-center space-x-2 mb-3"
                >
                  <span className="text-sm font-medium text-gray-600">
                    {rating.stars}
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: `${(rating.count / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
