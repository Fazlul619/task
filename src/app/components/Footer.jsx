import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div>
     <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className=" flex flex-col gap-10 mb-6 md:flex-row md:mb-6">
            <div className='md:w-1/2'>
            <div className="flex items-center mb-4">
            <Image src="/wf 1.png" alt="We5ive Logo" width={50} height={28} />
            <span className="text-2xl font-semibold text-white ml-2">
              We<span className="text-purple-500">5</span>ive
            </span>
          </div>
          <p className="text-gray-400 text-base">
          Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. 
          </p>
            </div>
            <div className="">
          <h3 className="text-xl font-semibold mb-4">Sign Up For Our Newsletter!</h3>
          <p className="text-gray-400 mb-4">
            Get notified about updates and be the first to get early access to new Podcast episodes.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-l-md bg-[#FFFFFF] text-white outline-none"
            />
            <button className="bg-[#7E53D4] hover:bg-purple-700 px-6 py-3 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
        </div>
        <div className=" flex flex-col gap-2  md:flex-row justify-between">

          
          <div className="md:space-y-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mb-4">support@we5ive.com</p>
            
          </div>
          <div className="text-gray-400 md:space-y-2">
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          <div>
            <ul className="text-gray-400 md:space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Social Link</h3>
            <div className="flex space-x-4">
              <Image className='rounded-full' src="/Facebook.png" alt="Facebook" width={24} height={24} />
              <Image className='rounded-full' src="/Twitter.png" alt="X" width={24} height={24} />
              <Image className='rounded-full' src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      
    </footer>
    <div className="bg-[#7E53D4] py-4 text-center text-sm">
        &copy; 2024 | We5ive
      </div>
        </div>
    );
};

export default Footer;