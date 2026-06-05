"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../components/Banner";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaTrain,
  FaBus,
  FaParking,
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const inputClass = (errors, field, extra = "") =>
  `w-full bg-white text-secondary border-2 outline-none transition-all rounded-lg text-sm sm:text-base py-3 px-4 ${
    errors?.[field]
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
      : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
  } ${extra}`;

const selectClass = (errors, field) =>
  `w-full bg-white text-secondary border-2 outline-none transition-all rounded-lg text-sm sm:text-base py-3 px-4 appearance-none cursor-pointer ${
    errors?.[field]
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
      : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
  }`;

const ContactForm = ({
  handleSubmit,
  register,
  errors,
  onSubmit,
  btnloading,
  messageLength,
  maxLength,
}) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-5 w-full"
  >
    <div className="flex flex-col sm:flex-row gap-5 w-full">
      <div className="flex-1">
        <label htmlFor="name" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Smith"
          autoComplete="name"
          className={inputClass(errors, "name")}
          {...register("name", { required: "Please enter your name" })}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs font-medium text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex-1">
        <label htmlFor="phone" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="020 1234 5678"
          autoComplete="tel"
          className={inputClass(errors, "phone")}
          {...register("phone", {
            required: "Please enter your phone number",
            pattern: {
              value: /^[0-9+\s()-]{7,20}$/,
              message: "Please enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs font-medium text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        placeholder="john.smith@example.com"
        autoComplete="email"
        className={inputClass(errors, "email")}
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {errors.email.message}
        </p>
      )}
    </div>

    <div>
      <label htmlFor="practiceArea" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
        Area of Law <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          id="practiceArea"
          className={selectClass(errors, "practiceArea")}
          {...register("practiceArea", {
            required: "Please select an area of law",
          })}
        >
          <option value="">Select an area of law...</option>
          <option value="family-law">Family Law</option>
          <option value="housing-law">Housing Law</option>
          <option value="immigration">Immigration</option>
          <option value="welfare-benefits">Welfare Benefits</option>
          <option value="police-station">Police Station Representation</option>
          <option value="crime">Crime & Criminal Defence</option>
          <option value="civil-litigation">Civil Litigation</option>
          <option value="other">Other / General Enquiry</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {errors.practiceArea && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {errors.practiceArea.message}
        </p>
      )}
    </div>

    <div>
      <label htmlFor="subject" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
        Subject <span className="text-red-500">*</span>
      </label>
      <input
        id="subject"
        type="text"
        placeholder="Brief description of your enquiry"
        autoComplete="off"
        className={inputClass(errors, "subject")}
        {...register("subject", { required: "Please enter a subject" })}
      />
      {errors.subject && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {errors.subject.message}
        </p>
      )}
    </div>

    <div>
      <label htmlFor="message" className="block text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
        Your Message <span className="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        placeholder="Please describe your legal matter in detail..."
        rows={6}
        className={inputClass(errors, "message", "min-h-[140px] resize-none")}
        {...register("message", {
          required: "Please enter your message",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
          maxLength: {
            value: maxLength,
            message: `Message cannot exceed ${maxLength} characters`,
          },
        })}
      ></textarea>
      <div className="flex justify-between items-center mt-1.5">
        {errors.message ? (
          <p className="text-xs font-medium text-red-500">
            {errors.message.message}
          </p>
        ) : (
          <span className="text-xs text-gray-400">Minimum 10 characters</span>
        )}
        <span className={`text-xs font-medium ${messageLength > maxLength * 0.9 ? "text-amber-500" : "text-gray-400"}`}>
          {messageLength}/{maxLength}
        </span>
      </div>
    </div>

    <div className="flex items-start gap-2.5">
      <input
        id="consent"
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
        {...register("consent", {
          required: "You must agree to the privacy policy",
        })}
      />
      <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
        I consent to JDS Solicitors processing my personal data in accordance with the{" "}
        <a href="/privacy" className="text-primary hover:text-yellow-700 underline underline-offset-2 font-medium">
          Privacy Policy
        </a>
        . <span className="text-red-500">*</span>
      </label>
    </div>
    {errors.consent && (
      <p className="text-xs font-medium text-red-500 -mt-3">
        {errors.consent.message}
      </p>
    )}

    <div className="pt-2">
      <button
        type="submit"
        disabled={btnloading}
        className="py-4 px-10 uppercase w-full sm:w-auto font-bold text-white bg-secondary hover:bg-[#00102b] active:scale-[0.98] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all rounded-lg shadow-lg text-sm sm:text-base inline-flex items-center justify-center gap-2.5"
      >
        {btnloading ? (
          <>
            <FaSpinner className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <FaArrowRight className="text-xs" />
          </>
        )}
      </button>
    </div>
  </form>
);

