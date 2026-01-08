import React from "react";
import Image from 'next/image'
export const PracticeArea = ({practice}) => {
  return (
    <div className="bg-white shadow-md flex py-8 sm:py-10 md:py-12 px-6 sm:px-8 md:px-12 flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 hover:shadow-2xl transition-shadow [&>*:nth-child(1)]:hover:bg-secondary">
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex justify-center items-center border-2 border-primary rounded-full transition-colors">
        <Image  src={practice.url} alt="image" width={30} height={30} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
      </div>
      
      <p className="text-xl sm:text-2xl text-center font-bold uppercase leading-tight">{practice.title}</p>
      <p className="text-sm sm:text-base leading-relaxed">
      {practice.text}
      </p>
      <div>
       
        <div>
        <h1 className="pb-2 text-base sm:text-lg font-semibold">{practice.smtitle}</h1>
        <ul className="flex flex-col justify-start pl-8 sm:pl-10 md:pl-12 gap-3 sm:gap-4">
          {practice.listservices.map((el,k)=> <li key={k} className="flex justify-start items-start text-sm sm:text-base">
            <div className="h-[5px] w-[5px] rounded-full bg-black mr-2 mt-2 flex-shrink-0"></div>
            <div>{el}</div>
          </li>)}
        </ul>
        </div>
      </div>
    </div>
  );
};
