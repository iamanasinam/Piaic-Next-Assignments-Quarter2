import React from 'react';
import Image from 'next/image';
import navbarlogo from './../../../../public/navbarlogo.png';
import './Navbar.css';

const NavbarLogoComponent = () => {
  return (
      <Image
        className='navbar-logo'
        src={navbarlogo}
        alt="Navbar logo"
        width={140}
        height={25}
      />
  )
}

export default NavbarLogoComponent;
