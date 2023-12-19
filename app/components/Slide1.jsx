"use client";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Slide1 = ({props,Handleclick,handleclickLeft}) => {
  const a = "u";

  return (
    <section
   
      className={`container   imageboxtest relative  max-w-screen-xl min-w-full 
    h-60  flex   justify-center   md:bg-auto md:bg-center items-center  md:h-screen md:w-screen`}
    style={{backgroundImage:`url(${props?.img}`}}
   >
      <div className=" absolute flex flex-col gap-3  justify-center items-center w-full h-full md: bg-black/25 md:backdrop-brightness-75">
        <div className="absolute cursor-pointer left-11 flex justify-center items-center top-2/4 h-12 w-12 text-black hover:text-white text-2xl rounded-full bg-gray-100 hover:bg-primary">
          <BsArrowLeftShort onClick={handleclickLeft}   />
        </div>
        <div className="absolute cursor-pointer right-11 flex justify-center items-center top-2/4 h-12 w-12  text-black hover:text-white text-2xl rounded-full bg-gray-100 hover:bg-primary">
          <BsArrowRightShort onClick={Handleclick}  />
        </div>
        <h1 className="text-2xl text-center uppercase text-white font-semibold md:text-6xl ">
       {props?.title}
        </h1>
        <p className="md:text-3xl md:my-3 text-primary">{props?.text} </p>
        <button className="px-8 py-2 bg-yellow-600 rounded-se text-white">
          contact us{" "}
        </button>
        <div className="flex gap-2 pt-6">
          <div className={`w-5 h-2 rounded-full ${props?.id==1?'bg-primary':'bg-white'} `}></div>
          <div className={`w-5 h-2 rounded-full ${props?.id==2?'bg-primary':'bg-white'} `}></div>
          <div className={`w-5 h-2 rounded-full ${props?.id==3?'bg-primary':'bg-white'} `}></div>
          <div className={`w-5 h-2 rounded-full ${props?.id==4?'bg-primary':'bg-white'} `}></div>
        </div>
      </div>
    </section>
  );
};

export default Slide1;
