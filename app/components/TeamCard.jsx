import React from 'react'

import Image from 'next/image'
import SocialLogo1 from './SocialLogo1'

const TeamCard = ({props}) => {
  return (
    <article className='px-2 pt-4  hover:scale-105 transition-all  w-[350px] border-2 shadow-xl  my-4  pb-28'>
    <figure className=' relative    max-w-[300px] h-[450px] mx-auto bg-red-50 '>
    <Image
            src={props.url}
             width={300}
             height={300}
             quality={100}
            alt={`Photo of ${props.title}`}
            priority
            
          />
    <figcaption className='z-10 rounded-md bg-white p-5 flex flex-col gap-4 absolute bottom-[-100px] left-5'>
        <nav aria-label="Social media links">
          <SocialLogo1/>
        </nav>
        <h3 className='text-center uppercase text-primary'>{props.title}</h3>
        <p className='text-center uppercase'>{props.text}</p>
      
    </figcaption>
    </figure>
    </article>
  )
}

export default TeamCard