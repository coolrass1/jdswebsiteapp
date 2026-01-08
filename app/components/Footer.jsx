import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaFax,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SocialLogo from "./SocialLogo";
import Sra from "./Sra";
const Footer = () => {
  return (
    <footer className="bg-slate-200 pt-8 md:pt-10 mb-8 md:mb-10 relative">
      <section className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-12 lg:gap-24 container max-w-screen-xl mx-auto">
        
      
        
        <div className="flex flex-col justify-center md:h-96 items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        <div className="w-2/3">
        
        {/* <Sra/> */}
        </div>
          <div className="">
            <Image
              src="/images/logo.png"
              width={150}
              height={80}
              quality={70}
              alt="footer"
              className="w-[120px] sm:w-[140px] md:w-[150px]"
            />
          </div>
          <p className="text-left text-sm sm:text-base leading-relaxed">
            {" "}
            JDS Solicitors is a long standing and growing family-friendly firm of
            solicitors, offering a client-centred and flexible legal service to
            its clients and associates alike
          </p>
          <h5 className="text-xl sm:text-2xl font-bold">Stay with us</h5>
          <SocialLogo />
        </div>

        {/*  #f1f1f1  f2*/}
        <div className="mt-6 flex flex-col gap-3 md:self-end">
          <h1 className="text-3xl text-primary font-bold my-6 md:my-1 md:text-2xl">
            {" "}
            Head office
          </h1>
          <div className="flex gap-2 md:gap-3">
            <div className="flex justify-center items-start  text-lg  md:text-base">
              <div className="bg-primary text-white  p-2 rounded-md ">
                <ImLocation />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2   md:text-base">
               HEAD OFFICE
              </h5>
              <p>
                St. Luke's Business Centre, Suite 3-4, 85 Tarling Road, London
                E16 1HN
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-start  text-lg ">
              <div className="bg-primary  text-white  p-2 rounded-md">
                <BsTelephoneFill />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2">Call Us 24/7</h5>
              <p className="text-primary">020 7366 6409</p>
            </div>
          </div>
          <div className="flex gap-2">
            
           
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-start  text-lg ">
              <div className="bg-primary  text-white  p-2 rounded-md">
                <MdEmail />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2">Email Address</h5>
              <p className="text-primary">admin@jdssolicitors.com</p>
            </div>
          </div>
          <div>
            <span className="text-primary font-semibold text-xs">
              Working Hours :
            </span>{" "}
            <span className="text-xs">9.00am - 5.00pm</span>
          </div>
        </div>
        {/********************* 2nd part */}

        {/* <div className="mt-6 flex flex-col gap-3">
          <h5 className="text-xl text-primary font-bold my-6 md:my-1 ">
          
            {" "}
           Brentford Office 
          </h5>
          
          <div className="flex gap-2">
            <div className="flex justify-center items-start  text-lg ">
              <div className="bg-primary  text-white  p-2 rounded-md">
                <ImLocation />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2">Brentford office address</h5>
              <p>
              Unit 1, Lighterage Court, 41 High Street, Brentford, Middlesex TW8 0FT
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-start  text-lg ">
              <div className="bg-primary  text-white  p-2 rounded-md">
                <BsTelephoneFill />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2">Call us from 9.30 A.M.- 5.30 P.M.</h5>
              <p className="text-primary">020 8570 7450</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex justify-center items-start  text-lg ">
              <div className="bg-primary  text-white  p-2 rounded-md">
                <MdEmail />
              </div>
            </div>
            <div>
              <h5 className="text-xl  font-bold mb-2">Email Address</h5>
              <p className="text-primary">info@jdssolicitors.com</p>
            </div>
          </div>
          <div>
            <span className="text-primary font-semibold text-xs">
              Working Hours :
            </span>{" "}
            <span className="text-xs">9.30 A.M.- 5.30 P.M.</span>
          </div>
        </div> */}
        {/*********************bottom #D8A42E */}
      </section>
      <div className="bg-slate-900 text-white py-6 sm:py-8 md:py-10 w-full">
        <p className="text-center text-xs sm:text-sm md:text-base">Copyright © 2025 JDS Solicitors Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
