import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-20 min-h-[140px] sm:h-40 bg-[url('/images/header_banner1.jpeg')] bg-cover bg-center">
    <div className="container max-w-screen-xl mx-auto flex flex-col gap-2 sm:gap-3 justify-start">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight md:leading-10 md:tracking-widest">Let's Discover JDSSOLICITORS</h1>
      <div className="text-sm sm:text-base"> <Link href="/" className="text-white hover:text-primary">
            Home   / {" "}
            </Link><span className="text-primary">About</span></div>
    </div>
  </div>
  )
}

export default Banner