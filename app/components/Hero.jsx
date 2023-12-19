"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import { sliders } from "./Datas";
const Hero = () => {
  const [str, setstr] = useState([]);
  const [arrowright, setarrowright] = useState(false);
  const [slidetime, setSlidetime] = useState(0);
  const [iszero, setIszero] = useState(true);
  //const [position, setPosition] = useState(1);
  useEffect(() => {
    setstr(sliders);
  }, []);
  let muty = 0;
  const Handleclick = (e) => {
    if (muty < -200) {
      muty = 0;
      setIszero(true);
      return;
    }
    muty = muty - 100;
    setIszero(false);
    setSlidetime(muty);
  };
  useCallback(()=>{
    HadleVlickArrowRight

  },[])
  const HadleVlickArrowRight=e=>{
    e.preventDefault()
   
  
    setSlidetime(slidetime-100<-300?0:slidetime-100);
    
  
  
  }
  const HadleVlickArrowLeft=e=>{
    e.preventDefault()

  
    setSlidetime(slidetime+100>0?-300:slidetime+100);
    setarrowright(!arrowright)
  
  
  }
  useEffect(() => {
    const interval = setInterval(() => {
  
      Handleclick();
      //HadleVlickArrowLeft()
     
    }, 10000);

    return () => clearInterval(interval);
  }, [arrowright]);
  // useCallback(()=>{ setSlidetime(muty)},[muty])
  return (
    <div className="relative overflow-hidden  w-screen">
      <div
        className={`w-full relative flex justify-start items-center  `}
        style={{
          transform: `translateX(${iszero ? 0 : slidetime + "%"})`,
          transition: "all 2s  step-start ",
        }}
      >
        {" "}
        {sliders.map((st, index) => (
          <Slide1 key={index} props={st} Handleclick={HadleVlickArrowRight} handleclickLeft={HadleVlickArrowLeft} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
