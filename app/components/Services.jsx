"use client";
import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { listitems } from "./Datas.js";
import Image from "next/image";

const Services = () => {
  const [obj, setobj] = useState([]);

  useEffect(() => {
    const rass = listitems;
    setobj(rass);
  }, []);

  const obj1 = {
    url: "/images/one.svg",
    title: "Employment law",
    content:
      "We enjoy an excellent reputation of providing strategic advice in areas of general and corporate criminal law",
  };
  return (
    <section className="bg-bgprimary">
     <div className=" container md:max-w-screen-md md:mx-auto lg:max-w-screen-xl">
      <h1 className="text-3xl text-center md:pt-12 mb-3 text-secondary font-semibold ">
        ABOUT JDS SOLICITORS
      </h1>
      <p className=" text-center  mb-3  text-secondary ">
        JDS Solicitors is a small and growing family-friendly firm of
        solicitors, offering a client-centred and flexible legal service to its
        clients and associates alike.
      </p>
      <div className="bg-bgprimary flex flex-col justify-between items-center pt-20 gap-28">
        <h1 className="text-4xl text-center text-secondary font-bold">
          SERVICES
        </h1>

        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:container md:max-w-screen-xl md:mx-auto">
          {obj?.map((o, index) => (
            <CardItem key={index} props={o} />
          ))}
          {/* <CardItem props={obj}/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/> */}
        </div>
      </div>
      <div className="relative h-96 w-full mt-8 consultation_sm">
        <div
          className="absolute inset-0 text-center text-white flex flex-col gap-6 justify-center items-center "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-center">GET A FREE CONSULTATION</h1>
          <p>
            We help people effectively fight their offenders back and
            successfully defend their own stand.
          </p>
          <button className="px-8 py-2 bg-yellow-600 rounded-se text-white">
            contact us{" "}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
