import React from 'react'
import { AiOutlineSetting } from "react-icons/ai";

const PriceHeader = ({title, price1title, price2title}) => {
  return (
    <div className="px-24   grid grid-cols-4 items-center text-xl bg-primary min-h-[60px] text-slate-100">
    <div className="col-span-2 flex  gap-2 items-center justify-centergap-2 py-7">
      <span className='text-5xl'><AiOutlineSetting /></span>
      <span className='text-3xl font-extrabold uppercase'>{title}</span>
    </div>
    <div className="col-span-1 text-2xl font-extrabold uppercase">{price1title}</div>
    <div className="col-span-1 text-2xl font-extrabold uppercase  "> {price2title}</div>
  </div>
  )
}

export default PriceHeader