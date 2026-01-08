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
    <main className="overflow-x-hidden">
      <Banner />
      <section aria-labelledby="about-heading" className="px-4 sm:px-6">
        <header>
          <h1 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl py-6 sm:py-8 text-center uppercase font-extrabold text-secondary">
            WHO ARE WE?
          </h1>
          <p className="text-sm sm:text-base pt-0 pb-5 sm:pb-7 text-center font-extrabold text-secondary px-4">
            JDS Solicitors is a long standing and growing family-friendly firm of
            solicitors, offering a client-centred and flexible legal service to
            its clients and associates alike.
          </p>
        </header>
      </section>
      <section aria-labelledby="team-heading">
        <header>
          <h2 id="team-heading" className="text-2xl sm:text-3xl md:text-4xl py-8 sm:py-11 text-center uppercase font-extrabold text-secondary">
            The Team
          </h2>
        </header>
        <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row md:gap-2 px-4 sm:px-6 md:px-8 lg:px-24 md:flex-wrap md:justify-center">
          {teams.map((t, i) => (
            <TeamCard key={i} props={t} />
          ))}
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50 px-4 sm:px-6" aria-labelledby="practice-areas-heading">
        <header>
          <h2 id="practice-areas-heading" className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold mb-8 sm:mb-12">
            WE PRACTICE IN THE FOLLOWING AREAS OF LAW
          </h2>
        </header>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap container max-w-screen-xl mx-auto md:justify-center">
          {arealist.map((a, i) => (
            <AreaLawCard props={a} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
