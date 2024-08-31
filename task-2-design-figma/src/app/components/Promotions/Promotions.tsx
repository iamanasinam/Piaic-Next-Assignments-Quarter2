import React from 'react'
import "./Promotions.css"
import male2promotional from "../../../../public/m2prom.png"
import PromotionHeading from './PromotionHeading'
import Firstbox from './Firstbox'
import Secondbox from './Secondbox'
import Thirdbox from './Thirdbox'
import FourthBox from './Fourthbox'

const Promotions = () => {
  return (
    <>
      <PromotionHeading />
      <div className='mx-12 grid grid-cols-6 grid-rows-2 gap-2 font-sora'>
      <Firstbox />
      <Thirdbox />
      <FourthBox />
      <Secondbox />
      </div>
    </>
  )
}

export default Promotions