import React from 'react'
import { AiOutlineSetting } from "react-icons/ai";

const PriceHeader = ({title, price1title, price2title}) => {
  return (
    <div className="px-4 sm:px-8 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 items-center text-base sm:text-lg lg:text-xl bg-primary min-h-[60px] text-slate-100 py-4 lg:py-7">
    <div className="col-span-1 md:col-span-2 flex gap-2 items-center">
      <span className='text-2xl sm:text-3xl lg:text-5xl'><AiOutlineSetting /></span>
      <span className='text-lg sm:text-xl lg:text-3xl font-extrabold uppercase'>{title}</span>
    </div>
    <div className="col-span-1 text-sm sm:text-base lg:text-2xl font-extrabold uppercase px-0 lg:px-3">{price1title}</div>
    <div className="col-span-1 text-sm sm:text-base lg:text-2xl font-extrabold uppercase pl-0 lg:pl-14"> {price2title}</div>
  </div>
  )
}

export default PriceHeader