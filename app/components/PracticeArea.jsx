import React from "react";

export const PracticeArea = () => {
  return (
    <div className="bg-white shadow-md flex  py-12 px-12 flex-col  justify-start items-start gap-10 hover:shadow-2xl [&>*:nth-child(1)]:hover:bg-secondary ">
      <div className="w-20 h-20 flex justify-center items-center border-2 border-primary rounded-full">
        <img src="/images/area/criminal.svg" alt="image" />
      </div>
      <p className="text-2xl text-center font-bold uppercase"> CRIMINAL LAW</p>
      <p>
        We enjoy an excellent reputation of providing strategic advice in areas
        of general and corporate criminal law with our team of highly
        experienced, astute and supportive lawyers.
      </p>
      <div>
       
        <div>
        <h1 className="pb-2">Our Services Include:</h1>
        <ul className="flex flex-col justify-start pl-12 gap-4  ">
          <li className="flex justify-start items-center">
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
          </li>
       
        </ul>
        </div>
      </div>
    </div>
  );
};
