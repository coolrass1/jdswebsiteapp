import React from "react";
import PriceElement from "../components/PriceElement";
import PriceHeader from "../components/PriceHeader";

const Fees = () => {
    const text1="  Initial consultation taking place during office hours 90minutemeeting with Solicitor followed by a letter summarising the meeting"
   const text2="Initial consultation with other solicitor(Fee Earner)."
    return (
    <div>
      <div className="mx-36 mt-12 grid grid-cols-1 overflow-hidden " style={{ border: "2px solid black ", borderRadius:"25px"}}>
        <PriceHeader />
        <PriceElement text={text1}/>
        <PriceElement text={text2}/>
        <PriceHeader />
        <PriceElement text={text1}/>
        <PriceElement text={text2}/>
        <PriceHeader />
        <PriceHeader />
      </div>
    </div>
  );
};

export default Fees;
