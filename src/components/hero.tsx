import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className='   h-[704px] w-full '>
         <div className='  px-[80px] py-[60px] h-[100%]'>
            <Image src={"/Container.png"} alt="Hero" width={1440} height={704}></Image>
         </div>
      </section>
    </>
  )
}

export default Hero
