"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import type { JSX } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home(): JSX.Element {
  return (
    <div className="font-sans">
      <Header />
      <motion.main 
        className="space-y-20 sm:space-y-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Services />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Education />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Achievements />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
        <motion.footer 
          className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 text-sm text-foreground/60"
          variants={sectionVariants}
        >
          © {new Date().getFullYear()} Asif. All rights reserved.
        </motion.footer>
      </motion.main>
    </div>
  );
}
