"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RegulatoryBanner from "./components/RegulatoryBanner";
import ContactCTA from "./components/ContactCTA";
import StickyContact from "./components/StickyContact";
const imageURL = "/../public/images/slider1.jpeg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen ">
      <AnimatePresence mode="wait">
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Hero />
          <StickyContact />
          <ContactCTA />
          <RegulatoryBanner />
          <Services />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
