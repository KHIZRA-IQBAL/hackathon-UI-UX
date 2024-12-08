import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const Navbarproduct = () => {
  return (
    <>
     <div className='w-full h-[121px]'>
        {/* top div */}
        <div  className='w-[100%] h-[41px] bg-[#2A254B] text-white flex  items-center py-[11px]  justify-between'>
             <p  className='pl-[410px]'>Free delivery on all orders over £50 with code easter checkout</p>
              <div className='pr-[8px]'><RxCross2 size={24}/></div>
        </div>

        {/* bottom div */}
        <div className='h-[80px] w-[100%] flex py-[29px] justify-between items-center '>
        <h1 className='text-2xl  pl-[60px] mr-[100px]'>Avion</h1>
                <ul className='flex gap-6 text-[16px] '>

             <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
             <li>Tableware</li>
             <li>Cutlery</li>
                   
                    </ul>

                    <div className='flex mr-[80px] gap-2'>
                   <CiSearch/>
                   <FiShoppingCart/>
                   <Image src={"/user.png"} alt="User" width={16} height={16}></Image>
                    </div>
        </div>
     </div>
    </>
  )
}

export default Navbarproduct
