import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className='w-[100%]  xsm:overflow-x-hidden md:w-[100%]
        h-[704px]
        xsm:h-[250px]
        md:h-[704px] '>
         <div className='
          w-[100%] xsm:overflow-x-hidden md:w-[100%]
         py-[60px] xsm:py-0 md:py-[60px]
         px-[80px] xsm:px-0 md:px-[80px]
         h-[100%] xsm:h-[250px] md:h-[704px]
          '>
            <Image src={"/Container.png"} alt="Hero" width={1440} height={704}></Image>
         </div>
      </section>
    </>
  )
}

export default Hero
