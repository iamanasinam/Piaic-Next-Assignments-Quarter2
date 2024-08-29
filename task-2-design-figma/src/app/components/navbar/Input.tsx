import React from 'react';
import './Navbar.css';

const Input = () => {
  return (
    <div className="navbar-input-container">
        <div className="navbar-input-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6595 13.6712C12.947 13.9679 13.3907 13.5099 13.1032 13.2195L10.7595 10.7936C11.5532 9.88394 12.0345 8.6839 12.0345 7.36772C12.0345 4.53537 9.80322 2.23206 7.05947 2.23206C4.31572 2.23206 2.08447 4.53537 2.08447 7.36772C2.08447 10.2001 4.31572 12.5034 7.05947 12.5034C8.29697 12.5034 9.44072 12.0324 10.3157 11.2517L12.6595 13.6712ZM2.70885 7.36772C2.70885 4.89022 4.6651 2.87724 7.05885 2.87724C9.45885 2.87724 11.4088 4.89022 11.4088 7.36772C11.4088 9.84522 9.45885 11.8582 7.05885 11.8582C4.6651 11.8582 2.70885 9.84522 2.70885 7.36772Z" fill="black"/>
          </svg>
        </div>
        <input
          className='navbar-input-field'
          type="text"
          placeholder='What are you looking for'
        />
      </div>
  )
}

export default Input;
