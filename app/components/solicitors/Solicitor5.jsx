"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor5 = () => {
  //const txt = text?.text.toString();
  const Extend = ({txt}) => (
    <>
      <p className="py-4 text-start">
      Ravi advised the team of His Highness King of Qatar and acted for the Finance Director of Reliance. Ravi loves traveling, particularly on Cruises, playing Golf, and watching movies.
      </p>
    
    </>
  );
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="container max-w-screen-xl mx-auto pt-14">
      <div className="flex gap-7 ">
        <div className="flex-[1]">
          <div className="w-80 h-auto">
            <img
              src="/images/ravi.png"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
          Ravi Pershad Sethi
          </h1>
          <h3 className="font-extrabold mb-2">Senior Solicitor/ Consultant</h3>
          <p className="py-4 text-justify">
          Ravi Pershad Sethi is qualified as a solicitor in 2004 and has been working in property transactions ever since, having expertise in Residential and Commercial transactions.
         
          </p>
          <p className="py-4 text-justify">
          Worked with many firms as a junior solicitor to Managing Director and Partner, worked for many high-profile clients like The British professional Boxing Champion Mr. Audley Harrison, Ravi acted for many Bollywood Celebrities, was standing council for the West London Mosque Association, acted for local Gurudwaras (Sikh Temples), was Chairman of the Local Hindu Temple (Laxmi Narayan Temple in Hounslow) completed the Building construction project of 1.2 Million for the Temple, on an occasion during religious meetings met the Archbishop of Canterbury Mr. Justin Welby, Ravi works very closely with all the Asian Communities and acted for most of the Mayors and Councillors in London Borough of Hounslow, Slough, and Ealing.

          </p>

          {readMore ? <Extend /> : ""}
          <span onClick={toggleReadMore} className="read-or-hide">
            {readMore ? (
              <button className="px-12 py-2 my-7 text-white bg-secondary">
                Show less
              </button>
            ) : (
              <button className="px-12 py-2 my-7 bg-primary">Show more</button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Solicitor5;
