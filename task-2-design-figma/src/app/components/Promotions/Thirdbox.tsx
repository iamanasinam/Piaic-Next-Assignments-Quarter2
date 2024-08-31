import React from 'react'
import Image from 'next/image'
import male1promotional from "../../../../public/m1prom.png"

const Thirdbox = () => {
  return (
    <>
    <div className='third-box row-span-2 h-full w-full flex flex-col'>
      <div className='ml-3 mt-4 text-sm font-medium'><h3 >Flex Sweatshirt</h3></div>
      <div className='ml-3 flex gap-x-4'><del className='font-medium'>$1000</del><h2 className='font-bold'>$750</h2></div>
      <div>
        <Image
        className=''
          src={male1promotional}
          alt="Promotional Image"
        />
        </div>
      
    </div>
    </>
  )
}

export default Thirdbox
