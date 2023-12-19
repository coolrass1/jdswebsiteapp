"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter,  usePathname  } from 'next/navigation';

const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();
 
  //${!isopen? "hidden":"flex"}   bg-black transition-all  ease duration-1000
  const [isopen, Setisopen] = useState(false);
  const [activepage, setactivepage] = useState("")

  const Handleclick = (e) => {
    Setisopen(!isopen);
  };
  const Activenav=e=>{setactivepage(pathname)}
  useEffect((e)=>{
    Activenav()
  },[pathname])
  console.log(pathname+ "po")
  return (
    <header className="container max-w-screen-xl md:mx-auto h-24 cursor-pointer bg-white flex flex-row items-center justify-between  ">
      <div onClick={() => {router.push('/');Activenav() }}>
        <Image
          src="/images/logo.png"
          width={200}
          height={100}
          quality={70}
          alt="logo "
        />
      </div>
      <nav>
        <ul className="hidden md:flex flex-row items-center justify-between gap-5 ">
          <li>
            <Link href="#" className={`${activepage=="/"?'text-primary':'text-secondary'} hover:text-primary`}>
              HOME
            </Link>
          </li>
          <li className=" ">
            
              <div className="relative [&>*:nth-child(2)]:hover:z-50 [&>*:nth-child(2)]:hover:opacity-100 ">
               <Link  href="/about" 
               //className=" pb-10 text-secondary hover:text-primary"
               className={`${activepage=="/about"?'text-primary':'text-secondary'} hover:text-primary pb-10`}>
                ABOUT US{" "}
                </Link>
                <div className="   opacity-0 min-h-[100px] min-w-[220px] flex flex-col gap-2 justify-start items-center absolute top-14 bg-white">
                  <Link className="hover:bg-primary w-full text-center py-4" href="/about">Ourcompany</Link>
                  <Link className="hover:bg-primary w-full text-center py-4" href="/solicitors">Our Splicitors</Link>
                </div>
              </div>
          
          </li>
          <li>
            <Link href="/mission-vision" className={`${activepage=="/mission-vision"?'text-primary':'text-secondary'} hover:text-primary pb-10`} >
              MISION & VISION
            </Link>
          </li>
          <li>
            <Link href="/practice" className={`${activepage=="/practice"?'text-primary':'text-secondary'} hover:text-primary pb-10`}>
              PRACTICE AREAS
            </Link>
          </li>
          <li>
            <Link href="/fees" className={`${activepage=="/fees"?'text-primary':'text-secondary'} hover:text-primary pb-10`}>
           FEES
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${activepage=="/contact"?'text-primary':'text-secondary'} hover:text-primary pb-10`}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`absolute z-10 top-24 left-0 text-white bg-black w-full transition-all ease-in overflow-auto  ${
          isopen ? " h-80 " : " h-0 overflow-auto"
        }  md:hidden`}
      >
        <ul onClick={e=>Setisopen(false)}className={`  flex-col items-start justify-between gap-5`}>
        <li className="border-b-2 py-3 border-b-white min-w-full  ">
            <Link className=" ml-3" href="#">
             HOME
            </Link>
          </li>
          <li className="border-b-2 py-3 border-b-white min-w-full  ">
            <Link className=" ml-3" href="#">
              ABOUT US
            </Link>
          </li>
          <li className="border-b-2 py-3 border-b-white min-w-full ">
            <Link className="ml-3" href="/mission-vision">
              MISION & VISION
            </Link>
          </li>
          <li className="border-b-2 py-3 border-b-white min-w-full ">
            <Link className="ml-3" href="#">
              PRACTICE AREAS
            </Link>
          </li>
          <li className="py-3 border-b-white min-w-full ">
            <Link className="ml-3" href="#">
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={Handleclick}
        className="border-2 px-1 py-1 border-gray-500 font-semibold text-xl md:hidden flex justify-center items-center mr-2"
      >
        {!isopen ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
    </header>
  );
};

export default Topbar;
