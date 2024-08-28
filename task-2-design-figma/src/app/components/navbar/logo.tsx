import React from 'react'
import Image from 'next/image';
import navbarlogo from './../../../../public/navbarlogo.png';

const NavbarLogoComponent = () => {
  return (
      <Image
        className=''
        src={navbarlogo}
        alt="Navbar logo"
        width={140}
        height={25}
      />
  )
}

export default NavbarLogoComponent