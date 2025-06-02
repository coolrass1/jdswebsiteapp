'use client'
import Image from 'next/image';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail, IoMdTime } from "react-icons/io";
import { useRouter, usePathname } from 'next/navigation';


export const Uppertop = () => {
    const router = useRouter()

    return (
        <section className='px-36 py-10'>

            <main className='hidden lg:flex flex-row items-center justify-between'>
                <div className="cursor-pointer mr-3" onClick={e => router.push('/')}>  
                     <Image
                    src="/images/logo.png"
                    width={200}
                    height={100}
                    quality={70}
                    alt="logo "
                /></div>
                <div className='flex gap-1'>
                    <article className='flex flex-col gap-1 items-center justify-center'>

                        <div className='flex gap-2'><div className="bg-primary  text-white  p-1 rounded-md"><FaPhoneAlt  /> </div><span className='text-sm xl:text-lg text-black'>PHONE</span></div>
                        <div className='pl-2 xl:pl-7 text-sm xl:text-lg'> 02073666409</div>
                    </article>
                    <article className='flex flex-col gap-1 items-center justify-center'>

                        <div className='flex gap-2'><div className="bg-primary  text-white  p-1 rounded-md"><IoMdMail /></div> <span className='text-sm xl:text-lg text-black'>Contact Email</span></div>
                        <div className='pl-12 xl:pl-20'> admin@jdssolicitors.com</div>
                    </article>
                    <article className='flex flex-col gap-1 items-center justify-center'>

                        <div className='flex gap-2'><div className="bg-primary  text-white  p-1 rounded-md"><IoMdTime /></div> <span className='xl:text-lg text-black'>Working Hours</span></div>
                        <div className='pl-2 text-sm  xl:text-lg xl:pl-20'> Mon - Fri : 09:00-17:00</div>
                    </article>
                   

                </div>
                <article className='flex justify-center items-start'>
                        <button onClick={e => router.push('/contact')} className=" uppercase ml-3 text-4 px-4 xl:px-16 sm:py-2 xl:py-4 shadow-xl bg-yellow-600 rounded-se text-white font-bold hover:bg-yellow-900 transition-all duration-300">
                            contact us{" "}
                        </button>
                    </article>
            </main>

        </section>
    )
}
