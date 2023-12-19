"use client";
import React, { useState } from "react";
import { text } from "../Datas";

const Solicitor = () => {
  //const txt = text?.text.toString();
  const Extend = ({txt}) => (
    <>
      <p className="py-4 text-start">
        Head of firm’s financial management. Training Principal and has trained
        lawyers for over 20 years. Head of Criminal Department & Crime
        Supervisor. Well into second decade as Duty Solicitor. Vastly
        experienced Solicitor over several areas of law, with particular
        strengths in advocacy, ethics, training lawyers (holistically) &
        criminal law (from pre-police station to Court of Appeal) over the years
        has appeared as Police Station Solicitor and Magistrates Court advocate
        before Employment Tribunals, Family Courts, Immigration Tribunals, and
        Parole Board Hearings, as well as Prisoner Adjudications. Appeal).
      </p>
      <p className="py-4 text-justify">
        Over the years has appeared as Police Station Solicitor; Magistrates
        Court advocate; before Employment Tribunals, Family Courts; Immigration
        Tribunals, and Parole Board Hearings, as well as Prisoner Adjudications.
        Has been consulted as Agent Prosecutor for Crown Prosecution Service,
        Royal Mail & Department for Works & Pensions (DWP) Strengths;
        personability; legal strategizing; preparing clients for trial/contested
        hearings and “reaching them where they are in life”; something of a
        legal raconteur.
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
              src="/images/JDSOffiah.jpg"
              alt="solicitor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[3]">
          <h1 className="text-primary text-4xl font-extrabold mb-3">
            A. J. Offiah, MA
          </h1>
          <h3 className="font-extrabold mb-2">Principal and Director</h3>
          <p className="py-4 text-justify">
            Afame, Kingsley, John OFFIAH; “AJ” to colleagues, other lawyers, and
            clients alike.
            <br />
            Admitted as a Solicitor end of 1999; in 24th year as a Solicitor
            with unrestricted Practising Certificate; approaching 30 years in
            the law.
          </p>
          <p className="py-4 text-justify">
            Founded JDS Solicitors in the late noughties and remained central
            since that time. One of the leadership triumvirates, consisting of
            himself, fellow Director Wilberforce Ehimika, and Practice Manager
            Dolores Henry. Has run/supervised other Solicitors firms since 2007,
            moved the firm from its former office in Stratford to its current
            base in 2015. Converted JDS to a Limited company, together with
            Wilberforce Ehimika, in late 2018
          </p>

          {readMore ? <Extend /> : ""}
          <span onClick={toggleReadMore} className="read-or-hide">
            {readMore ? (
              <button className="px-12 py-2 text-white bg-secondary">
                Show less
              </button>
            ) : (
              <button className="px-12 py-2  bg-primary">Show more</button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Solicitor;
