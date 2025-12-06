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
    <main>
      <Banner />
      <section aria-labelledby="about-heading">
        <header>
          <h1 id="about-heading" className="text-4xl py-8 text-center uppercase font-extrabold text-secondary ">
            WHO ARE WE?
          </h1>
          <p className=" text-base pt-0 pb-7 text-center  font-extrabold text-secondary ">
            JDS Solicitors is a small and growing family-friendly firm of
            solicitors, offering a client-centred and flexible legal service to
            its clients and associates alike.
          </p>
        </header>
      </section>
      <section aria-labelledby="team-heading">
        <header>
          <h2 id="team-heading" className="text-4xl py-11 text-center uppercase font-extrabold text-secondary ">
            The Team
          </h2>
        </header>
        <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row md:gap-2 md:px-24 md:flex-wrap">
          {teams.map((t, i) => (
            <TeamCard key={i} props={t} />
          ))}
        </div>
      </section>
      <section className="py-24 bg-slate-50" aria-labelledby="practice-areas-heading">
        <header>
          <h2 id="practice-areas-heading" className="text-center text-3xl font-extrabold">
            WE PRACTICE IN THE FOLLOWING AREAS OF LAW
          </h2>
        </header>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap container max-w-screen-xl mx-auto">
          {arealist.map((a, i) => (
            <AreaLawCard props={a} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
