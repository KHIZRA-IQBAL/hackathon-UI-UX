import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import { Box } from "@/constant/boxdiv"
import { Productpic } from '@/constant/product'
import Image from 'next/image'
import React from 'react'

const Home1 = () => {
  return (
    <>
      <section className='w-full'>
         <Navbar/>
         <Hero/>
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
                                 <h1 className='p-[48px] text-3xl'>New ceramics</h1>
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

                    <div className='w-full px-[80px] mt-[64px] mr-[1030px] '>
                        <h1 className='mb-[25px] text-2xl'>Our popular products</h1>
                        <div className='flex gap-[20px]'>
                            <div className='w-[630px] h-[462px]'>
                                <Image src={"/Large.png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='mb-[8px]'>The Poplar suede sofa</p>
                                <p> £980</p>
                            </div>
                            <div className='w-[305px] h-[462px]'>
                                <Image src={"/Photo1.png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='mb-[8px]'>The Dandy chair</p>
                                <p> £250</p>
                            </div>
                            <div className='w-[305px] h-[462px]'>
                                <Image src={"/Parent (1).png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='mb-[8px]'>The Dandy chair</p>
                               <p> £250</p>
                            </div>

                        </div>
                    </div>


                    <div className='pt-[52px] pl-[93px] pr-[74px] pb-[65px] '>
                       <Image src={"/Container (1).png"} alt="delivery" width={1440} height={704}></Image>
                    </div>
    
                    <div className='w-full  h-[598px] flex py-[80px] px-[60px]  '>
                    <div className='w-[634px] h-[478px] pl-[64px] pt-[64px] pr-[75px] '>
                              <h1 className='mb-[12px] font-semibold'>From a studio in London to a global brand with <br />
                              over 400 outlets</h1>
                              <p className='mb-[100px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                                <br />
                                <br />
                                <br />
                                 Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                              <button className=' mb-[54px] mr-[400px]  h-[56px] w-[170px] bg-[#c4baba]'>
                          View collection
                    </button>
                    </div>

                    <div  className='w-[100%] h-[598px] '>
                       <Image src={"/block.png"} alt='image' width={634} height={598}></Image>
                    </div>
                   
                </div>
                <Footer/>
      </section>
    </>
  )
}

export default Home1

