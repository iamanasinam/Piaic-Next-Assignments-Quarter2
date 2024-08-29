import React from 'react';
import NavbarLogoComponent from './logo';
import List from './list';
import Input from './Input';
import Cart from './cart';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <NavbarLogoComponent />
      <List />
      <Input />
      <Cart />
    </div>
  )
}

export default Navbar;
