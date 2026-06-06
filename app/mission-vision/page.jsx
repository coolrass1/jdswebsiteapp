"use client";
import React, { useState } from "react";
import Banner from "../components/Banner";
import { FaGem, FaUsers, FaStar, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Mission = () => {

  const coreValues = [
    {
      title: "Integrity",
      icon: <FaShieldAlt className="text-3xl" />,
      description: "To be honest, respectful and ethical in our actions. To honour our commitments and to be accountable for our actions, successes and failures."
    },
    {
      title: "Client Focus",
      icon: <FaUsers className="text-3xl" />,
      description: "To fully understand clients' requirements, challenges, objectives and goals and to maximize the value of our service to our clients including safeguarding the security and confidentiality of their information."
    },
    {
      title: "Excellence",
      icon: <FaStar className="text-3xl" />,
      description: "To relentlessly pursue delivery of outstanding results in everything we do. We aspire to provide optimal service capped with total client satisfaction."
    },
    {
      title: "Competence",
      icon: <FaGem className="text-3xl" />,
      description: "We retain a team of highly diligent and competent lawyers who aim at achieving the best possible result in any representation provided our clients."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-white overflow-hidden">
      <Banner title="Mission & Vision" currentTab="Mission & Vision" />

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="container max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Commitment</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-8 leading-tight">
              Dedicated to Excellence, <br /> Driven by Integrity.
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-primary mx-auto mb-8"
            ></motion.div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              At JDS Solicitors, our primary ideology involves a deep respect for the individual and client
              while maintaining a collaborative, diverse, and inclusive environment which provides
              opportunities to drive growth and productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Overlapping Section */}
      <section className="bg-bgprimary py-24 px-4 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Visual Element */}
            <motion.div 
              className="flex-1 relative w-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div 
                  className="absolute inset-0 bg-[url('/images/about_img.jpeg')] bg-center bg-cover transition-transform duration-1000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                
                {/* Descriptive Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Foundation</p>
                  <h3 className="text-2xl font-bold">Years of Legal Excellence</h3>
                </div>
              </div>
              <motion.div 
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-primary/40 rounded-tl-3xl -z-0" 
              />
              <motion.div 
                initial={{ x: -20, y: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 w-full h-full border-8 border-primary/10 rounded-2xl -z-0 hidden md:block" 
              />
            </motion.div>

            {/* Content Element */}
            <div className="flex-1 space-y-12">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                  To provide superior service and legal counsel to corporate, institutional, and individual clients,
                  serving as a strong, responsive advocate for their interests in the United Kingdom.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Our mission is to develop results-driven solutions to help our clients grow, manage risk,
                    and protect assets. We are dedicated to sustaining and preserving our legacy of quality,
                    integrity, and service.
                  </p>
                  <p>
                    By cultivating a team of talented and knowledgeable professionals who share our core values,
                    we maintain a steadfast belief in The Value of Commitment to our clients and our community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 bg-secondary text-white">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <p className="text-primary/80 font-medium tracking-wide">The Foundation of Our Practice</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-screen-md mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="border-2 border-primary/20 p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">Want to learn more about us?</h2>
            <p className="text-gray-600 mb-8">
              We are committed to providing the highest quality legal services. Contact us today to discuss how we can help you or your organization.
            </p>
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(216, 164, 46, 0)", "0px 0px 20px rgba(216, 164, 46, 0.4)", "0px 0px 0px rgba(216, 164, 46, 0)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-primary text-white px-10 py-4 font-bold rounded-lg hover:bg-secondary transition-all shadow-lg"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Mission;
