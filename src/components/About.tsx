"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

const highlights = [
  { icon: "🚀", label: "2+ Years Experience", desc: "Building production apps" },
  { icon: "💼", label: "SaaS & Enterprise", desc: "POS, ERP, AI platforms" },
  { icon: "⚡", label: "Performance First", desc: "35% faster load times" },
  { icon: "🔐", label: "Security Focused", desc: "JWT, OAuth, RBAC" },
];

export default function About(): JSX.Element {
  return (
    <Section id="about" title="About Me" subtitle="Introduction">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Main description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-card rounded-2xl p-8"
        >
          <p className="text-foreground/70 leading-relaxed text-[15px]">
            Software Engineer with 2+ years of experience building production-grade web applications 
            using the <span className="text-cyan-400 font-medium">MERN stack</span>,{" "}
            <span className="text-emerald-400 font-medium">Next.js</span>, and{" "}
            <span className="text-violet-400 font-medium">TypeScript</span>. 
            Skilled in developing AI-driven SaaS products, enterprise POS/ERP systems, and streaming platforms.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">
            Focused on writing clean code, building secure REST APIs, responsive design, and 
            cross-browser compatibility. Comfortable working in Agile teams with CI/CD workflows 
            and thorough code reviews.
          </p>

          {/* Tech stack pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "JWT", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(6, 182, 212, 0.3)",
                boxShadow: "0 8px 30px rgba(6, 182, 212, 0.1)",
              }}
              className="glass-card rounded-xl p-4 flex flex-col items-center text-center cursor-default"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-sm font-semibold text-foreground/90">{item.label}</span>
              <span className="text-xs text-foreground/40 mt-1">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


