import React from "react";
import PriceElement from "../components/PriceElement";
import PriceHeader from "../components/PriceHeader";
import {page1, page2} from "./Data"

const Fees = () => {
   const text1="  Initial consultation taking place during office hours 90minutemeeting with Solicitor followed by a letter summarising the meeting"
   const text2="Initial consultation with other solicitor(Fee Earner)."
    return (
      //title, price1title, price2title
    <div>
      <div className="mx-36 mt-12 grid grid-cols-1 overflow-hidden " style={{ border: "2px solid black ", borderRadius:"25px"}}>
        <PriceHeader title="general" price1title="office hour rate" price2title="Out of office our rate"/>
        <PriceElement text={text1} p1={"£175.00"} p2={"£305.00"}/>
        <PriceElement text={text2} p1={"£150.00"} p2={"£250.00"}/>
      
        <PriceHeader title="immigration law" price1title="usual rate" price2title="urgent rate" />
        {/* <PriceElement text={"Marriage or spouse application for leave to enter and remain in the UK up to submission of the Application either to the Home Office or to the Applicant for submission to the British Embassy/High Commission. "} title="Marriage or Spouse Application (Fixed Fee)"/>
        <PriceElement text={" lndefinite leave to remain in the UK application up to submission of the Application to the Home Office. "} title=" lndefinite leave to remain:"/> */}
     {page1.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}

       <PriceHeader title="criminal law" price1title="" price2title="" /> 
       {page2.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
      </div>
    </div>
  );
};

export default Fees;
