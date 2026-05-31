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
                      <h4 className="font-bold text-lg mb-3">Legal Ombudsman</h4>
                      <p className="mb-4 leading-relaxed">
                        Upon going through our internal complaint procedure and remain unsatisfied with our final response/resolution, 
                        you can then refer your complaint to the Legal Ombudsman, it is an independent complaints body appointed by 
                        the Legal Services Act, who can investigate complaints about the legal service you received.
                      </p>
                      <p className="mb-4 leading-relaxed">
                        The Legal Ombudsman will usually check that you have tried to resolve your complaint with JDS Solicitors us 
                        first before then making your complaint to the Legal Ombudsman.
                      </p>
                      <p className="mb-4 leading-relaxed">
                        <span className="font-bold text-primary">You must refer your complaint within six months of receiving our final response</span>, and in any event no more than one year from either:
                      </p>
                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>The act or omission that gave rise to the complaint; or</li>
                        <li>When you should reasonably have known there was cause for complaint.</li>
                      </ul>
                      <p className="mb-4 leading-relaxed">
                        If you would like more information about the Legal Ombudsman, you can contact them directly.
                      </p>
                      <div className="mt-4 p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                        <p className="font-bold text-primary mb-2">You can contact the Legal Ombudsman by:</p>
                        <p><span className="font-bold">Telephone:</span> 0300 555 0333</p>
                        <p><span className="font-bold">Email:</span> <a href="mailto:enquiries@legalombudsman.org.uk" className="text-primary hover:underline">enquiries@legalombudsman.org.uk</a></p>
                        <p><span className="font-bold">Website:</span> <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.legalombudsman.org.uk</a></p>
                        <div className="pt-3 border-t border-slate-300 mt-3">
                          <p className="font-bold mb-1">The Legal Ombudsman correspondence address is:</p>
                          <p>Legal Ombudsman, PO Box 6167, Slough, SL1 0EH</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h4 className="font-bold text-lg mb-3">Solicitors Regulation Authority (SRA)</h4>
                      <p className="mb-4 leading-relaxed">
                        The SRA can help you if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristic.
                      </p>
                      <p className="mb-4 leading-relaxed">
                        You can raise your concerns with the Solicitors Regulation Authority at any time.
                      </p>
                      <div className="mt-4 p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                         <p><span className="font-bold">Website:</span> <a href="https://www.sra.org.uk/consumers/problems/reports-solicitor/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.sra.org.uk</a></p>
                         <p><span className="font-bold">Telephone:</span> 0370 606 2555</p>
                         <p><span className="font-bold">Address:</span> The Cube, 199 Wharfside Street, Birmingham, B1 1RN</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="mt-8 space-y-4">
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
