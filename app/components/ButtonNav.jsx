"use client";

import { useEffect, useState } from "react";
import {IoIosArrowUp} from "react-icons/io"

const ButtonNav = () => {
  const [showbutton, setShowbutton] = useState(false);
  const HandlescrollTop = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handlevisibility = () => {
      window.scrollY > 300 ? setShowbutton(true) : setShowbutton(false);
    };
    window.addEventListener("scroll", handlevisibility);
    return () => {
      window.removeEventListener("scroll", handlevisibility);
    };
  }, []);
  return (
    <>
      {showbutton && (
        <button
          onClick={HandlescrollTop}
          className="fixed bottom-5 rounded-md text-white  right-4 md:right-7 z-50 cursor-pointer p-[14px]  text-xs bg-primary"
        >
        <IoIosArrowUp/>
        </button>
      )}
    </>
  );
};

export default ButtonNav;
