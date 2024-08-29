import React from 'react'
import NavbarLogoComponent from './logo';
import List from './list';
import Input from './Input';
import Cart from './cart';


const Navbar = () => {
  return (
    <div className='flex mx-11 my-5 justify-between w-[1264px]'>
      <NavbarLogoComponent/>
      <List />
      <Input />
      <Cart />
    </div>
  )
}

export default Navbar