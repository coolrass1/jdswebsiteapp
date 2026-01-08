'use client'
import Image from 'next/image';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail, IoMdTime } from "react-icons/io";
import { useRouter, usePathname } from 'next/navigation';


export const Uppertop = () => {
    const router = useRouter()

    return (
        <section className='px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 py-4 lg:py-10'>

            <main className='hidden lg:flex flex-row items-center justify-between gap-4'>
                <div className="cursor-pointer flex-shrink-0" onClick={e => router.push('/')}>  
                     <Image
                    src="/images/logo.png"
                    width={200}
                    height={100}
                    quality={70}
                    alt="logo "
                    className="w-[150px] lg:w-[180px] xl:w-[200px]"
                /></div>
                <div className='flex gap-2 lg:gap-4 flex-wrap lg:flex-nowrap'>
                    <article className='flex flex-col gap-1 items-center justify-center min-w-[140px]'>

                        <div className='flex gap-2 items-center'><div className="bg-primary text-white p-1 rounded-md"><FaPhoneAlt /> </div><span className='text-xs lg:text-sm xl:text-base text-black font-medium'>PHONE</span></div>
                        <div className='text-xs lg:text-sm xl:text-base'> 02073666409</div>
                    </article>
                    <article className='flex flex-col gap-1 items-center justify-center min-w-[180px]'>

                        <div className='flex gap-2 items-center'><div className="bg-primary text-white p-1 rounded-md"><IoMdMail /></div> <span className='text-xs lg:text-sm xl:text-base text-black font-medium'>Contact Email</span></div>
                        <div className='text-xs lg:text-sm xl:text-base'> admin@jdssolicitors.com</div>
                    </article>
                    <article className='flex flex-col gap-1 items-center justify-center min-w-[180px]'>

                        <div className='flex gap-2 items-center'><div className="bg-primary text-white p-1 rounded-md"><IoMdTime /></div> <span className='text-xs lg:text-sm xl:text-base text-black font-medium'>Working Hours</span></div>
                        <div className='text-xs lg:text-sm xl:text-base'> Mon - Fri : 09:00-17:00</div>
                    </article>
                   

                </div>
                <article className='flex justify-center items-start flex-shrink-0'>
                        <button onClick={e => router.push('/contact')} className="uppercase w-full sm:w-auto text-xs lg:text-sm xl:text-base px-6 lg:px-12 xl:px-16 py-2 lg:py-3 xl:py-4 shadow-xl bg-yellow-600 rounded-se text-white font-bold hover:bg-yellow-900 transition-all duration-300">
                            contact us{" "}
                        </button>

                    </article>
            </main>

        </section>
    )
}
