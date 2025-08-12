"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "BulipeTech Ltd.",
    role: "Software Engineer",
    location: "Dhaka",
    period: "Jan 2025 - Present",
    highlights: [
      "Delivered 3 full‑stack web apps optimized for speed and security.",
      "Mentored juniors; onboarding and code quality reviews.",
      "Reusable React components; complex state via Context API.",
      "Integrated REST APIs, payments, SMS, and admin dashboards.",
      "Agile Scrum participation; caching and query tuning with MongoDB.",
      
    ],
  },
  {
    company: "Repwoop IT Company",
    role: "Full Stack Developer",
    location: "Dhaka",
    period: "Jul 2024 - Dec 2024",
    highlights: [
      "Delivering full‑stack features across multiple products.",
      "Next.js, Node.js, and MongoDB; secure JWT + RBAC flows.",
      "Leading performance initiatives and component libraries.",
      "Code reviews for quality.",
    ],
  },
];

export default function Experience(): JSX.Element {
  return (
    <Section id="experience" title="Experience" subtitle="Professional">
      <div className="relative">
        <motion.div 
          className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-fuchsia-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-12"
            >
              <motion.span 
                className="absolute left-[10px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 shadow-[0_0_0_4px_rgba(168,85,247,0.15)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 300
                }}
              />
              <motion.div 
                className="rounded-xl border border-black/10 dark:border-white/10 p-4 glass"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  borderColor: "rgba(168, 85, 247, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold tracking-tight">{exp.role}</h3>
                    <p className="text-sm text-foreground/70">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-sm text-foreground/60">{exp.period}</p>
                </div>
                <ul className="mt-3 grid gap-1 text-sm text-foreground/80 sm:grid-cols-2">
                  {exp.highlights.map((h, highlightIdx) => (
                    <motion.li 
                      key={h} 
                      className="leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (idx * 0.1) + (highlightIdx * 0.05) + 0.2
                      }}
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}