const SuccessState = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="py-6"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
        <FaCheckCircle className="text-green-600 text-2xl" />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-secondary">Thank You!</h3>
        <p className="text-sm text-gray-600 mt-0.5">
          Your enquiry has been received.
        </p>
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 mb-6">
      <h4 className="text-sm font-bold text-secondary mb-3 uppercase tracking-wide">
        What happens next?
      </h4>
      <ol className="space-y-3">
        <li className="flex gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
            1
          </span>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-secondary">Acknowledgement:</span> We&rsquo;ll review your enquiry and confirm receipt within 24-48 business hours.
          </p>
        </li>
        <li className="flex gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
            2
          </span>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-secondary">Specialist review:</span> Your matter will be directed to the appropriate solicitor in our team.
          </p>
        </li>
        <li className="flex gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
            3
          </span>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-secondary">Initial contact:</span> A solicitor will contact you to discuss your case and next steps.
          </p>
        </li>
      </ol>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
      <p className="text-xs text-gray-500 flex items-center gap-1.5">
        <FaShieldAlt className="text-primary text-[10px]" />
        Your information is kept strictly confidential.
      </p>
      <button
        onClick={onReset}
        className="text-sm font-semibold text-primary hover:text-yellow-700 transition-colors inline-flex items-center gap-1.5"
      >
        Send another enquiry
        <FaArrowRight className="text-[10px]" />
      </button>
    </div>
  </motion.div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const MESSAGE_MAX_LENGTH = 2000;

