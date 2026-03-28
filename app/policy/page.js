"use client";
import React from "react";
import { motion } from "framer-motion";

const PolicyPage = () => {
  return (
    <div className="bg-white min-h-screen text-secondary">
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-20 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold border-l-4 border-primary pl-6"
          >
            Complaints Procedure & Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-300 max-w-2xl text-lg pl-6"
          >
            We are committed to providing a high-quality legal service to all our clients.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">2.7 Complaints Procedure</h2>
                <div className="bg-slate-50 p-6 md:p-8 rounded-lg border-l-4 border-primary shadow-sm space-y-4">
                  <h3 className="text-xl font-bold mb-4">Complaints</h3>
                  <p className="leading-relaxed">
                    If a client wishes to make a complaint, JDS staff will NOT enter into any dialogue with the  
                    client about that complaint. JDS staff must tell the client that they will speak to the firm’s 
                    Principal about the issue. After discussing the issue with the firm Principal, the staff will 
                    advise the client on how to formally lodge a written complaint.
                  </p>
                  <p className="leading-relaxed">
                    The firm Supervisor in consultation with the principal will immediately deal with a client’s 
                    written complaint. All remedial action about the complaint will be documented and 
                    maintained on the client file. Depending on the nature of the complaint, a review of the  
                    processes leading to the complaint will be conducted by the firm Supervisor in consultation 
                    with the principal.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Complaints Procedure</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Our aim</h3>
                  <p className="leading-relaxed">
                    We aim to deal promptly, fairly and effectively with any complaint a client may have about 
                    any aspect of our service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Our complaints handling policy</h3>
                  <p className="leading-relaxed">
                    We are committed to providing a high-quality legal service to all our clients. When 
                    something goes wrong, we need you to tell us about it. This will help us to improve our 
                    service. There is no question of any charge being made for the time taken to resolve a 
                    complaint.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">How to complain</h3>
                  <p className="leading-relaxed">
                    If you have a complaint, please give the details (by letter, email or telephone) to the Admin  
                    Officer who will pass information to the principal. If you have not dealt directly with a 
                    partner, please refer the partner named in our engagement letter as the Lawyer responsible for 
                    supervising your matter. All complaints received by us are recorded in a central register kept 
                    by this firm (the “Central Register”).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Where a quick resolution of your complaint is possible</h3>
                  <p className="leading-relaxed">
                    It is possible that, after investigation, the partner to whom you first notified your complaint 
                    can quickly resolve it to your satisfaction, in which case s/he will record in writing to you and 
                    to the Central Register, within 7 days of your first contacting us, the agreed manner of 
                    resolution. If, however, your complaint is not resolved to your complete satisfaction within 7 
                    days of your first contacting us, you should notify (by letter, email or telephone) the partner  
                    first contacted by you that you require your complaint to be investigated by another partner.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold">What will happen next?</h3>
                  <ol className="list-decimal pl-5 space-y-6">
                    <li>
                      <p>Another partner will then investigate your complaint. This will normally 
                      involve passing your complaint to our Senior Solicitor who will:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>send you a letter acknowledging receipt of your complaint (within three days of 
                        your requesting an investigation of your complaint by another partner) and 
                        enclosing a copy of this procedure; and</li>
                        <li>nominate a partner unconnected with your matter to review your matter file and 
                        speak to the member of staff who acted for you.</li>
                      </ul>
                    </li>
                    <li>
                      The partner nominated to investigate your complaint will then invite you to a meeting to 
                      discuss and hopefully resolve your complaint. S/he will do this within 14 days of the 
                      Senior Solicitor’s sending you the acknowledgement letter.
                    </li>
                    <li>
                      Within three days of the meeting, the partner who met with you will write to you to 
                      confirm what took place and any solutions s/he has agreed with you.
                    </li>
                    <li>
                      If you do not want a meeting or it is not possible, the partner nominated to deal with  
                      your complaint will send you a detailed written reply to your complaint, including his/her 
                      suggestions for resolving the matter, within 21 days of the Senior Solicitor’s sending you 
                      the acknowledgement letter.
                    </li>
                    <li>
                      At this stage, if you are still not satisfied, you should (by letter, email or telephone) 
                      contact our Senior Director, <span className="font-bold text-primary">AJ OFFIAH</span>, and he will review the decision.
                    </li>
                    <li>
                      Our Senior Director will write to you within 14 days of receiving your request for a 
                      review, confirming our final position on your complaint and explaining our reasons.
                    </li>
                    <li>
                      If you are still not satisfied, you can then contact the Legal Ombudsman:
                      <div className="mt-4 p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                        <p><span className="font-bold">By letter:</span> Legal Ombudsman, PO BOX 6167, Slough SL 1 0EH</p>
                        <p><span className="font-bold">By telephone:</span> callers from UK: 0300 555 0333 / callers from overseas: +44 121 245 3050</p>
                        <p><span className="font-bold">By email:</span> <a href="mailto:enquiries@legalombudsman.org.uk" className="text-primary hover:underline">enquiries@legalombudsman.org.uk</a></p>
                      </div>
                      <p className="mt-4">The Legal Ombudsman may be prepared to investigate your complaint if you satisfy the relevant criteria.</p>
                    </li>
                  </ol>
                </div>

                <div className="mt-8 space-y-4">
                  <p className="leading-relaxed">
                    You may have recourse to the Online Dispute Resolution Platform ("ODR Platform"), 
                    which is an online alternative dispute resolution forum for consumers. The ODR 
                    Platform may be accessed through this link: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">http://ec.europa.eu/odr</a>
                  </p>
                  <p className="italic text-gray-600">
                    If we have to change any of the timescales above, we will let you know and explain why.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="font-bold">Responsible Officer – WILLBERFORCE EHIMIKA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
