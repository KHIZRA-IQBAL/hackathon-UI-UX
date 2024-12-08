import React from 'react'
import Image from 'next/image'
import { Productpic } from '@/constant/product'
import { Box } from '@/constant/boxdiv'
import Footer from '../footer'



const Productlisting = () => {
  return (
    <>
     <section className='w-full'>
         <div className='flex'>
          <Image src={"/chair.png"} alt="product" width={721} height={759}></Image>
          <div className='my-[51px] ml-[62px] mr-[55px]'>
             <h1 className='mb-[13px] text-2xl'>The Dandy Chair</h1>
             <p className='mb-[54px]'>£250</p>
             <h1>Description</h1>
            <p className='mb-[20px]'>A timeless design, with premium materials features as one of our most <br /> popular and iconic pieces. The dandy chair is perfect for any stylish <br />living space with beech legs and lambskin leather upholstery.</p>
              <ul className='mb-[30px]'>
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
              <div className='pt-[20px] pr-[321px] pb-[15px]'>
                           <h1 className='mb-[28px]'>Dimensions</h1>
                         <div className='flex flex-col gap-[12px] mb-[22px]'>
                         <div className='flex gap-[57px]'>
                               <p>Height</p>
                               <p>Width</p>
                               <p>Depth</p>
                           </div>
                           <div className='flex gap-[57px]'>
                               <p>110cm</p>
                               <p>75cm</p>
                               <p>50cm</p>
                           </div>
                         </div>


                         <div className='flex gap-[22px]  items-center'>
                              <h1>Amount</h1>
                              <button className='px-[56px] py-[12px]  bg-slate-300'>1</button>

                              <button className='py-[10px] px-[32px] w-[165px] h-[56px] bg-[#4E4D93] text-white ml-[170px]'>Add to cart</button>
                         </div>



                         
                           

              </div>

          </div>
           
         </div>

         <div className='w-full'>
         <h1 className='p-[48px] text-3xl'>You might also like</h1>
                            <div className='w-full grid grid-cols-4 gap-[20px] '>
                              
                        {/* child */}
                     {Productpic.map((item,index)=>{
                              return(
                                <div className='w-[305px] h-[462px] p-[48px]'  key={index}>
                                  <Image src={item.src} alt="delivery" width={305} height={462}></Image>
                                  <h1 className=' mt-[24px] mb-[12px]  text-[19px]'>{item.heading}</h1>
                                  <p>{item.price}</p>
                                </div>
                              )
                            })}
                     </div>
         </div>
         <div className=' w-[170px] h-[56px] mx-[635px] bg-[#c4baba]'> <button className='w-[170px] h-[56px] '>View  collection</button> </div>
         <h1 className='text-center  pt-[60px] text-2xl'>What makes our brand different</h1>
         <div className='grid grid-cols-4 gap-[18px] mb-[82px]  w-full '>
               {Box.map((item,index)=>{
                              return(
                                <div className='w-[305px] h-[244px] p-[48px]'  key={index}>
                                  <Image src={item.src} alt="delivery" width={48} height={48}></Image>
                                  <h1 className=' mt-[24px] mb-[12px]  text-[19px]'>{item.heading}</h1>
                                  <p>{item.paragraph}</p>
                                </div>
                              )
                            })}
                            </div>


                            
                    <div className='pt-[52px] pl-[93px] pr-[74px] pb-[65px] '>
                       <Image src={"/Container (1).png"} alt="delivery" width={1440} height={704}></Image>
                    </div>

                    <Footer/>
     </section>
          
      
    </>
  )
}

export default Productlisting