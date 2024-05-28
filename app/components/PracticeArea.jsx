import React from "react";
import Image from 'next/image'
export const PracticeArea = ({practice}) => {
  return (
    <div className="bg-white shadow-md flex  py-12 px-12 flex-col  justify-start items-start gap-10 hover:shadow-2xl [&>*:nth-child(1)]:hover:bg-secondary ">
      <div className="w-20 h-20 flex justify-center items-center border-2 border-primary rounded-full">
        <Image  src={practice.url} alt="image" width={30} height={30}/>
      </div>
      
      <p className="text-2xl text-center font-bold uppercase"> {practice.title}</p>
      <p>
      {practice.text}
      </p>
      <div>
       
        <div>
        <h1 className="pb-2">{practice.smtitle}</h1>
        <ul className="flex flex-col justify-start pl-12 gap-4  ">
          {practice. listservices.map((el,k)=> <li key={k} className="flex justify-start items-center">
            <div className="h-[5px] w-[5px] rounded-2xl bg-black mr-2"></div>
            <div>{el}</div>
          </li>)}
          {/* <li className="flex justify-start items-center">
            <div className="h-[5px] w-[5px] rounded-2xl bg-black mr-2"></div>
            <div>Business and Financial Crime</div>
          </li>
          <li  className="flex justify-start items-center">
            <div className="h-[5px] w-[5px] rounded-2xl bg-black mr-2"></div>
            <div>General Crime</div>
          </li>
          <li className="flex justify-center items-center">
            <div className="h-[5px] w-[5px] rounded-2xl bg-black mr-2"></div>
            <div>Police station Representation and Advice</div>
          </li> */}
       
        </ul>
        </div>
      </div>
    </div>
  );
};
