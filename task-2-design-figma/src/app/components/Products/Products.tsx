import React from 'react'
import Image from 'next/image'
import ProductA from '../../../../public/producta.png'
import ProductB from '../../../../public/productb.png'
import ProductC from '../../../../public/productc.png'

const Products = () => {
  return (
    <>
      <div className='promotion-container text-center my-8'>
        <p className='promotion-p text-blue-500 font-bold text-lg'>Products</p>
        <h2 className='promotion-h2 text-3xl font-bold'>Check what we have</h2>
      </div>

      <div className='flex justify-evenly mb-8'>
        <div><Image className='h-[350px] w-full' src={ProductA}  alt="Promotional Image"/></div>
        <div><Image className='h-[350px] w-full' src={ProductB}  alt="Promotional Image"/></div>
        <div><Image className='h-[350px] w-full' src={ProductC}  alt="Promotional Image"/></div>
      </div>

    </>
  )
}

export default Products
