'use client'
import React from 'react'

const Slide4 = () => {
  const a =""

  return (
<section   className={`container relative  imagebox max-w-screen-xl min-w-full  mx-auto md:w-screen 
    h-80  flex   justify-center items-center md:h-screen md:bg-[url("/images/slider4.jpeg")] md:bg-auto md:bg-center`} >
          {/* <div className="absolute inset-0 z-0 ">
            <div className="absolute inset-0 overlay z-10 ">

            </div>
                 <Image
                     src="/../public/images/slider1.jpeg"
                     alt="background image"
                    //  height={1200}
                    //  width={1200}
                     //fill
                     width={500}
                     height={500}
                     style={{ objectFit: 'fill', position:"sticky" , width:"100%",height:"100%" }}
                     
                 />
             </div> */}
           

     <div className=' z-10  absolute flex flex-col gap-3  justify-center items-center md:w-full md:h-full md:bg-black/10 md:backdrop-brightness-75'>
       <h1 className='text-2xl text-center uppercase text-white font-semibold '>qualified and competent solicitors</h1>
       <label> Service are client centered</label>
       <button className='px-8 py-2 bg-yellow-600 rounded-se text-white'>contact us </button>
       <div className='flex gap-2 pt-6'>
         <div className='w-2 h-2 rounded-full bg-white'></div>
         <div className='w-2 h-2 rounded-full bg-white' ></div>
         <div className='w-2 h-2 rounded-full bg-white'></div>
         <div className='w-2 h-2 rounded-full bg-white'></div>
       </div>
     </div>

   
     </section>
  )
}

export default Slide4