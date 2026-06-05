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
        
        {/* Pricing Information Notice */}
        <div className="w-full max-w-4xl bg-blue-50 border-l-4 border-primary p-4 sm:p-6 rounded-lg shadow-sm">
          <p className="text-sm sm:text-base text-gray-800 text-center">
            <strong className="text-primary">Transparent Pricing:</strong> We publish detailed pricing information for Immigration, Employment, Housing, Probate & Estate Administration, and Civil Litigation services. 
            <a href="/fees" className="ml-1 font-bold text-secondary hover:underline transition-colors">
              View our fee schedule →
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 pb-5 sm:pb-7 w-full">

          { practicelist.map((practi,k)=><PracticeArea key={k} practice={practi}/>)}
          {/* <PracticeArea/>
          <PracticeArea/>
          <PracticeArea/> */}
        </div>

        {/* Additional Information Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-8 sm:pb-10">
          <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">Need More Information?</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              We offer initial consultations to discuss your legal needs and provide guidance on the best approach for your matter.
            </p>
            <a href="/contact" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
              Contact us today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">Regulatory Information</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              JDS Solicitors Ltd is authorised and regulated by the Solicitors Regulation Authority (SRA Number: 653449).
            </p>
            <a href="/policy" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline text-sm">
              View complaints procedure
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
   
      </div>
    
    </section>
    </motion.div></AnimatePresence>
  );
};

export default practice;
