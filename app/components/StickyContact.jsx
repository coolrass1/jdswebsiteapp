"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const StickyContact = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] hidden md:flex flex-col gap-1">
      <motion.a
        href="tel:02073666409"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        whileHover={{ x: -10 }}
        className="bg-primary text-secondary p-4 flex items-center gap-4 rounded-l-xl shadow-xl border-y border-l border-white/20 group hover:bg-secondary hover:text-primary transition-all duration-300"
      >
        <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform" />
        <span className="font-bold text-sm tracking-tighter whitespace-nowrap">CALL 02073666409</span>
      </motion.a>
      
      <motion.a
        href="mailto:admin@jdssolicitors.com"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ x: -10 }}
        className="bg-secondary text-primary p-4 flex items-center gap-4 rounded-l-xl shadow-xl border-y border-l border-white/20 group hover:bg-primary hover:text-secondary transition-all duration-300"
      >
        <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
        <span className="font-bold text-sm tracking-tighter whitespace-nowrap">EMAIL US</span>
      </motion.a>
    </div>
  );
};

export default StickyContact;