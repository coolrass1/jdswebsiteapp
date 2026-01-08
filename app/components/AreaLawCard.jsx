import Image from 'next/image'
import React from 'react'

const AreaLawCard = ({props}) => {
  return (
    <div className='bg-white my-4 md:my-8 shadow-md hover:shadow-2xl transition-shadow [&>*:nth-child(1)]:hover:bg-secondary mx-auto w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] h-56 sm:h-64 md:h-80 flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10 px-4'>
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex justify-center items-center border-2 border-primary rounded-full transition-colors">
         <Image  src={props?.url} alt="image" width={30} height={30} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
        </div>
      
        <p className='text-lg sm:text-xl md:text-2xl text-center font-bold uppercase leading-tight'>{props?.text}</p>
    </div>
  )
}

export default AreaLawCard