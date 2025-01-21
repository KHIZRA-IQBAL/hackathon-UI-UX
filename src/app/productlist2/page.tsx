// src\app\productlist2\page.tsx
import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import Image from 'next/image';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';


export default async function Productv1() {


  interface IProduct{
    image:string,
    slug:string,
    tags:string[],
    price:number,
    quantity:number,
    description:string,
    features:string[],
    dimensions:{
      width:string,
      height:string,
      depth:string
    },
    category:string,
    brand:string
  }

  const res:IProduct[]=await client.fetch(`*[_type == "product"][]{
  "image":image.asset->url,
  slug,
  tags,
  price,
  quantity,
  description,
  features,
  dimensions{
   width,
  height,
  depth,
  },
  "category":category->name,
  "brand":brand->name
}`);
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
    {res.map((product3:IProduct,index:number) => (
  <Link href={ `/productlist/id?name=${product3.slug}&image=${product3.image}&category=${product3.category}&price=${product3.price}&description=${product3.description}&features=${product3.features}&dimensions={width=${product3.dimensions.width},height=${product3.dimensions.height},depth=${product3.dimensions.depth}}`} key={index}><div 
    className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
    key={index}>
    <Image
      src={product3.image || product3.image}
      alt="Product Image"
      width={305} 
      height={375} 
      className="w-full h-[375px] object-cover rounded-md"
    />
    <h4 className="font-bold mt-4 mb-2">{product3.category}</h4>
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








    