const CONTACT = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [sentSucces, SetsentSucces] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [serverError, setServerError] = useState("");

  const messageValue = watch("message") || "";
  const messageLength = messageValue.length;

  const onSubmit = (data) => {
    getdata(data);
  };

  const getdata = async (data) => {
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);
    setServerError("");

    const endpoint = "/api/mailer";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if (result.isSent) {
        SetsentSucces(true);
        reset();
      } else {
        setServerError("Failed to send message. Please try again or call us directly.");
      }
    } catch (error) {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setbtnloading(false);
    }
  };

  return (
    <section className="bg-slate-50">
      <Banner title="Contact Us" currentTab="Contact" />

      {/* Contact Info Cards */}
      <div className="bg-white py-14 md:py-20">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
              Contact Information
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
            <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-lg mx-auto">
              Reach out to our London office by phone, email, or in person. We respond to all enquiries within 24&ndash;48 business hours.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
              <div className="pl-4">
                <div className="bg-secondary text-primary w-11 h-11 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <h3 className="font-bold text-base text-secondary mb-2">Our Office</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  St Luke&rsquo;s Business Centre, Units 3&ndash;4, 85 Tarling Road, London E16 1HN
                </p>
                <a
                  href="https://maps.google.com/?q=85+Tarling+Rd,+London+E16+1HN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider"
                >
                  Get Directions <FaArrowRight className="text-[9px]" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
              <div className="pl-4">
                <div className="bg-secondary text-primary w-11 h-11 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <h3 className="font-bold text-base text-secondary mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-1">
                  Speak directly with our team.
                </p>
                <a
                  href="tel:02073666409"
                  className="text-lg font-bold text-secondary hover:text-primary transition-colors"
                >
                  0207 366 6409
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
              <div className="pl-4">
                <div className="bg-secondary text-primary w-11 h-11 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <h3 className="font-bold text-base text-secondary mb-2">Email</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-1">
                  Send your enquiry directly.
                </p>
                <a
                  href="mailto:admin@jdssolicitors.com"
                  className="text-sm font-bold text-secondary hover:text-primary transition-colors break-all"
                >
                  admin@jdssolicitors.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
              <div className="pl-4">
                <div className="bg-secondary text-primary w-11 h-11 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <FaClock className="text-sm" />
                </div>
                <h3 className="font-bold text-base text-secondary mb-2">Opening Hours</h3>
                <p className="text-sm text-gray-700 font-semibold mb-1">
                  Mon &ndash; Fri: 9:30am &ndash; 5:30pm
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Out-of-hours appointments available by prior agreement only.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 md:p-10 rounded-2xl shadow-[0_4px_24px_-12px_rgba(0,23,67,0.12)] border border-slate-100"
          >
            <div className="mb-7">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mt-2 mb-3 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                We have highly experienced and supportive lawyers at your
                service. Fill out the form and we&rsquo;ll get back to you
                shortly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {sentSucces ? (
                <SuccessState
                  key="success"
                  onReset={() => {
                    SetsentSucces(false);
                    setServerError("");
                  }}
                />
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {serverError && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-red-800">{serverError}</p>
                        <p className="text-xs text-red-600 mt-1">
                          For urgent matters, call us directly at{" "}
                          <a href="tel:02073666409" className="font-semibold underline">
                            0207 366 6409
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                  <ContactForm
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    onSubmit={onSubmit}
                    btnloading={btnloading}
                    messageLength={messageLength}
                    maxLength={MESSAGE_MAX_LENGTH}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Map + Travel Directions Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-[0_4px_24px_-12px_rgba(0,23,67,0.12)] overflow-hidden h-[300px] sm:h-[340px] border border-slate-100">
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

            {/* Travel Directions */}
            <div className="bg-gradient-to-br from-secondary to-[#052669] text-white p-6 sm:p-7 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                <FaTrain className="text-sm" />
                Travel Directions
              </h4>
              <div className="space-y-5">
                <div className="flex gap-3.5">
                  <div className="mt-0.5 bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    <FaTrain className="text-xs text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wide text-slate-300">By Tube &amp; DLR</h5>
                    <ul className="text-xs text-slate-100 space-y-1 mt-1.5 list-disc pl-4 leading-relaxed">
                      <li><span className="font-semibold text-white">Royal Victoria Station</span> (DLR) &ndash; 0.2 miles (approx. 4 min walk)</li>
                      <li><span className="font-semibold text-white">Canning Town Station</span> (Jubilee Line &amp; DLR) &ndash; 0.3 miles (approx. 6 min walk)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="mt-0.5 bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    <FaBus className="text-xs text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wide text-slate-300">By Bus</h5>
                    <p className="text-xs text-slate-100 leading-relaxed mt-1.5">
                      Closest stop: <span className="font-semibold text-white">Tarling Road</span>, served by routes <span className="font-semibold text-primary">147</span>, <span className="font-semibold text-primary">474</span>, and <span className="font-semibold text-primary">N551</span>.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="mt-0.5 bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    <FaParking className="text-xs text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wide text-slate-300">Parking</h5>
                    <p className="text-xs text-slate-100 leading-relaxed mt-1.5">
                      Pay-and-display bays available on Tarling Road and surrounding streets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href="https://maps.google.com/?q=85+Tarling+Rd,+London+E16+1HN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 transition-all rounded-lg text-xs font-bold uppercase tracking-wider text-white gap-2 border border-white/10"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-14 md:py-20 border-t border-slate-100">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
              Why Choose JDS Solicitors?
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              A long-standing and growing family-friendly firm offering client-centred and flexible legal services.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group bg-slate-50 p-7 rounded-2xl border border-slate-200/60 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md shadow-secondary/20">
                <FaShieldAlt className="text-primary text-xl" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">SRA Regulated</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Authorised and regulated by the Solicitors Regulation Authority (SRA No. 653449).
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-slate-50 p-7 rounded-2xl border border-slate-200/60 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md shadow-secondary/20">
                <FaUsers className="text-primary text-xl" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Experienced Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Highly experienced solicitors providing expert legal advice across multiple practice areas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-slate-50 p-7 rounded-2xl border border-slate-200/60 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md shadow-secondary/20">
                <FaHandshake className="text-primary text-xl" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Client-Focused</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Flexible and client-centred approach ensuring personalised legal services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CONTACT;
