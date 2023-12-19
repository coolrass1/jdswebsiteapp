"use client";
import React, { Suspense, useState } from "react";
import Banner from "../components/Banner";
import { useForm, SubmitHandler } from "react-hook-form"
//import { sendMail } from '@/app/services/mailService'
import { onSubmitFetch } from "../components/Utils";
import Thankyou from "../components/Thankyou";

const CONTACT = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const[sentSucces, SetsentSucces]=useState(false)
  const [btnloading,setbtnloading]=useState(false)
 

  const onSubmit = (data) => {getdata(data)}

  const getdata= async (data)=>{
     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
     setbtnloading(true);
   
 
     // API endpoint where we send form data.
     const endpoint = '/api/mailer'
  
     // Form the request for sending data to the server.
     const options = {
       // The method is POST because we are sending data.
       method: 'POST',
       // Tell the server we're sending JSON.
       headers: {
         'Content-Type': 'application/json',
       },
       // Body of the request is the JSON data we created above.
       body: JSONdata,
     }
  
     // Send the form data to our forms API on Vercel and get a response.
     const response = await fetch(endpoint, options)

  
     // Get the response data from server as JSON.
     // If server returns the name submitted, that means the form works.
     const result = await response.json()
     console.log(JSON.stringify(result))
     //console.log("resul ist   .. "+result.isSent)
     SetsentSucces(result.isSent)
     setbtnloading(false);
    reset();
     
  }
const Form1=()=>{return(<form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-7 px-1 py-28"
              
            >
              <div>
                <input
                  type="text"
                  {...register("name")} 
                  //className="py-2  my-7 md:my-0 w-full md:w-80  border-2 border-black "
                  placeholder="Enter your name"
                  className="bg-slate-50 text-secondary shadow-sm
                  py-2 px-10 border-2 border-gray-100 cursor-pointer
                   outline-none "
                 
                />{" "}
                <input
                  type="email"
                  {...register("email")} 
                  className="bg-slate-50 text-secondary shadow-sm
                  py-2 px-10 border-2 border-gray-100 cursor-pointer
                   outline-none "
                   placeholder="Enter your email"
                  //className="py-2 w-full  md:w-80 border-2 border-black"
                />
              </div>
              <input
                type="text"
                {...register("subject")} 
                className="bg-slate-50 text-secondary shadow-sm
                 py-2 px-10 border-2 border-gray-100 cursor-pointer
                  outline-none "
                placeholder="Your subject"
              />

              <textarea
                className="bg-slate-50 text-secondary 
                shadow-sm py-2 px-10 border-2 border-gray-100
                 cursor-pointer outline-none "
                id="msg"
                name="user_message"
                placeholder="Your message"
                {...register("message")} 
              ></textarea>
              <button type="submit" disabled={btnloading ? true : false} className="py-2  border-2 border-primary px-2 mx-1 inline uppercase md:w-44 hover:bg-white hover:text-primary font-extrabold text-white bg-primary disabled:bg-black">
                send message
              </button>
            </form>)}

  return (
    <section>
      <Banner />
      <Suspense
        fallback={<p className="bg-black min-h-[2000px]">Loading feed...</p>}
      >
        <div className="container max-w-screen-xl md:mx-auto px-3 flex flex-col gap-7 md:flex-row justify-between items-center">
          <div className="flex1">
            {!sentSucces?<Form1/>:<Thankyou/>}
          </div>
          <div className="flex1 flex flex-col">
            <div>
              <h1 className="text-3xl text-secondary font-extrabold ">
                Don’t hesitate to reach out!
              </h1>
              <p className="text-secondary pr-2 md:py-4">
                We have highly experienced and supportive lawyers at your
                service.
              </p>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-extrabold uppercase  text-secondary ">
                    <span className="bg-primary pl-2 py-1">Hea</span>d office
                  </h2>
                  <p className="w-[250px]">
                    <span className="font-extrabold mr-1">Address:</span> St.
                    Luke's Business Centre, Suite 3-4, 85 Tarling Road, London
                    E16 1HN
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Phone:
                    <span className="text-primary ml-2">
                      020 7366 6409
                    </span>{" "}
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Email:{" "}
                    <span className="text-primary ml-2">
                      admin@jdssolicitors.com
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-extrabold uppercase  text-secondary ">
                    <span className="bg-primary pl-2 py-1 ">o</span>ffice
                  </h2>
                  <p className="w-[250px]">
                    <span className="font-extrabold mr-1">Address:</span>Unit 1,
                    Lighterage Court, 41 High Street, Brentford, Middlesex TW8
                    0FT
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Phone:
                    <span className="text-primary ml-2">
                      020 7366 6409
                    </span>{" "}
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Email:{" "}
                    <span className="text-primary ml-2">
                      admin@jdssolicitors.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
};

export default CONTACT;
