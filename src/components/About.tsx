"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
  return (
    <Section id="about" title="About me" subtitle="Introduction">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            borderColor: "rgba(168, 85, 247, 0.3)"
          }}
          className="rounded-xl border border-black/10 dark:border-white/10 p-6 glass hover:bg-gradient-to-br hover:from-white/50 hover:to-purple-50/30 dark:hover:from-gray-800/50 dark:hover:to-purple-900/20 transition-all duration-500"
        >
          <motion.p 
            className="text-foreground/80 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate MERN Stack Developer with a knack for turning complex problems into elegant, efficient web applications. Skilled in JavaScript, React, Node.js, and MongoDB, along with Next.js, TypeScript, Tailwind CSS, and Express.js. I focus on writing clean, scalable code and building secure APIs using JWT and RBAC.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            "JavaScript / TypeScript",
            "React / Next.js",
            "Node.js / Express.js",
            "MongoDB / PostgreSQL / MySQL",
            "Tailwind CSS / Material UI / Bootstrap",
            "JWT / RBAC / Security",
          ].map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: idx * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.08,
                y: -3,
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                borderColor: "rgba(168, 85, 247, 0.4)",
                boxShadow: "0 8px 25px rgba(168, 85, 247, 0.25)",
                color: "rgba(168, 85, 247, 0.9)"
              }}
              className="rounded-lg border border-black/10 dark:border-white/10 px-4 py-3 text-sm cursor-default transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 font-medium"
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}


