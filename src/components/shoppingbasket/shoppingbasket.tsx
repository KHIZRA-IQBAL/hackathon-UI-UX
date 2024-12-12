import React from 'react'
import Navbar from '../navbar'
import Image from "next/image";
import Footer from '../footer';


const Shoppingbasket = () => {
  return (
    <>
   <section className="w-full xsm:overflow-x-hidden md:w-full">
  <Navbar />
  {/* Maindiv */}
  <div className="w-full h-auto md:h-[749px]">
    <h1 className="xsm:pt-[64px] text-2xl pl-[20px] md:pl-[188px] pr-[20px] md:pr-[188px] pb-[48px] md:pb-[50px]">
      Your shopping cart
    </h1>

    {/* Table Header */}
    <div className="flex items-center space-x-4 xsm:hidden md:flex md:space-x-10 md:pl-[188px] md:pr-[188px] ">
      <p className="w-[40%]">Product</p>
      <p className="w-[20%]">Quantity</p>
      <p className="w-[30%] pl-[120px] xsm:pl-0 md:pl-[120px]">Total</p>
    </div>

    {/* Line */}
    <div className="border-[1px] border-gray mx-[20px] md:mx-[188px] my-[20px] hidden md:block"></div>

    {/* Product 1 */}
    <div className="flex flex-col md:flex-row items-center justify-between md:items-center md:ml-[188px] md:mr-[341px] mb-8">
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <Image src={"/Product.png"} alt="product" width={109} height={134} className='xsm:w-full md:w-[109px]' />
        <div className="flex flex-col ml-4">
          <h1 className="pt-2">Graystone vase</h1>
          <p className="pt-2">A timeless ceramic vase with <br /> a tri color grey glaze.</p>
          <p className="pt-2">£85</p>
        </div>
      </div>
      <div className="xsm:flex items-center space-y-2 md:space-y-0 md:flex-row">
        <p className="xsm:mt-0  md:mt-0 
         pr-[320px]   xsm:pr-[70px] md:pr-[320px]
         ">1</p>
        <p className="xsm:mt-0 md:mt-0">£85</p>
      </div>
    </div>

    {/* Product 2 */}
    <div className="flex flex-col md:flex-row items-center justify-between md:ml-[188px] md:mr-[341px] mb-8">
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <Image src={"/Product1.png"} alt="product" width={109} height={134} className='xsm:w-full md:w-[109px]'/>
        <div className="flex flex-col ml-4">
          <h1 className="pt-2">Basic white vase</h1>
          <p className="pt-2">Beautiful and simple this is <br /> one for the classics</p>
          <p className="pt-2">£85</p>
        </div>
      </div>
      <div className="xsm:flex  items-center space-y-2 md:space-y-0 md:flex-row">
      <p className="xsm:mt-0  md:mt-0 
         pr-[320px]   xsm:pr-[70px] md:pr-[320px]
         ">1</p>
        <p className="xsm:mt-0 md:mt-0">£85</p>
      </div>
    </div>

    {/* Line */}
    <div className="border-[1px] border-gray mx-[20px] md:mx-[188px] my-[20px] hidden md:block"></div>

    {/* Pricing Information */}
    <div className="flex flex-col ml-[20px] md:ml-[970px] mr-[20px] md:mr-[188px] mt-[28px] mb-[8px] h-[100px] w-[300px]">
      <Image
        src={"/Pricing-information.png"}
        alt="Group4"
        width={282}
        height={67}
        className="mt-[20px]"
      />
    </div>

    {/* Checkout Button */}
    <button className="xsm:py-[10px] px-[30px] bg-[#2A224C] text-white mb-[48px] mx-[20px] md:mx-[1090px]
    md:py-[0px] md:px-[50px]">
      Go to Checkout
    </button>
  </div>

  <Footer />
</section>

    </>
  )
}

export default Shoppingbasket;
