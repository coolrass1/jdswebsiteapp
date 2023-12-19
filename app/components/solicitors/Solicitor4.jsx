"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor4 = () => {
  //const txt = text?.text.toString();
  const Extend = ({ txt }) => (
    <>
      <p className="py-4 text-start">
        She is a Motivational Speaker and continues to lobby for funding and
        services for creating skills and services for deprived communities.
      </p>
      <p className="py-4 text-justify">
        She is an activist who advocates for gender equality and creates
        platforms for young people’s voices.
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
              src="/images/nneka.jpg"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
            Nneka Keazor
          </h1>
          <h3 className="font-extrabold mb-2">Principal and Director</h3>
          <p className="py-4 text-justify">
            A Practising Solicitor and a member of the Resolution Association of
            Family Lawyers
          </p>
          <p className="py-4 text-justify">
            Nneka specializes in Civil Law in Family, Housing, and Dispute
            Resolution. She is also a Senior Manager in a London Borough.
          </p>
          <p>
            Nneka has a BSC in Biochemistry/Zoology and MSc in Business
            Information Technology (Middlesex University, London). LLB Law
            Degree from the University of London, Birkbeck College, and a PGD in
            Legal Studies from the University of Law. Nneka is a Coach and
            Mentor for vulnerable women and young people.
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

export default Solicitor4;
