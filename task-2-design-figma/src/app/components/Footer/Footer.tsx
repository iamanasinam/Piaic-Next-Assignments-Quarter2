import React from 'react'
import Image from 'next/image'
import footerlogo from "../../../../public/navbarlogo.png"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-4'>

      {/* 1st */}
      <div className='flex flex-col mb-10 mt-6 ml-32 mr-10'>
        <div>
          <Image src={footerlogo} alt='logo image'/>
        </div>
        <div className='font-light text-sm mt-10'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
        <div className='flex mt-10 '>
          <div className='px-2 py-2 bg-gray-400 mr-4 border rounded'>
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2.59043C19.2642 2.91709 18.4733 3.13709 17.6433 3.23626C18.49 2.72876 19.1408 1.92459 19.4475 0.96626C18.655 1.43709 17.7767 1.77793 16.8417 1.96293C16.0933 1.16459 15.0267 0.66626 13.8467 0.66626C11.5808 0.66626 9.74333 2.50376 9.74333 4.76959C9.74333 5.09126 9.78 5.40459 9.85 5.70459C6.44 5.53376 3.41583 3.90043 1.3925 1.41709C1.03917 2.02376 0.836667 2.72793 0.836667 3.48043C0.836667 4.90376 1.56083 6.16043 2.6625 6.89626C1.99 6.87376 1.35667 6.68959 0.803333 6.38293V6.43376C0.803333 8.42209 2.2175 10.0804 4.095 10.4571C3.75083 10.5521 3.3875 10.6013 3.01417 10.6013C2.74917 10.6013 2.4925 10.5754 2.24167 10.5279C2.76417 12.1579 4.27917 13.3446 6.075 13.3779C4.67 14.4779 2.90083 15.1338 0.979167 15.1338C0.6475 15.1338 0.320833 15.1146 0 15.0771C1.81583 16.2404 3.9725 16.9204 6.29 16.9204C13.8375 16.9204 17.9642 10.6679 17.9642 5.24543C17.9642 5.06793 17.96 4.89126 17.9525 4.71543C18.7542 4.13626 19.45 3.41376 20 2.59043Z" fill="black"/>
            </svg>
          </div>
        <div className='px-2 py-2 bg-gray-400 mr-4 border rounded'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28745 18.3334V10.9715H5.8335V7.9041H8.28745V5.45014C8.28745 2.91459 9.89295 1.66675 12.1549 1.66675C13.2383 1.66675 14.1696 1.74773 14.4408 1.78331V4.43359L12.8721 4.4342C11.642 4.4342 11.3549 5.01885 11.3549 5.87651V7.9041H14.4223L13.8089 10.9715H11.3549L11.404 18.3334" fill="black"/>
          </svg>
        </div>
        <div className='px-2 py-2 bg-gray-400 border rounded'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_170)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3638 18.3334H14.9039V12.9198C14.9039 11.6287 14.882 9.968 13.1062 9.968C11.3062 9.968 11.0314 11.375 11.0314 12.8272V18.3334H7.57514V7.20068H10.8921V8.72285H10.9395C11.401 7.84731 12.5295 6.92438 14.2128 6.92438C17.7164 6.92438 18.3638 9.22952 18.3638 12.2279V18.3334ZM3.6742 5.67996C2.56246 5.67996 1.6665 4.78109 1.6665 3.67299C1.6665 2.56562 2.56246 1.66675 3.6742 1.66675C4.78084 1.66675 5.67971 2.56562 5.67971 3.67299C5.67971 4.78109 4.78084 5.67996 3.6742 5.67996ZM5.40488 18.3334H1.94134V7.20068H5.40488V18.3334Z" fill="black"/></g>
          <defs><clipPath id="clip0_1_170"><rect width="20" height="20" fill="white"/></clipPath></defs>
          </svg>
        </div>
        </div>
      </div>

      {/* 2nd */}
      <div className='flex flex-col mb-10 mt-6 ml-24'>
        <a href="" className='mhding font-bold'>Company</a>
        <a href="" className='lhding my-6'>About</a>
        <a href="" className='lhding mb-6'>Terms of Use</a>
        <a href="" className='lhding mb-6'>Privacy Policy</a>
        <a href="" className='lhding mb-6'>How it Works</a>
        <a href="" className='lhding mb-6'>Contact Us</a>
      </div>


      {/* 3rd */}
      <div className='flex flex-col mb-10 mt-6 ml-10'>
        <a href="" className='mhding font-bold'>Support</a>
        <a href="" className='lhding my-6'>Support Carrer</a>
        <a href="" className='lhding mb-6'>Support 24h</a>
        <a href="" className='lhding'>Quick Chat</a>
      </div>

      {/* 4th */}
      <div className='flex flex-col mb-20 mt-6 ml-10'>
        <a href="" className='mhding font-bold'>Contact</a>
        <a href="" className='lhding my-6'>Whatsapp</a>
        <a href="" className='lhding'>Support 24h</a>
      </div>
    </div>


    <hr/>
    <div className='flex justify-evenly'>
      <div className='ennd'>Copyright © 2022 Dine Market</div>
      <div className='flex'><p className='ennd'>Design by. </p><span className='font-bold ml-2'> Weird Design Studio</span></div>
      <div className='flex'><p className='ennd'>Code by. </p><span className='font-bold ml-2'> Muhammad Anas Inam</span></div>
    </div>
    </>
  )
}

export default Footer
