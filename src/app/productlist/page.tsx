import Navbarproduct from '@/components/productlisting/navbar';
import Productlisting from '@/components/productlisting/productlist';
import React from 'react'


const Product = () => {
  return (
    <>
    <section  className='w-full xsm:overflow-x-hidden md:w-full'>
    <Navbarproduct/>
    <Productlisting/>
    </section>
    </>
  )
}

export default Product;