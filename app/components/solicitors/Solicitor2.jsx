"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor2 = () => {
  //const txt = text?.text.toString();
  const Extend = ({txt}) => (
    <>
      
   
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
              src="/images/will.jpg"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
          Wilberforce Ehimika
          </h1>
          <h3 className="font-extrabold mb-2">Director / Solicitor </h3>
          <p className="py-2 text-justify">
            Wil is a Solicitor of the Supreme Court of England &amp; Wales (admitted 2005), now in his <strong>18th year of post-qualification experience (PQE)</strong>. He is a co-Director and co-founder of JDS Solicitors Ltd.
          </p>
          <p className="py-2 text-justify">
            He has extensive expertise in civil litigation, business law, commercial property, immigration law, written submissions, risk management, and regulatory compliance. Wil also plays a leading role in the firm's compliance and supervision functions.
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

export default Solicitor2;
