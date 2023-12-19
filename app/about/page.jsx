import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import TeamCard from "../components/TeamCard";
import { teams } from "../components/Datas";
import AreaLawCard from "../components/AreaLawCard";
import { arealist } from "../components/Datas";

const Aboutus = () => {
  //md:bg-[url("/images/slider2.jpeg")] md:bg-auto md:bg-center
  return (
    <>
      <section>
        <Banner />
        <div>
          <h1 className="text-4xl py-8 text-center uppercase font-extrabold text-secondary ">
            WHO ARE WE?
          </h1>
          <p className=" text-base pt-0 pb-7 text-center  font-extrabold text-secondary ">
            JDS Solicitors is a small and growing family-friendly firm of
            solicitors, offering a client-centred and flexible legal service to
            its clients and associates alike.
          </p>
        </div>
        <div>
          <h1 className="text-4xl py-11 text-center uppercase font-extrabold text-secondary ">
            {" "}
            The Team
          </h1>
          <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row md:gap-2 md:px-24 md:flex-wrap">
            {" "}
            {teams.map((t, i) => (
              <TeamCard key={i} props={t} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <h1 className="text-center text-3xl font-extrabold">
          WE PRACTICE IN THE FOLLOWING AREAS OF LAW
        </h1>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap container max-w-screen-xl mx-auto">
          {arealist.map((a, i) => (
            <AreaLawCard props={a} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Aboutus;
