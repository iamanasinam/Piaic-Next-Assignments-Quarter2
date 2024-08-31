import React from 'react'
import Image from 'next/image'
import firstboxgirl from "../../../../public/promotional.png"

const Firstbox = () => {
  return (
    <>
      {/* first box */}
    <div className='first-box col-span-4 h-[150px] w-full flex justify-evenly'>
      <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-xl '>GET UP TO <span className='font-bold text-3xl'>60%</span></h1>
        <p className='text-sm'>For the summer season</p>
      </div>
      <div>
        <Image className='first-box-girl-image' src={firstboxgirl} alt="Girl Promotional Image"/>
      </div>
    </div>
    </>
  )
}

export default Firstbox
