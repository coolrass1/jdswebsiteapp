import React from 'react'
import SocialLogo from './SocialLogo'
import Image from 'next/image'
import SocialLogo1 from './SocialLogo1'

const TeamCard = ({props}) => {
  return (
    <div className='px-2 pt-4  hover:scale-105 transition-all  w-[350px] border-2 shadow-xl  my-4  pb-28'>
    <div className=' relative    max-w-[300px] h-[450px] mx-auto bg-red-50 '>
    <Image
            src={props.url}
             width={300}
             height={300}
             quality={100}
            alt="footer"
            
          />
    <div className='z-10 rounded-md bg-white p-5 flex flex-col gap-4 absolute bottom-[-100px] left-5'>
        <SocialLogo1/>
        <h1 className='text-center text-primary'>{props.title}</h1>
        <p className='text-center'>{props.text}</p>
    </div>
    </div>
    </div>
  )
}

export default TeamCard