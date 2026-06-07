"use client";
import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="bg-secondary py-12 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Urgent Message */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase">
              Need Legal <br /> 
              <span className="text-primary italic text-4xl md:text-5xl">Help Now?</span>
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Our specialists are ready to assist you. Don't wait—secure your legal rights today.
            </p>
          </motion.div>

          {/* Contact Actions */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Call Action */}
            <motion.a 
              href="tel:02073666409"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-primary p-6 rounded-2xl flex items-center gap-6 shadow-2xl transition-all hover:bg-white"
            >
              <div className="bg-secondary text-primary p-5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors animate-pulse">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <div>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest opacity-70 group-hover:opacity-100">Call Us During Office Hours</p>
                <p className="text-secondary text-2xl font-black group-hover:text-primary transition-colors">02073666409</p>
              </div>
            </motion.a>

            {/* Email Action: mailto on mobile, contact page link on desktop */}
            {/* Mobile: keep mailto behavior */}
            <motion.a
              href="mailto:admin@jdssolicitors.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/10 border-2 border-primary p-6 rounded-2xl flex items-center gap-6 backdrop-blur-md transition-all hover:bg-primary lg:hidden"
            >
              <div className="bg-primary text-secondary p-5 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                <FaEnvelope className="text-3xl" />
              </div>
              <div className="min-w-0">
                <p className="text-primary font-bold text-sm uppercase tracking-widest group-hover:text-secondary group-hover:opacity-70 transition-colors">Send an Email</p>
                <p className="text-white text-xl font-bold group-hover:text-secondary transition-colors truncate">admin@jdssolicitors.com</p>
              </div>
            </motion.a>

            {/* Desktop: link to contact page for richer contact experience */}
            <Link
              href="/contact"
              className="group bg-white/10 border-2 border-primary p-6 rounded-2xl flex items-center gap-6 backdrop-blur-md transition-all hover:bg-primary hidden lg:flex"
            >
              <div className="bg-primary text-secondary p-5 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                <FaEnvelope className="text-3xl" />
              </div>
              <div className="min-w-0">
                <p className="text-primary font-bold text-sm uppercase tracking-widest group-hover:text-secondary group-hover:opacity-70 transition-colors">Contact Us</p>
                <p className="text-white text-xl font-bold group-hover:text-secondary transition-colors truncate">Contact form & enquiries</p>
              </div>
            </Link>

          </div>
        </div>
        
        {/* Availability Badge */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white/5 px-4 sm:px-6 py-3 sm:py-2 rounded-xl sm:rounded-full border border-white/10 flex flex-wrap justify-center items-center gap-2 text-white/60 text-xs sm:text-sm text-center">
                <FaClock className="text-primary" />
                <span>Available Mon-Fri 09:30-17:30 - We respond fast during business hours.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;