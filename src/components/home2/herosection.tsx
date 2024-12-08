import React from 'react'
import Image from 'next/image'
import { Box } from '@/constant/boxdiv'
import { Productpic } from '@/constant/product'
import Footer from '../footer'


const Herosection = () => {
  return (
    <>
      <section className='w-full'>
           <Image src={"/Container2.png"} alt="Hero" width={1440} height={704} className="w-full"></Image>
           <div className='w-full h-[467px]'>
                <h1 className='mt-[80px] ml-[529px] mr-[545px] mb-[36px] text-[18px] '>What makes our brand different</h1>
           
                {/* four box */}
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

                      {/* Productpic */}
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

                    <div className=' w-[170px] h-[56px] mx-[635px] bg-[#c4baba]'> <button className='w-[170px] h-[56px] '>View  collection</button></div>

                    <div className='w-full  h-[598px] flex py-[80px] px-[60px]  '>
                    <div className='w-[634px] h-[478px] pl-[64px] pt-[64px] pr-[75px] bg-[#2A254B] text-white'>
                              <h1 className='mb-[12px]'>It started with a small idea</h1>
                              <p className='mb-[205px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                              <button className=' mb-[54px] mr-[400px] bg-[#4E4D93] h-[56px] w-[170px]'>
                          View collection
                    </button>
                    </div>

                    <div  className='w-[100%] h-[598px] '>
                       <Image src={"/block.png"} alt='image' width={634} height={598}></Image>
                    </div>
                   
                </div>

                <div className='w-full h-[444px]'>
                  <Image src={"/Email-sign-up.png"} alt='email-from' width={1440} height={444}>
                  </Image>
                </div>
              

                <div className='w-full h-[380px]'>
             <Footer/>
             </div>


                </div>
               

               
           
      </section>
    </>
  )
}

export default Herosection
