'use client'
import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { Productpic2 } from '@/constant/product2';

export default function Productv1() {
  return (
    <>
  <Navbar/>

 <div className='xsm:w-full 
  md:w-full'>
 <Image src={"/all-product.png"} alt='product_pic' width={1440} height={704}/>
 </div>

 <div className='flex justify-between'>
  {/* left side */}
     <div className='my-[8px] ml-[24px] flex gap-[12px] xsm:hidden md:flex'>
          <div className='flex py-[8px] px-[24px]'><h2>Cetagory</h2>
            <MdArrowDropDown size={24} />
          </div>
          <div className='flex py-[8px] px-[24px]'><h2>Product type</h2>
          <MdArrowDropDown size={24} />
          </div>
          <div className='flex py-[8px] px-[24px]'><h2>Price</h2>
          <MdArrowDropDown size={24} />
          </div>
          <div className='flex py-[8px] px-[24px]'><h2>Brand</h2>
          <MdArrowDropDown size={24} />
          </div>
     </div>
     {/* right side */}
     <div className='flex xsm:ml-[30px] md:ml-[0px] md:flex'>
             <div className='py-[8px] px-[24px]'><h2>Sorting by:</h2></div>
             <div className='flex py-[8px] px-[24px]'><h2>Date added</h2>
             <MdArrowDropDown size={24}/>
             </div>
     </div>
 </div>

    <div className="flex ">
  {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 gap-6 ml-6">
    {Productpic2.map((product3,index) => (
   <Link href={ `/productlist/${product3.id}`} key={index}><div 
    className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
    key={index}>
    <Image
      src={product3.src}
      alt="Product"
      width={305} 
      height={375} 
      className="w-full h-[375px] object-cover rounded-md"
    />
    <h4 className="font-bold mt-4 mb-2">{product3.heading}</h4>
    <p className="text-gray-600">{product3.price}</p>
  </div></Link>
    ))}
  </div>
      
      
</div>
<div className="text-center mt-11 mb-[36px]">
          <button className="bg-gray-500 hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
            Load More
          </button>
        </div>

        <Footer/>

    </>
  )
}








    


