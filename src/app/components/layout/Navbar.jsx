"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "react-ai-search-bar";
import "react-ai-search-bar/dist/index.css";

const Navbar = () => {
  const placeHolders = [
    "What product or topic interests you?",
    "What do you need help finding?",
    "Hi, How can I help you?",
    "Seeking inspiration? Let us assist you.",
    "Whats the focus of your search?",
    "How can we guide your journey?",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex items-center justify-between py-6 px-4 bg-white shadow-sm">
        <div className="flex items-center space-x-6 xl:pl-24 ">
          <div className="flex items-center">
            <Image
              src="/assets/LOGO.webp"
              alt="Lyca Mobile Logo"
              width={90}
              height={34}
              className="hidden md:block"
            />
            <Image
              src="/assets/smallLogo.webp"
              alt="Lyca Mobile Logo"
              width={36}
              height={36}
              className="md:hidden"
            />
          </div>

          <div
            className=" h-[20px] w-[28px] cursor-pointer hidden lg:block"
            onClick={toggleMenu}
          >
            <Image
              src="/icons/ham.webp"
              alt="Profile Icon"
              width={28}
              height={20}
            />
          </div>

          {/* Links (hidden in mobile) */}
          <div className="hidden xl:flex items-center space-x-6 text-sm text-gray-800 font-medium">
            <Link href="#" className="hover:text-blue-600">
              Pay as you go
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Pay monthly
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Help
            </Link>
          </div>
        </div>
        <div className="lg:w-[480px] md:w-[300px] sm:mx-4 lg:py-2">
          <SearchBar
            placeholder={placeHolders}
            client="Sorted"
            top="60px"
            theme="dark"
          />
        </div>

        {/* Right Section: Buttons and Hamburger Menu */}
        <div className="flex items-center  space-x-4 xl:pr-24 ">
          {/* Quick Top Up Button */}
          <button className="bg-blue-600 text-white text-[13px] px-4 py-2  rounded hover:bg-blue-700 transition hidden md:block w-[130px]">
            Quick top up
          </button>

          {/* Icons */}
          <div className="md:flex  items-center space-x-4 hidden">
            {/* Profile Icon */}
            <div className="relative cursor-pointer">
              <Image
                src="/icons/profile.svg"
                alt="Profile Icon"
                width={28}
                height={28}
              />
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <Image
                src="/icons/Carts.svg"
                alt="Cart Icon"
                width={28}
                height={28}
              />
            </div>

            {/* Language Selector */}
            <div className="md:flex hidden items-center space-x-2 text-sm text-gray-800">
              <span>EN</span>
              <Image
                src="/icons/flag-uk.png"
                alt="UK Flag"
                width={28}
                height={28}
              />
            </div>
          </div>
          <div
            className=" h-[20px] w-[28px] cursor-pointer lg:hidden"
            onClick={toggleMenu}
          >
            <Image
              src="/icons/ham.webp"
              alt="Profile Icon"
              width={28}
              height={20}
            />
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:w-1/4 w-full flex flex-col p-6  px-8 space-y-6 shadow-lg">
          {/* Close Button */}
          <div className="flex justify-between items-center cursor-pointer">
            <div>
              <Image
                src="/assets/smallLogo.webp"
                alt="Lyca Mobile Logo"
                width={70}
                height={20}
              />
            </div>
            <div onClick={toggleMenu}>
              <Image
                src="/icons/close_circle.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600 "
            >
              Pay as you go
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
          <div className="flex justify-between items-center ">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600"
            >
              Pay monthly
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600"
            >
              Already with us
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600"
            >
              Help & support
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600"
            >
              Lyca Mobile UK
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-gray-800 text-lg hover:text-blue-600"
            >
              {" "}
              Language
            </Link>
            <Image src="/icons/plusIcon.svg" alt="" width={16} height={16} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
