import React from 'react'

import Image from 'next/image'
import SocialLogo1 from './SocialLogo1'

const TeamCard = ({props}) => {
  return (
    <article className='px-2 pt-4 hover:scale-105 transition-all w-full max-w-[350px] sm:w-[320px] md:w-[350px] border-2 shadow-xl my-4 pb-20 sm:pb-24 md:pb-28 mx-auto'>
    <figure className='relative max-w-[280px] sm:max-w-[300px] h-[380px] sm:h-[420px] md:h-[450px] mx-auto bg-red-50'>
    <Image
            src={props.url}
             width={300}
             height={300}
             quality={100}
            alt={`Photo of ${props.title}`}
            priority
            className="w-full h-full object-cover"
          />
    <figcaption className='z-10 rounded-md bg-white p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 absolute bottom-[-80px] sm:bottom-[-90px] md:bottom-[-100px] left-2 sm:left-4 md:left-5 right-2 sm:right-4 md:right-5'>
        <nav aria-label="Social media links">
          <SocialLogo1/>
        </nav>
        <h3 className='text-center uppercase text-primary text-sm sm:text-base'>{props.title}</h3>
        <p className='text-center uppercase text-xs sm:text-sm'>{props.text}</p>
      
    </figcaption>
    </figure>
    </article>
  )
}

export default TeamCard