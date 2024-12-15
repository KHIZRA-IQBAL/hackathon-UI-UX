import Navbarproduct from '@/components/productlisting/navbar';
import Productlisting from '@/components/productlisting/productlist';
import React from 'react'


const Product = async({params}:{params: Promise<{id:number}>}) => {
  const {id} = await params
  return (
    <>
    <section  className='w-full xsm:overflow-x-hidden md:w-full'>
    <Navbarproduct/>
    <Productlisting cardid={id}/>
    </section>
    </>
  )
}

export default Product;