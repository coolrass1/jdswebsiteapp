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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="regulatory-heading">
        <div className="container max-w-6xl mx-auto">
          <header>
            <h2 id="regulatory-heading" className="text-2xl sm:text-3xl md:text-4xl pb-4 text-center uppercase font-extrabold text-secondary">
              Regulation & Compliance
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 sm:mb-12"></div>
          </header>
          
          {/* Main Regulatory Statement */}
          <div className="bg-secondary text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mb-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Authorised & Regulated</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                JDS Solicitors Ltd is authorised and regulated by the Solicitors Regulation Authority (SRA)
              </p>
            </div>
          </div>

          {/* Registration Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-white border-2 border-slate-200 hover:border-primary transition-all hover:shadow-xl p-6 rounded-lg text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-sm uppercase font-bold text-secondary mb-2">SRA Number</h4>
              <p className="text-2xl sm:text-3xl font-bold text-primary">653449</p>
            </div>

            <div className="bg-white border-2 border-slate-200 hover:border-primary transition-all hover:shadow-xl p-6 rounded-lg text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-sm uppercase font-bold text-secondary mb-2">VAT Number</h4>
              <p className="text-2xl sm:text-3xl font-bold text-primary">11295557</p>
            </div>

            <div className="bg-white border-2 border-slate-200 hover:border-primary transition-all hover:shadow-xl p-6 rounded-lg text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm uppercase font-bold text-secondary mb-2">Company Number</h4>
              <p className="text-2xl sm:text-3xl font-bold text-primary">11295557</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border-l-4 border-primary shadow-md">
              <h4 className="text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4 uppercase">SRA Regulation</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Authorised and regulated by the Solicitors Regulation Authority. For further details about our regulation and the protections available to you, please visit:
              </p>
              <a 
                href="https://www.sra.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors group"
              >
                <span className="border-b-2 border-primary group-hover:border-secondary">www.sra.org.uk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border-l-4 border-secondary shadow-md">
              <h4 className="text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4 uppercase">Our Commitment</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We adhere strictly to the SRA Standards and Regulations 2019, including the Code of Conduct for Solicitors, RELs and RFLs. We fully comply with all SRA Transparency Rules, ensuring you receive clear information about our services, fees, and how we work before you instruct us. Our regulatory obligations mean we act independently, with integrity, and always in your best interests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
