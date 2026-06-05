import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Banner = ({ title = "Let's Discover JDSSOLICITORS", currentTab = "About" }) => {
  return (
    <div className="relative min-h-[180px] sm:min-h-[200px] bg-[url('/images/header_banner1.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/70 to-secondary/50" />
      <div className="relative container max-w-screen-xl mx-auto flex flex-col justify-center min-h-[180px] sm:min-h-[200px] px-4 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
        <nav className="mt-3 flex items-center gap-2 text-sm sm:text-base" aria-label="Breadcrumb">
          <Link href="/" className="text-white/80 hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <FaChevronRight className="text-white/40 text-[10px]" />
          <span className="text-primary font-semibold">{currentTab}</span>
        </nav>
      </div>
    </div>
  )
}

export default Banner