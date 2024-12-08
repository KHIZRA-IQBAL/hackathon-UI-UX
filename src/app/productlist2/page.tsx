'use client'
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Productv1() {
  return (
    <>
  <Navbar/>
   
      

    
<div className="flex mt-[20px]">
  {/* Vertical Navbar */}
  <aside className="w-[385px] bg-white p-12 ">
    <div className="flex flex-col gap-12">
      {/* Product Type Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Product type
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="furniture" />
            <Label htmlFor="furniture" className="text-base font-normal text-[#2A254B]">
              Furniture
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="homeware" defaultChecked />
            <Label htmlFor="homeware" className="text-base font-normal text-[#2A254B]">
              Homeware
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="sofas" />
            <Label htmlFor="sofas" className="text-base font-normal text-[#2A254B]">
              Sofas
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="lighting" />
            <Label htmlFor="lighting" className="text-base font-normal text-[#2A254B]">
              Light fittings
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="accessories" />
            <Label htmlFor="accessories" className="text-base font-normal text-[#2A254B]">
              Accessories
            </Label>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Price
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="0-100" />
            <Label htmlFor="0-100" className="text-base font-normal text-[#2A254B]">
              0 - 100
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="101-250" />
            <Label htmlFor="101-250" className="text-base font-normal text-[#2A254B]">
              101 - 250
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="250plus" />
            <Label htmlFor="250plus" className="text-base font-normal text-[#2A254B]">
              250 +
            </Label>
          </div>
        </div>
      </div>

      {/* Designer Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Designer
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="robert-smith" />
            <Label htmlFor="robert-smith" className="text-base font-normal text-[#2A254B]">
              Robert Smith
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="liam-gallagher" />
            <Label htmlFor="liam-gallagher" className="text-base font-normal text-[#2A254B]">
              Liam Gallagher
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="biggie-smalls" />
            <Label htmlFor="biggie-smalls" className="text-base font-normal text-[#2A254B]">
              Biggie Smalls
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="thom-yorke" />
            <Label htmlFor="thom-yorke" className="text-base font-normal text-[#2A254B]">
              Thom Yorke
            </Label>
          </div>
        </div>
      </div>
    </div>
  </aside>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ml-6">
    {[
      { title: 'The Dandy chair', price: '£250', img: '/Photo1.png' },
      { title: 'Rustic Vase Set', price: '£250', img: '/photo2.png' },
      { title: 'The Silky Vase', price: '£250', img: '/stool.png' },
      { title: 'The Silky Vase', price: '£250', img: '/photo3.png' },
      { title: 'The Silky Vase', price: '£250', img: '/photo4.png' },
      { title: 'The Silky Vase', price: '£250', img: '/Parent (1).png' },
      { title: 'The Silky Vase', price: '£250', img: '/Parent (2).png' },
      { title: 'The Silky Vase', price: '£250', img: '/Parent (3).png' },
      { title: 'The Silky Vase', price: '£250', img: '/Photo (4).png' },
    ].map((product) => (
      <div
        key={product.title}
        className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
      >
        <Image
          src={product.img}
          alt={product.title}
          width={305} 
          height={375} 
          className="w-full h-[375px] object-cover rounded-md"
        />
        <h4 className="font-bold mt-4 mb-2">{product.title}</h4>
        <p className="text-gray-600">{product.price}</p>
      </div>
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