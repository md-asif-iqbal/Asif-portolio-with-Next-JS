"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero(): JSX.Element {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text"
          >
            MERN Stack Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base/7 text-foreground/80"
          >
            Passionate about building scalable, secure web apps with React, Next.js, Node.js, Express.js, and MongoDB. I write clean, maintainable TypeScript and deliver high-performance, user-focused solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <motion.a
              href="/Md_Asif_Iqbal_CV.pdf"
              className="rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium cursor-pointer inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                backgroundColor: "#a855f7",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                duration: 0.2
              }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-black/10 dark:border-white/15 px-5 py-2 text-sm font-medium cursor-pointer inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                borderColor: "#a855f7",
                backgroundColor: "rgba(168, 85, 247, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                duration: 0.2
              }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full flex items-center justify-center"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}


