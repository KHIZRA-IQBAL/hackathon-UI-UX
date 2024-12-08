import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <section className='w-full h-[132px]'>
             <div className='flex justify-between py-[20px] px-[26px]  items-center'>
                <div className='pl-[26px]'><CiSearch/></div>
                <h1 className='text-2xl'>Avion</h1>
                <div className="flex gap-4 pr-[26px] h-[16px]">
                    <FiShoppingCart size={16}/>
                 <Image src={"/user.png"} alt="User" width={16} height={16}></Image>
                </div>
             </div>
             <div className='border-[1px] border-black mx-[50px]'></div>
            <nav className='px-[382px] py-[20px] flex justify-center'>
                <ul className='flex gap-6 text-[16px]'>

            
            <Link href={"/"}> <li>Plant pots</li></Link>
           <Link href={"/home2"}> <li>Ceramics</li></Link>
            <Link href={"/about"}><li>Tables</li></Link>
            <Link href={"/productlist2"}>  <li>Chairs</li></Link>
           <Link  href={"/productlist"}> <li>Crockery</li></Link>
             <Link href={"/shoppingbasket"}><li>Tableware</li></Link>
            <Link href={"/"}><li>Cutlery</li></Link>
                   
                    </ul>
                    
                    
            </nav>
      </section>
    </>
  )
}

export default Navbar
