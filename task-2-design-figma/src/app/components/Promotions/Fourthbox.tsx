import React from 'react'
import Image from 'next/image'
import male2promotional from "../../../../public/m2prom.png"

const FourthBox = () => {
  return (
    <>
    <div className='fourth-box row-span-2 h-full w-full flex flex-col justify-start'>
    <div className='ml-3 mt-4 text-sm font-medium'><h3 >Flex Push Button Bomber</h3></div>
      <div className='ml-3 flex gap-x-4'><del className='font-medium'>$225</del><h2 className='font-bold'>$190</h2></div>
      <div><Image
        className=''
          src={male2promotional}
          alt="Promotional Image"
        />
        </div>
    </div>
    </>
  )
}

export default FourthBox
