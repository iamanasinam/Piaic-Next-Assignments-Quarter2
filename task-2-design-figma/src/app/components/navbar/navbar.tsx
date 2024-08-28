import React from 'react'
import Image from 'next/image';
import navbarlogo from './../../../../public/navbarlogo.png';
import navbarshoplogo from './../../../../public/navbarshoplogo.jpg'

const Navbar = () => {
  return (
    <div className=' flex mx-10 my-5 justify-between'>
      <div className='bg-none'>
        <Image
        className='bg-none'
        src={navbarlogo}
        alt="Navbar logo"
        width={140}        // Set the desired width
        height={25}       // Set the desired height
      />
      </div>
      <div className=''>
        <ul className='bg-yellow-500 flex justify-center gap-x-8'>
            <li>Female</li>
            <li>Male</li>
            <li>Kids</li>
            <li>All Products</li>
        </ul>
      </div>
      <div className='bg-pink-700 border-2 w-[180]'>
        <input type="text" placeholder='what are you looking for'/>
      </div>
      <div className='bg-orange-600'>
      <Image
        src={navbarshoplogo}
        alt="Navbar Shop logo button"
        width={22}        // Set the desired width
        height={22}       // Set the desired height
      />
      </div>
    </div>
  )
}

export default Navbar