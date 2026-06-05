import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export const PracticeArea = ({practice}) => {
  // Services with published pricing on the fees page
  const servicesWithPricing = ['Immigration Law', 'Employment Law', 'Housing Law'];
  const hasPricing = servicesWithPricing.includes(practice.title);
  
  return (
    <div className="bg-white shadow-md flex py-8 sm:py-10 md:py-12 px-6 sm:px-8 md:px-12 flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 hover:shadow-2xl transition-shadow [&>*:nth-child(1)]:hover:bg-secondary">
      <div className="flex justify-between items-start w-full gap-4">
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex justify-center items-center border-2 border-primary rounded-full transition-colors">
          <Image  src={practice.url} alt="image" width={30} height={30} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
        </div>
        
        {hasPricing && (
          <Link href="/fees" className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-white text-xs sm:text-sm font-semibold rounded hover:bg-secondary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Pricing
          </Link>
        )}
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
