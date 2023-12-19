"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor3 = () => {
  //const txt = text?.text.toString();
  const Extend = ({ txt }) => (
    <>
      <p className="py-4 text-start">
        A Chartered Institute of Management member. Member of the Certified
        Probate Professional Chartered Institute.
      </p>
      <p className="py-4 text-justify">
        Dolores is a Christian who also thinks that everyone deserves a chance.
        When not thinking about law, she practices gratitude and has just
        started farming as a hobby for her retirement.
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
              src="/images/dolores.jpg"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
            Dolores A. Henry
          </h1>
          <h3 className="font-extrabold mb-2">Practice Manager</h3>
          <p className="py-4 text-justify">
            After earning her paralegal diploma, Dolores Aisha Uzoma Henry, also
            known as Ladydee, began her legal career as a paralegal and
            certified will drafter.
          </p>
          <p className="py-4 text-justify">
            Dolores attended Middlesex University to earn her degrees in
            psychology and forensic science and South Bank University to earn
            her postgraduate degree in financial and corporate governance. Her
            degrees include a Legal Profession (LPC) from Hertfordshire
            University and an LLB (Hons) from Middlesex University.
          </p>
          <p>
            Dolores decided to take on behind-the-scenes work in the legal
            industry. Since then, she has served as Director of the Barnet Law
            Center and Practice Manager for the Haringey Council Asylum Team.
            Dolores has also held a variety of positions in the private sector.
            Dolores has spent 32 years practicing law, with a focus on estate
            planning, wills, and probate.
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

export default Solicitor3;
