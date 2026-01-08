import React from "react";

const PriceElement = ({ text, title, p1, p2 }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {title && <h5 className="px-4 sm:px-8 lg:px-14 mt-4 lg:mt-7 font-bold text-sm sm:text-base">{title}</h5>}
      <div className="px-4 sm:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-5 py-4">
        
        <ul className="col-span-1 md:col-span-2 list-inside list-disc md:border-r-2 md:border-r-black text-sm sm:text-base">
          <li>{text}</li>
        </ul>

        <div className="col-span-1 text-black text-base sm:text-lg lg:text-xl font-extrabold py-2 lg:py-7">
          {p1}
        </div>
        <div className="col-span-1 text-black text-base sm:text-lg lg:text-xl font-extrabold md:border-l-2 md:border-l-black p-2 lg:p-7">
          {p2}{" "}
        </div>
      </div>
    </div>
  );
};

export default PriceElement;
