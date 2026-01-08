'use client'
import Image from 'next/image'
import React from 'react'

const CardItem = ({props}) => {
  console.log(props)
  const url=props?.url
  const title=props?.title
  const content=props?.content
  return (
<div className="flex flex-col items-center justify-center gap-6 sm:gap-8 border-2 bg-slate-50 min-h-[280px] w-full max-w-[320px] p-6 sm:p-9 md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] mx-auto hover:shadow-lg transition-shadow">
      <div className='hover:rotate-45 transition-transform duration-300'>  <Image
      priority
          src={url}
          height={18}
          width={18}
          alt="Follow us on Twitter"
          className="w-12 h-12 sm:w-16 sm:h-16"
        /></div>
      <h1 className='text-sm sm:text-base text-center font-bold uppercase'>{title}</h1>
      <p className='text-xs sm:text-sm text-center leading-relaxed'>
       {content}
      </p>
    </div>
    
  )
}

export default CardItem