"use client";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRouter,  usePathname  } from 'next/navigation';

const Slide1 = ({props,Handleclick,handleclickLeft}) => {
  const a = "u";
  const router=useRouter()

  return (
    <section
   
      className={`container relative imageboxtest max-w-screen-xl min-w-full 
    h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen flex justify-center bg-cover bg-center items-center`}
    style={{backgroundImage:`url(${props?.img}`}}
   >
      <div className="absolute flex flex-col gap-2 sm:gap-3 justify-center items-center w-full h-full bg-black/25 backdrop-brightness-75 px-4">
        <div className="hidden absolute cursor-pointer left-4 sm:left-8 lg:left-11 lg:flex justify-center items-center top-2/4 h-10 w-10 sm:h-12 sm:w-12 text-black hover:text-white text-xl sm:text-2xl rounded-full bg-gray-100 hover:bg-primary transition-colors">
          <BsArrowLeftShort onClick={handleclickLeft}   />
        </div>
        <div className="hidden absolute cursor-pointer right-4 sm:right-8 lg:right-11 lg:flex justify-center items-center top-2/4 h-10 w-10 sm:h-12 sm:w-12 text-black hover:text-white text-xl sm:text-2xl rounded-full bg-gray-100 hover:bg-primary transition-colors">
          <BsArrowRightShort onClick={Handleclick}  />
        </div>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center uppercase text-white font-semibold px-4">
       {props?.title}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl my-1 sm:my-3 text-primary uppercase">{props?.text} </p>
        <button onClick={e=>router.push('/contact')} className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-600 rounded-se text-white text-sm sm:text-base hover:bg-yellow-700 transition-colors">
          contact us{" "}
        </button>
        <div className="flex gap-2 pt-4 sm:pt-6">
          <div className={`w-4 sm:w-5 h-2 rounded-full ${props?.id==1?'bg-primary':'bg-white'} `}></div>
          <div className={`w-4 sm:w-5 h-2 rounded-full ${props?.id==2?'bg-primary':'bg-white'} `}></div>
          <div className={`w-4 sm:w-5 h-2 rounded-full ${props?.id==3?'bg-primary':'bg-white'} `}></div>
          <div className={`w-4 sm:w-5 h-2 rounded-full ${props?.id==4?'bg-primary':'bg-white'} `}></div>
        </div>
      </div>
    </section>
  );
};

export default Slide1;
