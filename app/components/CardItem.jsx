'use client'
import Image from 'next/image'
import React from 'react'
//import oneicon from '/../public/images/1.svg'

const CardItem = ({props}) => {
  console.log(props)
  const url=props?.url
  const title=props?.title
  const content=props?.content
  return (
<div className="flex flex-col items-center justify-center gap-8 border-2 bg-slate-50 h-72 w-64 p-9 md:w-1/4 md:mx-auto">
      <div className='hover:rotate-45 '>  <Image
      priority
          src={url}
          height={18}
          width={18}
          alt="Follow us on Twitter"
        /></div>
      <h1 className='text-base text-center font-bold uppercase'>{title}</h1>
      <p className='text-center'>
       {content}
      </p>
    </div>
    
  )
}

export default CardItem