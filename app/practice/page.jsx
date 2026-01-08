'use client'
import React from "react";
import Banner from "../components/Banner";
import { PracticeArea } from "../components/PracticeArea";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"
import {practicelist} from './Data'
const practice = () => {
  return (
    <AnimatePresence mode="wait">
    <motion.div
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
  >
    <section>

      <Banner />
   
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-7">
        {" "}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary pt-5 sm:pt-7">OUR PRACTICE AREAS</h1>
        <p className="text-center max-w-xl text-sm sm:text-base px-4">
          JDS Solicitors is a long standing  and growing family-friendly firm of
          solicitors, offering a client-centred and flexible legal service to
          its clients and associates alike. We practice in the following areas
          of Law:
        </p>
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 pb-5 sm:pb-7 w-full">

          { practicelist.map((practi,k)=><PracticeArea key={k} practice={practi}/>)}
          {/* <PracticeArea/>
          <PracticeArea/>
          <PracticeArea/> */}
        </div>
   
      </div>
    
    </section>
    </motion.div></AnimatePresence>
  );
};

export default practice;
