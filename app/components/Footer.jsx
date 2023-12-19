import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaFax,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import {  BsTelephoneFill } from "react-icons/bs";
import {MdEmail } from "react-icons/md";
import SocialLogo from "./SocialLogo";
const Footer = () => {
  return (
    <footer className="bg-slate-200 md:pt-10 md:mb-10 md:relative">
    <section className="p-8 md:flex md:justify-center  md:items-start  md:gap-24 md:container md:max-w-screen-xl md:mx-auto md:px-2 md:py-0 md:pb-10">
      <div className="flex flex-col justify-center md:h-96 items-start gap-6 md:gap-7">
        <div className="">
          <Image
            src="/images/logo.png"
            width={150}
            height={80}
            quality={70}
            alt="footer"
          />
        </div>
        <p className="text-left  ">
          {" "}
          JDS Solicitors is a small and growing family-fri endly firm of
          solicitors, offering a client-centred and flexible legal service to
          its clients and associates alike.
        </p>
        <h5 className="text-2xl font-bold">Stay with us</h5>
        <SocialLogo/>
      </div>

      {/*  #f1f1f1  f2*/}
      <div className="mt-6 flex flex-col gap-3 md:self-end">
        <h1 className="text-3xl text-primary font-bold my-6 md:my-1 md:text-2xl"> Head office</h1>
        <div className="flex gap-2 md:gap-3">
          <div className="flex justify-center items-start  text-lg  md:text-base">
            <div className="bg-primary text-white  p-2 rounded-md ">
              <ImLocation />
            </div>
          </div>
          <div>
            <h5 className="text-xl  font-bold mb-2  md:text-base">Head office address</h5>
            <p>
              St. Luke's Business Centre, Suite 3-4, 85 Tarling Road, London E16
              1HN
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
          <div className="flex justify-center items-start  text-lg ">
            <div className="bg-primary  text-white  p-2 rounded-md">
              <FaFax />
            </div>
          </div>
          <div>
            <h5 className="text-xl  font-bold mb-2">Fax</h5>
            <p>020 7366 6409</p>
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
            <p className="text-primary">admin@jdssolicitors.com</p>
          </div>
        </div>
        <div><span className="text-primary font-semibold text-xs">Working Hours :</span> <span className="text-xs">9.00am - 5.00pm</span></div>
      </div>
      {/********************* 2nd part */}

      <div className="mt-6 flex flex-col gap-3">
        <h1 className="text-3xl text-primary font-bold my-6 md:my-1">  office</h1>
        <div className="flex gap-2">
          <div className="flex justify-center items-start  text-lg ">
            <div className="bg-primary  text-white  p-2 rounded-md">
              <ImLocation />
            </div>
          </div>
          <div>
            <h5 className="text-xl  font-bold mb-2">office address</h5>
            <p>
              St. Luke's Business Centre, Suite 3-4, 85 Tarling Road, London E16
              1HN
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
            <h5 className="text-xl  font-bold mb-2">Tel Available 24/7</h5>
            <p className="text-primary">020 7366 6409</p>
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
        <div><span className="text-primary font-semibold text-xs">Working Hours :</span> <span className="text-xs">9.00am - 5.00pm</span></div>
      </div>
       {/*********************bottom #D8A42E */}
    </section>
           <div className="bg-slate-900 text-white py-10 w-screen  md:absolute md:bottom-px[-40px]"><p className="text-center">Copyright © 2023 JDS Solicitors Limited</p></div>
           </footer>
  );
};

export default Footer;
