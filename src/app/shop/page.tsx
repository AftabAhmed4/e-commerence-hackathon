import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ashirt from "../../../public/Frame 34.png"
import Shirt from "../../../public/Frame 33.png"
import Asd from "../../../public/image 7.png"
import NewArrival from '@/components/NewArrival'
import { TbAdjustmentsDown } from "react-icons/tb";



const page = () => {
  return (
    <div>
    
                
  <div className="max-w-7xl mx-auto px-4 py-6">
    {/* <!-- Breadcrumb --> */}
    <nav className="text-sm mb-6">
      <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link> 
      <span className="mx-2 text-gray-500">/</span>
      <span className="text-black font-bold">shop</span>
    </nav>

    {/* <!-- Main Container --> */}
  <div className="container px-4 py-8 md:px-20">


    {/* <!-- Content --> */}
    <div className="flex gap-6 ">
      {/* <!-- Filters Sidebar --> */}
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow hidden md:block">
        <h2 className="text-lg font-medium mb-4">Filters</h2>

        {/* <!-- Price Filter --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input type="range" min="50" max="200" className="w-full"/>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* <!-- Colors --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Colors</h3>
          <div className="flex gap-2">
            <span className="w-6 h-6 bg-red-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-blue-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-yellow-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-purple-500 rounded-full border"></span>
          </div>
        </div>

        {/* <!-- Sizes --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <span className="py-1 px-2 border rounded-lg text-gray-600">S</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">M</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">L</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">XL</span>
          </div>
        </div>
{/* 
        <!-- Dress Style --> */}
        <div>
          <h3 className="text-sm font-medium mb-2">Dress Style</h3>
          <ul className="text-gray-600 space-y-1">
            <li><input type="checkbox" className="mr-2"/> Casual</li>
            <li><input type="checkbox" className="mr-2"/> Formal</li>
            <li><input type="checkbox" className="mr-2"/> Party</li>
            <li><input type="checkbox" className="mr-2"/> Gym</li>
          </ul>
        </div>

        <button className="mt-6 w-full py-2 bg-black text-white rounded-lg">Apply Filter</button>
      </aside>

      {/* <!-- Product Grid --> */}
      <div className="w-full md:w-3/4">
          {/* <!-- Header --> */}
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Casual</h1>
      <p className="text-gray-600 md:block hidden">Showing 1-10 of 100 Products • Sort by: <span className="font-medium">Most Popular</span></p>
     <div className='md:hidden'> <TbAdjustmentsDown  className='text-4xl bg-[#F0F0F0] p-2 rounded-full'/></div>
    </header>
  
          {/* <!-- Product Card --> */}
          


          <div className="mt-3 flex flex-wrap justify-between ">

<div className=" rounded-lg max-w-sm p-1 sm:p-4 w-[50%] sm:w-[25%] h-auto">
      <div className="relative">


  <Link href='/modal'>
      <Image src={Shirt} alt="Ashirt" className="rounded-xl " /> 
      </Link>

      </div>
      <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 text-left">T-shirt with Tape Details</h2>
          <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-900 text-left">$120</div>
      </div>
  </div>
<div className="max-w-sm p-1 sm:p-4 rounded-lg w-[50%] sm:w-[25%] h-auto">
<Link href='/modal'>
<Image src={Ashirt} alt="Ashirt" className="rounded-xl " /> 
</Link>


  <div className="mt-4">
    <h2 className="text-lg font-semibold text-gray-800 text-left">Sleeve Striped T-shirt</h2>
    <div className="flex items-center mt-2">
    <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
      <span className="ml-2 text-sm text-gray-600">4.5/5</span>
    </div>
    <div className="flex items-baseline mt-4">
      <span className="text-lg font-semibold text-gray-800">$130</span>
      <span className="text-sm text-gray-500 line-through ml-2">$160</span>
      <span className="ml-2 text-sm text-red-500">-30%</span>
    </div>
  </div>
</div>


<div className=" rounded-lg  max-w-sm p-1 sm:p-4 w-[50%] sm:w-[25%] h-auto">
      <div className="relative">
      <Link href='/modal'>
  
      <Image src={Ashirt} alt="Ashirt" className="rounded-xl " /> 
      </Link>

      </div>
      <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 text-left">T-shirt with Tape Details</h2>
          <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-900 text-left">$120</div>
      </div>
  </div>

<div className="max-w-sm p-1 sm:p-4 rounded-lg w-[50%] sm:w-[25%] h-auto">
<Link href='/modal'>
  
<Image src={Shirt} alt="Ashirt" className="rounded-xl " />
</Link>


  <div className="mt-4">
    <h2 className="text-lg font-semibold text-gray-800 text-left">Sleeve Striped T-shirt</h2>
    <div className="flex items-center mt-2">
    <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
      <span className="ml-2 text-sm text-gray-600">4.5/5</span>
    </div>
    <div className="flex items-baseline mt-4">
      <span className="text-lg font-semibold text-gray-800">$130</span>
      <span className="text-sm text-gray-500 line-through ml-2">$160</span>
      <span className="ml-2 text-sm text-red-500">-30%</span>
    </div>
  </div>
</div>


</div>

<div className="mt-3 flex flex-wrap justify-between ">

<div className=" rounded-lg max-w-sm p-1 sm:p-4 w-[50%] sm:w-[25%] h-auto">
      <div className="relative">


  <Link href='/modal'>
      <Image src={Shirt} alt="Ashirt" className="rounded-xl " /> 
      </Link>

      </div>
      <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 text-left">T-shirt with Tape Details</h2>
          <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-900 text-left">$120</div>
      </div>
  </div>
<div className="max-w-sm p-1 sm:p-4 rounded-lg w-[50%] sm:w-[25%] h-auto">
<Link href='/modal'>
<Image src={Ashirt} alt="Ashirt" className="rounded-xl " /> 
</Link>


  <div className="mt-4">
    <h2 className="text-lg font-semibold text-gray-800 text-left">Sleeve Striped T-shirt</h2>
    <div className="flex items-center mt-2">
    <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
      <span className="ml-2 text-sm text-gray-600">4.5/5</span>
    </div>
    <div className="flex items-baseline mt-4">
      <span className="text-lg font-semibold text-gray-800">$130</span>
      <span className="text-sm text-gray-500 line-through ml-2">$160</span>
      <span className="ml-2 text-sm text-red-500">-30%</span>
    </div>
  </div>
</div>


<div className=" rounded-lg  max-w-sm p-1 sm:p-4 w-[50%] sm:w-[25%] h-auto">
      <div className="relative">
      <Link href='/modal'>
  
      <Image src={Ashirt} alt="Ashirt" className="rounded-xl " /> 
      </Link>

      </div>
      <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 text-left">T-shirt with Tape Details</h2>
          <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-900 text-left">$120</div>
      </div>
  </div>

<div className="max-w-sm p-1 sm:p-4 rounded-lg w-[50%] sm:w-[25%] h-auto">
<Link href='/modal'>
  
<Image src={Shirt} alt="Ashirt" className="rounded-xl " />
</Link>


  <div className="mt-4">
    <h2 className="text-lg font-semibold text-gray-800 text-left">Sleeve Striped T-shirt</h2>
    <div className="flex items-center mt-2">
    <div className="flex text-yellow-500">
        <svg className=" sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
        <svg className="sm:w-5 w-3 h-3 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.177 3.617c.3.921-.755 1.688-1.539 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.783.57-1.838-.197-1.539-1.118l1.177-3.617a1 1 0 00-.364-1.118L2.049 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.177-3.617z"></path></svg>
      </div>
      <span className="ml-2 text-sm text-gray-600">4.5/5</span>
    </div>
    <div className="flex items-baseline mt-4">
      <span className="text-lg font-semibold text-gray-800">$130</span>
      <span className="text-sm text-gray-500 line-through ml-2">$160</span>
      <span className="ml-2 text-sm text-red-500">-30%</span>
    </div>
  </div>
</div>


</div>
      
{/* 
          <!-- Add more product cards below --> */}
    

        {/* <!-- Pagination --> */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">Previous</button>
          <button className="px-4 py-2 mx-1 bg-black text-white rounded">1</button>
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">2</button>
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">Next</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default page