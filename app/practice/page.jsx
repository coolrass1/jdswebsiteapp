'use client'
import React from "react";
import Banner from "../components/Banner";
import { PracticeArea } from "../components/PracticeArea";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"
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
   
      <div className="bg-white flex flex-col justify-center items-center gap-7" >
        {" "}
        <h1 className="text-center text-4xl font-extrabold text-secondary pt-7 ">OUR PRACTICE AREAS</h1>
        <p className=" text-center max-w-xl">
          JDS Solicitors is a small and growing family-friendly firm of
          solicitors, offering a client-centred and flexible legal service to
          its clients and associates alike. We practice in the following areas
          of Law:
        </p>
        <div className="flex flex-col  gap-7 pb-7">
          <PracticeArea/>
          <PracticeArea/>
          <PracticeArea/>
        </div>
   
      </div>
    
    </section>
    </motion.div></AnimatePresence>
  );
};

export default practice;
