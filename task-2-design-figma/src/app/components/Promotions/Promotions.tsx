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

      <div className='mx-12 grid grid-cols-5 grid-rows-3 gap-x-4 gap-y-3'>

      <div className='p-first col-span-3 h-[150px] w-full flex items-center justify-center'>
      <div>
        <div className='first-p-align'>
          <h3 className='promotion-1st-box-p1 bold-text'>GET UP TO <span className='promotion-1st-box-p2'>60%</span></h3>
        </div>
        <p className='promotion-1st-box-p3'>For the summer season</p>
      </div>
      <div>
        <Image
          className='girl-image'
          src={girlpromotional}
          alt="Promotional Image"
        />
      </div>
    </div>
        
<div className='p-2nd col-span-1 row-span-2 h-[350px] w-full flex flex-col justify-start'>
  <div className='box3rd my-6 mx-4'>
      <h3 className='box3rd-heading'>Flex Sweatshirt</h3>
      <div className='flex items-center gap-2'>
        <div className='thousand'><del>$1000</del></div>
        <div className='s750'><h2>$750</h2></div>
      </div>
    </div>
    <div className='male1-image mt-auto'>
      <Image
      className='actual-image'
        src={male1promotional}
        alt="Promotional Image"
        // width={240}
        // height={25}
      />
    </div>
</div>


        <div className='p-3rd col-span-1 row-span-2 h-full w-full flex items-center justify-center'>
        <div>
            <h3>GET UP TO <span>60%</span> </h3>
            <p>For the summer season</p>
            </div>
            <div>
              <div>
          <Image
        className=''
        src={male2promotional}
        alt="Navbar logo"
        width={140}
        height={25}
      />
      </div>
          </div>
        </div>

        <div className='p-4th col-span-3 h-[150px] w-full flex items-center justify-center'>
        <div className='last-banner'>
            <h3 className='last-para'>GET 30% Off</h3>
            <p className='use-promo'>USE PROMO CODE</p>
            <div className='dine'>DINEWEEKENDSALE</div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Promotions
