import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagramSquare,
    FaFax,
  } from "react-icons/fa";

const SocialLogo1 = () => {
  return (
    <div className="flex gap-5">
          
        <div className="flex justify-center items-center text-base text-primary  border-2 rounded-full border-primary h-8 w-8 hover:bg-secondary hover:text-white hover:border-0">
    <FaFacebookF />
  </div>
  <div className="flex justify-center items-center text-base text-primary  border-2 rounded-full border-primary h-8 w-8 hover:bg-slate-600 hover:text-white hover:border-0">
    <FaTwitter />
  </div>
  <div className="flex justify-center items-center text-base text-primary  border-2 rounded-full border-primary h-8 w-8 hover:bg-slate-600 hover:text-white hover:border-0">
    <FaInstagramSquare />
  </div>
  <div className="flex justify-center items-center text-base text-primary  border-2 rounded-full border-primary h-8 w-8 hover:bg-slate-600 hover:text-white hover:border-0">
    <FaFacebookF />
  </div></div>
  )
}

export default SocialLogo1