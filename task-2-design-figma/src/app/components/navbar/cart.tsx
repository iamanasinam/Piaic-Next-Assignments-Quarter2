import React from 'react';
import './Navbar.css';

const Cart = () => {
  return (
    <div className="navbar-cart-container">
      <svg className="navbar-cart-icon" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.3091 1.83333H0.916748V3.66667H3.86695L6.40501 15.2878H6.41675V15.5833H18.3334V15.3559L20.3438 6.50004L20.6533 5.5H6.10068L5.57786 3.10614L5.3091 1.83333ZM18.3214 7.33333H6.50108L7.90249 13.75H16.8647L18.3214 7.33333Z" fill="black"/>
        <path d="M9.16659 20.1667C10.1791 20.1667 10.9999 19.3459 10.9999 18.3333C10.9999 17.3208 10.1791 16.5 9.16659 16.5C8.15406 16.5 7.33325 17.3208 7.33325 18.3333C7.33325 19.3459 8.15406 20.1667 9.16659 20.1667Z" fill="black"/>
        <path d="M17.4167 18.3333C17.4167 19.3459 16.5959 20.1667 15.5833 20.1667C14.5708 20.1667 13.75 19.3459 13.75 18.3333C13.75 17.3208 14.5708 16.5 15.5833 16.5C16.5959 16.5 17.4167 17.3208 17.4167 18.3333Z" fill="black"/>
      </svg>

      <div className="navbar-cart-count">0</div>
    </div>
  );
}

export default Cart;
