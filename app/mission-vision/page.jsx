"use client";
import React, { useState } from "react";
import Banner from "../components/Banner";

import { FaPlay } from "react-icons/fa";
import Modal from "../components/Modal";

const Mission = () => {
  const [isModalopen, SetisModalopen] = useState(false);
  //const Handleclick=e=>SetisModalopen(false)
  const Handleclick = () => {
    console.log("")

    /// Unsets Background Scrolling to use when SideDrawer/Modal is closed
    
}
  const showSidebar = () => { 
    console.log("")

   
}
  return (
    <main>
      <Banner />
      <article className=" relative px-3 md:px-0 container max-w-screen-xl mx-auto flex flex-col md:flex-row mt-10 py-10 overflow-hidden">
        {/* <button className="ml-2 px-4 py-1 flex  justify-center items-center gap-2 bg-blue-400 text-white">
        <div className="h-5 w-5 border-4 border-t-primary rounded-full hover:animate-ping"></div>
        processing
      </button> */}

        <aside className=" flex-1">
          <figure className="w-80 h-96 bg-[url('/images/about_thumbnail.jpeg')] bg-center bg-cover flex justify-center items-center">
            <button onClick={showSidebar} className={`${isModalopen?"opacity-0":"animate-ping ease-in duration-700"}  h-20 w-20 z-10 border-2 border-white text-primary flex justify-center items-center rounded-full`} aria-label="Play video about our mission and vision">
              <FaPlay aria-hidden="true" />
            </button>
          </figure>
          {/* {isModalopen && <Modal Handleclick={Handleclick}/>} */}
        </aside>
        <div className="flex-1 flex flex-col gap-10 ">
          <header>
            <h1 className="text-5xl font-extrabold ">
              About Our Mission And Vision
            </h1>
          </header>
          <section aria-labelledby="vision-heading">
            <h2 id="vision-heading" className="text-2xl tracking-wider font-extrabold ">
              Our Vision
            </h2>
            <p>
              Our primary ideology involves a deep respect for the individual and
              client while maintaining a collaborative, diverse, and inclusive
              environment which provides opportunities to drive growth and
              productivity.
            </p>
          </section>
          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-2xl tracking-wider font-extrabold ">
              Our Mission
            </h2>
            <p>
              Our mission is to provide superior service and legal counsel to
              corporate, institutional, and individual clients. We develop
              results-driven solutions to help our clients grow, manage risk, and
              protect assets; and serve as a strong, responsive advocate for their
              interests in the United Kingdom.
            </p>
            <p>
              We are dedicated to sustaining and preserving our legacy of quality,
              integrity, and service by cultivating a team of talented and
              knowledgeable professionals who share our core values, the
              foundation of which is a steadfast belief in The Value of Commitment
              to our clients and our community.
            </p>
          </section>
          <section aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-2xl tracking-wider font-extrabold ">
              Our Core Values
            </h2>
            <p>
              Our core values are at the heart of everything we do. They define
              who we are and what we stand for. They shape how we interact with
              each other, our clients and partners.
            </p>
            <dl>
              <dt className="font-bold">Integrity:</dt>
              <dd>To be honest,
              respectful and ethical in our actions. To honour our commitments and
              to be accountable for our actions, successes and failures.</dd>
              
              <dt className="font-bold">Client Focus:</dt>
              <dd>To fully understand
              clients' requirements, challenges, objectives and goals and to
              maximize the value of our service to our clients including
              safeguarding the security and confidentiality of their information.</dd>
              
              <dt className="font-bold">Excellence:</dt>
              <dd>To relentlessly
              pursue delivery of outstanding results in everything we do. We
              aspire to provide optimal service capped with total client
              satisfaction.</dd>
              
              <dt className="font-bold">Competence:</dt>
              <dd>We retain a team of
              highly diligent and competent lawyers who aim at achieving the best
              possible result in any representation provided our clients.
              Competence remains a focal value in the work of the firm and bring
              this to the ultimate benefit our clients.</dd>
            </dl>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Mission;
