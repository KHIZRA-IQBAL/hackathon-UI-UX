import React from 'react'
import Navbar from '../navbar'
import Image from "next/image";
import Footer from '../footer';


const Shoppingbasket = () => {
  return (
    <>
    <section className='w-full'>
    <Navbar/>
      {/* Maindiv */}
      <div className='w-full h-[749px]'>
                 <h1 className='pt-[64px] pl-[188px] pr-[942px] pb-[48px]'>
                 Your shopping cart
                 </h1>

                 <div className='flex '>
                    <p className='pl-[188px] pb-[12px] pr-[595px]'>Product</p>
                    <p className=' pb-[12px] '>Quantity</p>
                    <p className=' pb-[12px] ml-[317px] pr-[194px]'>Total</p>
                 </div> 
                 {/* Line */}
               <div className='border-[1px] border-gray mx-[188px] mr-[100px] my-[20px]'></div>
                

               <div className='flex'>
                <div className='mt-[20px] ml-[188px] mr-[341px] flex'>
                <Image src={"/Product.png"} alt="product" width={109} height={134}></Image>
                <div className='flex flex-col ml-[21px] '>
                    <h1 className='pt-[12px]'>Graystone vase</h1>
                    <p className='pt-[8px]'>A timeless ceramic vase with <br />
                    a tri color grey glaze.</p>
                    <p className='pt-[8px]'>£85</p>
                </div>
                </div>
                 <p className='mt-[32px] mb-[108px] mr-[252px]'>1</p>
                 <p className='mr-[195px] mb-[128px] mt-[32px]'>£85</p>
               </div>

               <div className='flex'>
                <div className='mt-[20px] ml-[188px] mr-[341px] flex'>
                <Image src={"/Product1.png"} alt="product" width={109} height={134}></Image>
                <div className='flex flex-col ml-[21px] '>
                    <h1 className='pt-[12px]'>Basic white vase</h1>
                    <p className='pt-[8px]'> 
                    Beautiful and simple this is <br />
                    one for the classics
                    </p>
                    <p className='pt-[8px]'>£85</p>
                </div>
                </div>
                 <p className='mt-[32px] mb-[108px] mr-[252px]'>1</p>
                 <p className='mr-[195px] mb-[128px] mt-[32px]'>£125</p>
               </div>

               {/* Line */}
               <div className='border-[1px] border-gray mx-[188px] mr-[100px] my-[20px]'></div>

               {/* anotherdiv */}
               <div className='flex  flex-col ml-[970px] mr-[188px]  mt-[28px] mb-[8px]  h-[100px] w-[300px]'>
                    <Image src={"/Pricing-information.png"} alt="Group4" width={282} height={67} className={"mt-[20px]"}></Image>
               </div>
               <button className='py-[12px] px-[20px] ml-[1090px] bg-[#2A224C]  text-white mb-[48px]'>Go to Checkout</button>
               <div>
               <Footer/>
               </div>
      </div>
  


    </section>
    </>
  )
}

export default Shoppingbasket;
