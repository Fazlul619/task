/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F4F8FF] px-4 sm:px-10">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <Image src="/wf 1.png" alt="Logo" width={50} height={28} />
            <span className="text-xl font-semibold text-gray-800 ml-2">
              We<span className="text-purple-600">5</span>ive
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4 lg:hidden">
          <Image
            src="/search-01.png"
            alt="Search Icon"
            width={16}
            height={16}
          />
          <Link href="/cart">
            <Image src="/shopping.png" alt="Cart" width={24} height={24} />
          </Link>
          <Link href="/profile">
            <Image src="/user.png" alt="Profile" width={24} height={24} />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 ml-8 text-gray-600">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-purple-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/deals" className="hover:text-purple-600">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/whats-new" className="hover:text-purple-600">
                What&apos;s New
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              className="px-3 py-2 border rounded-full text-[#1D1D1D] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <div className="absolute flex gap-1 top-2 left-3">
              <Image
                src="/search-01.png"
                alt="Search Icon"
                width={16}
                height={16}
              />
              <p className="text-black">Search</p>
            </div>
          </div>
          <Link href="/cart">
            <Image src="/shopping.png" alt="Cart" width={24} height={24} />
          </Link>
          <Link href="/profile">
            <Image src="/user.png" alt="Profile" width={24} height={24} />
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="space-y-2 px-4 pb-4 text-gray-600">
            <li>
              <Link href="/" className="block hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="block hover:text-purple-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/deals" className="block hover:text-purple-600">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/whats-new" className="block hover:text-purple-600">
                What&apos;s New
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
