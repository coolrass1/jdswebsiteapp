"use client";
import React, { useState } from "react";
import Banner from "../components/Banner";
import { useForm } from "react-hook-form";
import Thankyou from "../components/Thankyou";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const CONTACT = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [sentSucces, SetsentSucces] = useState(false);
  const [btnloading, setbtnloading] = useState(false);

  const onSubmit = (data) => {
    getdata(data);
  };

  const getdata = async (data) => {
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);

    const endpoint = "/api/mailer";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    SetsentSucces(result.isSent);
    setbtnloading(false);
    reset();
  };

  const ContactForm = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:gap-5 w-full"
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name *"
            className="bg-white text-secondary shadow-md py-3 px-5 border-2 border-gray-200 cursor-pointer outline-none w-full focus:border-primary transition-all rounded-lg text-sm sm:text-base"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            className="bg-white text-secondary shadow-md py-3 px-5 border-2 border-gray-200 cursor-pointer outline-none w-full focus:border-primary transition-all rounded-lg text-sm sm:text-base"
            placeholder="Your Email *"
          />
        </div>
        <input
          type="text"
          {...register("subject", { required: true })}
          className="bg-white text-secondary shadow-md py-3 px-5 border-2 border-gray-200 cursor-pointer outline-none w-full focus:border-primary transition-all rounded-lg text-sm sm:text-base"
          placeholder="Subject *"
        />
        <textarea
          className="bg-white text-secondary shadow-md py-3 px-5 border-2 border-gray-200 cursor-pointer outline-none w-full min-h-[180px] focus:border-primary transition-all rounded-lg text-sm sm:text-base resize-none"
          placeholder="Your Message *"
          {...register("message", { required: true })}
        ></textarea>
        <button
          type="submit"
          disabled={btnloading}
          className="py-3 px-8 uppercase w-full sm:w-auto sm:max-w-[250px] font-bold text-white bg-primary hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all rounded-lg shadow-lg text-sm sm:text-base"
        >
          {btnloading ? "Sending..." : "Send Message"}
        </button>
      </form>
    );
  };

  return (
    <section className="bg-slate-50">
      <Banner />
      
      {/* Contact Info Cards */}
      <div className="bg-white py-12 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2">
              Contact Information
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Get in touch with us today
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white p-2.5 md:p-3 rounded-full">
                  <FaMapMarkerAlt className="text-lg md:text-xl" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-secondary">Address</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                St Luke's Business Centre, Units 3–4, 85 Tarling Road, London E16 1HN
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white p-2.5 md:p-3 rounded-full">
                  <FaPhoneAlt className="text-lg md:text-xl" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-secondary">Phone</h3>
              </div>
              <a href="tel:02073666409" className="text-sm text-primary font-semibold hover:underline">
                0207 366 6409
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white p-2.5 md:p-3 rounded-full">
                  <FaEnvelope className="text-lg md:text-xl" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-secondary">Email</h3>
              </div>
              <a href="mailto:admin@jdssolicitors.com" className="text-sm text-primary font-semibold hover:underline break-all">
                admin@jdssolicitors.com
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white p-2.5 md:p-3 rounded-full">
                  <FaClock className="text-lg md:text-xl" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-secondary">Hours</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Mon - Fri: 9:30am - 5:30pm
              </p>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                Out-of-hours appointments available by prior agreement only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                We have highly experienced and supportive lawyers at your service. Fill out the form and we'll get back to you shortly.
              </p>
            </div>
            
            {!sentSucces ? <ContactForm /> : <Thankyou />}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] sm:h-[500px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5893!2d0.0280!3d51.5103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a859db4a3b9f%3A0x7e8f2c6a3b8f9c0!2s85%20Tarling%20Rd%2C%20London%20E16%201HN%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JDS Solicitors Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
              Why Choose JDS Solicitors?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A long standing and growing family-friendly firm offering client-centred and flexible legal services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">✓</span>
              </div>
              <h3 className="font-bold text-xl text-secondary mb-2">SRA Regulated</h3>
              <p className="text-sm text-gray-600">Authorised and regulated by the Solicitors Regulation Authority (SRA Number: 653449)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">⚖</span>
              </div>
              <h3 className="font-bold text-xl text-secondary mb-2">Experienced Team</h3>
              <p className="text-sm text-gray-600">Highly experienced solicitors providing expert legal advice across multiple practice areas</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">★</span>
              </div>
              <h3 className="font-bold text-xl text-secondary mb-2">Client-Focused</h3>
              <p className="text-sm text-gray-600">Flexible and client-centred approach ensuring personalized legal services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CONTACT;
