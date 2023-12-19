import Image from 'next/image'
import React from 'react'

const AreaLawCard = ({props}) => {
  return (
    <div className='bg-white my-4 md:my-8 shadow-md hover:shadow-2xl [&>*:nth-child(1)]:hover:bg-secondary  mx-auto w-80 h-64 md:h-80 md:min-w-[300px] flex justify-center items-center flex-col gap-10'>
          <div className="w-20 h-20 flex justify-center items-center border-2 border-primary rounded-full">
         <img src={props?.url} alt="image"/>
        </div>
        <p className='text-2xl text-center font-bold uppercase'> {props?.text}</p>
    </div>
  )
}

export default AreaLawCard