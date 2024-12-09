'use client'

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* <!-- Top Bar --> */}
      <div className=" bg-gray-900 text-white text-center px-5 sm:px-[30%] py-2 text-sm flex justify-between items-center">
        <div>
          Sign up and get 20% off your first order.{" "}
          <a href="#" className="underline hover:text-gray-300">
            Sign Up Now
          </a>
        </div>
        <div className="hidden sm:block">
          <ImCross />
        </div>
      </div>

      {/* <!-- Navigation Bar --> */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Hamburger Menu */}
          <div className="flex gap-3">
          <button
            className="lg:hidden text-2xl text-gray-800"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>

          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 lg:text-2xl">
            <Link href="/" className="hover:text-gray-900">
              SHOP.CO
            </Link>
          </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-8 text-gray-600 font-medium items-center">
            <li className="flex items-center gap-1">
              <Link href="/shop">Shop </Link><FaAngleDown />
            </li>
            <li>
              <Link href="#sale">OnSale</Link>
            </li>
            <li>
              <Link href="#new-arrival">NewArrival</Link>
            </li>
            <li>
              <Link href="#Brand">Brand</Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Search Input (Hidden on Small Screens) */}
            <div className="hidden lg:block relative w-[30vw]">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="border rounded-full bg-[#F0F0F0] px-12 py-2 w-full focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>

            <button className="text-gray-600 hover:text-gray-900 text-2xl">
              <Link href="/shoppingcart">
                <FiShoppingCart />
              </Link>
            </button>

            <button className="text-gray-600 hover:text-gray-900 text-2xl">
              <FaRegCircleUser />
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 shadow-md absolute w-full z-50">
            <ul className="flex flex-col text-gray-800 text-center py-2 space-y-2 font-medium">
              <li>
                <Link href="/" className="block py-2 hover:bg-gray-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#sale" className="block py-2 hover:bg-gray-200">
                  OnSale
                </Link>
              </li>
              <li>
                <Link href="#new-arrival" className="block py-2 hover:bg-gray-200">
                  NewArrival
                </Link>
              </li>
              <li>
                <Link href="#Brand" className="block py-2 hover:bg-gray-200">
                  Brand
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
