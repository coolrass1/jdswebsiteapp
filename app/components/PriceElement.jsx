import React from "react";

const PriceElement = ({text}) => {
  return (
    <div className="px-24  grid grid-cols-4 gap-5 ">
     
        {/* <div className="w-[25px] h-[15px] bg-slate-800"></div> */}
       
          {/* <p className="w-[70%] mt[-10px] border-r-2 border-black">
          {" "}
          Initial consultation taking place during office hours (90minute
          meeting with Solicitor followed by a letter summarising the
          meeting)
        </p> */}
          <ul className="col-span-2 w-3/4 list-inside list-disc border-r-2 border-r-black py-7">
            <li>
              {" "}
            
              {text}
            </li>
          </ul>
     
     
      <div className="col-span-1 text-black text-xl font-extrabold  py-7">
        £175.00
      </div>
      <div className="col-span-1 text-black  text-xl font-extrabold  border-l-2 border-l-black py-7 px-3">£305.00 </div>
    </div>
  );
};

export default PriceElement;
