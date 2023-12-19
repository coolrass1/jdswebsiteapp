"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor5 = () => {
  //const txt = text?.text.toString();
  const Extend = ({ txt }) => (
    <>
      <p className="py-4 text-start">
        Edo has a first degree in Law (LL.B Hons) from the University of Benin
        Nigeria and also has a master’s degree (LLM) in Banking and Finance Law
        from the Queen Mary University of London. Edo is a CEDR Accredited
        Mediator (2006) and has assisted clients through several successful
        mediations in his over 27 years of practicing as a solicitor.
      </p>
      <p className="py-4 text-start">
        When not practicing or talking law, Edo likes to spend his spare time
        watching football and studying politics.{" "}
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
              src="/images/edokolor.jpg"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
            Ighodaro Edokolor
          </h1>
          <h3 className="font-extrabold mb-2">Solicitor / Legal Consultant</h3>
          <p className="py-4 text-justify">
            Ighodaro Edokpolor more fondly called Edo is a doubly qualified
            solicitor of the Supreme Court, having first qualified in Nigeria in
            1995 where he began his professional practice and subsequently
            qualified as a solicitor of the Supreme Court of England and Wales.
          </p>
          <p className="py-4 text-justify">
            He has over 27 years of combined practice experience, specializing
            broadly in dispute resolution which includes civil and commercial
            litigation, financial disputes, asset recovery, contract disputes,
            lease/tenancy disputes, business disputes, family/partner assets
            disputes, and wills and probate disputes. Edo also accepts
            instructions in Immigration and Nationality matters including First
            Tier and Upper Tribunal Appeals, and Judicial Review applications,
            and further appeals.
          </p>

          {readMore ? <Extend /> : ""}
          <span onClick={toggleReadMore} className="read-or-hide">
            {readMore ? (
              <button className="px-12 py-2  my-7 text-white bg-secondary">
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
