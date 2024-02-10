import React from "react";
import PriceElement from "../components/PriceElement";
import PriceHeader from "../components/PriceHeader";
import {convey, family_law, family_law_co, legal_aid, page1, page2, page22, purchasing, administration,will_probate,will_probatec,empllaw,miscellaneous} from "./Data"

const Fees = () => {
   const text1="  Initial consultation taking place during office hours (90 minutes meeting with Solicitor followed by a letter summarising the meeting)."
   const text2="Initial consultation with other solicitor(Fee Earner)."
    return (
      //title, price1title, price2title
    <div>
      <div className="hidden mx-36 mt-12 lg:grid grid-cols-1 overflow-hidden " style={{ border: "2px solid black ", borderRadius:"25px"}}>
        <PriceHeader title="general" price1title="office hour rate" price2title="Out of office our rate"/>
        <PriceElement text={text1} p1={"£175.00"} p2={"£305.00"}/>
        <PriceElement text={text2} p1={"£150.00"} p2={"£250.00"}/>
      
        <PriceHeader title="immigration law" price1title="usual rate" price2title="urgent rate" />
        {/* <PriceElement text={"Marriage or spouse application for leave to enter and remain in the UK up to submission of the Application either to the Home Office or to the Applicant for submission to the British Embassy/High Commission. "} title="Marriage or Spouse Application (Fixed Fee)"/>
        <PriceElement text={"lndefinite leave to remain in the UK application up to submission of the Application to the Home Office. "} title=" lndefinite leave to remain:"/> */}
     {page1.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}

       <PriceHeader title="criminal law" price1title="" price2title="" /> 
       {page2.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
      
       <PriceHeader title="Cases with hourly charges" price1title="cost excluding VAT" price2title="" />
       {page22.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="legal aid" price1title="solicitors" price2title="partner" /> 
       {legal_aid.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="family law" price1title="usual rate" price2title="urgent rate" /> 
       {family_law.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="family law (cont'd)" price1title="usual rate" price2title="urgent rate" /> 
       {family_law_co.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="conveyancing" price1title="" price2title="" /> 
       {convey.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="purchasing" price1title="leasehold" price2title="freehold" /> 
       {purchasing.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="administration of estates" price1title="" price2title="" /> 
       { administration.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
       <PriceHeader title="WILLS & PROBATE" price1title="" price2title="" /> 
{will_probate.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
<PriceHeader title="WILLS & PROBATE (cont' d)" price1title="" price2title="" /> 
{will_probatec.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>)}
<PriceHeader title="EMPLOYMENT LAW" price1title="" price2title="" /> 
 {empllaw.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>) }
 <PriceHeader title="MISCELLANEOUS MATTERS" price1title="" price2title="" /> 
 {miscellaneous.map(p=><PriceElement title={p.title} text={p.text} p1={p.p1} p2={p.p2}/>) }
   </div>
    </div>
  );
};

export default Fees;
