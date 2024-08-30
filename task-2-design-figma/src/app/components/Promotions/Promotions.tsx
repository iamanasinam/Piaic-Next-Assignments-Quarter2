import React from 'react'
import "./Promotions.css"  // Assuming you still need some custom CSS
import Image from 'next/image'
import girlpromotional from "../../../../public/promotional.png"
import male1promotional from "../../../../public/m1prom.png"
import male2promotional from "../../../../public/m2prom.png"

const Promotions = () => {
  return (
    <>
      <div className='promotion-container text-center my-8'>
        <p className='promotion-p text-blue-500 font-bold text-lg'>Promotions</p>
        <h2 className='promotion-h2 text-3xl font-bold'>Our Promotions Events</h2>
      </div>

      <div className='mx-12 grid grid-cols-5 grid-rows-3 gap-4'>

        <div className='p-first col-span-3 h-[136px] w-full flex items-center justify-center'>
          <div>
            <h3>GET UP TO <span>60%</span> </h3>
            <p>For the summer season</p>
            </div>
          <div>
          <Image
        className='n'
        src={girlpromotional}
        alt="Navbar logo"
        width={140}
        height={25}
      />
          </div>
        </div>
        
        <div className='p-2nd col-span-1 row-span-2 h-full w-full flex items-center justify-center'>
        <div>
            <h3>GET UP TO <span>60%</span> </h3>
            <p>For the summer season</p>
            </div>
            <div>
          <Image
        className='n'
        src={male1promotional}
        alt="Navbar logo"
        width={140}
        height={25}
      />
          </div>
        </div>

        <div className='p-3rd col-span-1 row-span-2 h-full w-full flex items-center justify-center'>
        <div>
            <h3>GET UP TO <span>60%</span> </h3>
            <p>For the summer season</p>
            </div>
            <div>
          <Image
        className='n'
        src={male2promotional}
        alt="Navbar logo"
        width={140}
        height={25}
      />
          </div>
        </div>

        <div className='p-4th col-span-3 h-[136px] w-full flex items-center justify-center'>
        <div>
            <h3>GET UP TO <span>60%</span> </h3>
            <p>For the summer season</p>
            </div>
        </div>

      </div>
    </>
  )
}

export default Promotions
