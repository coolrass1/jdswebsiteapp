"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter, usePathname } from 'next/navigation';

const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  //${!isopen? "hidden":"flex"}   bg-black transition-all  ease duration-1000
  const [isopen, Setisopen] = useState(false);
  const [activepage, setactivepage] = useState("")

  const Handleclick = (e) => {
    Setisopen(!isopen);
  };
  const Activenav = e => { setactivepage(pathname) }
  useEffect((e) => {
    Activenav()
  }, [pathname])
  console.log(pathname + "po")
  return (
    <header className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 md:mb-7 md:mx-auto min-h-[80px] md:h-24 cursor-pointer bg-white flex flex-row items-center justify-between md:justify-center">
      <div className="md:hidden" onClick={() => { router.push('/'); Activenav() }}>
        <Image
          src="/images/logo.png"
          width={150}
          height={75}
          quality={70}
          alt="logo "
          className="w-[120px] sm:w-[150px]"
        />
      </div>
      <nav>
        <ul className="hidden md:flex flex-row items-center justify-between gap-3 lg:gap-5">
          <li>
            <Link href="/" className={`${activepage == "/" ? 'text-primary' : 'text-secondary'} hover:text-primary`}>
              <span className="text-base lg:text-xl xl:text-2xl">HOME</span>
            </Link>
          </li>
          <li className=" ">

            <div className="relative [&>*:nth-child(2)]:hover:z-50 [&>*:nth-child(2)]:hover:opacity-100 ">
              <Link href="/about"
                className={`${activepage == "/about" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`}>
                <span className="text-base lg:text-xl xl:text-2xl">ABOUT US </span> {" "}
              </Link>
              <div className="opacity-0 min-h-[100px] min-w-[180px] lg:min-w-[220px] flex flex-col gap-2 justify-start items-center absolute top-14 bg-white shadow-lg border border-gray-200">
                <Link className="hover:bg-primary w-full text-center py-3 lg:py-4" href="/about"><span className="text-base lg:text-xl xl:text-2xl">Our Company</span></Link>
                <Link className="hover:bg-primary w-full text-center py-3 lg:py-4" href="/solicitors"><span className="text-base lg:text-xl xl:text-2xl">Our Solicitors</span>
                </Link>
              </div>
            </div>

          </li>
          <li>
            <Link href="/mission-vision" className={`${activepage == "/mission-vision" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`} >
              <span className="text-base lg:text-xl xl:text-2xl">MISSION</span>

            </Link>
          </li>
          <li>
            <Link href="/practice" className={`${activepage == "/practice" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`}>
              <span className="text-base lg:text-xl xl:text-2xl">PRACTICE AREAS</span>

            </Link>
          </li>
          <li>
            <Link href="/fees" className={`${activepage == "/fees" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`}>
              <span className="text-base lg:text-xl xl:text-2xl">FEES</span>

            </Link>
          </li>
          <li>
            <Link href="/policy" className={`${activepage == "/policy" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`}>
              <span className="text-base lg:text-xl xl:text-2xl">POLICY</span>

            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${activepage == "/contact" ? 'text-primary' : 'text-secondary'} hover:text-primary pb-10`}>
              <span className="text-base lg:text-xl xl:text-2xl">CONTACT US</span>

            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`absolute z-50 top-[80px] left-0 text-white bg-black w-full transition-all duration-300 ease-in-out ${isopen ? "h-auto max-h-screen opacity-100" : "h-0 max-h-0 opacity-0 overflow-hidden"
          } md:hidden`}
      >
        <ul onClick={e => Setisopen(false)} className={`flex flex-col items-start justify-between ${isopen ? 'py-2' : ''}`}>
          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/">
              HOME
            </Link>
          </li>
          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/about">
              ABOUT US
            </Link>
          </li>
          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/mission-vision">
              MISSION
            </Link>
          </li>
          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/practice">
              PRACTICE AREAS
            </Link>
          </li>
          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/fees">
              FEES
            </Link>
          </li>

          <li className="border-b border-b-gray-600 min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/policy">
              COMPLAINTS POLICY
            </Link>
          </li>
          <li className="min-w-full">
            <Link className="block py-4 px-6 hover:bg-gray-800 text-base" href="/contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={Handleclick}
        className="border-2 p-2 border-gray-500 font-semibold text-2xl md:hidden flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
      >
        {!isopen ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
    </header>
  );
};

export default Topbar;
