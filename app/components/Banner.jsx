import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative pt-10 pb-10 px-20 md:px-1 h-40   bg-[url('/images/header_banner1.jpeg')] bg-cover bg-center ">
    <div className="container max-w-screen-xl md:mx-auto flex flex-col gap-3 justify-start ">
      <h1 className=" text-white text-2xl md:leading-10 md:tracking-widest md:text-3xl font-extrabold">Let’s Discover Our Company</h1>
      <div> <Link href="#" className="  text-white hover:text-primary">
            Home   / {" "}
            </Link><span className="text-primary">About</span></div>
    </div>
  </div>
  )
}

export default Banner