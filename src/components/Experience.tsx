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
  color: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "NaasMind",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "Nov 2025 – Present",
    color: "#06b6d4",
    highlights: [
      "Own end-to-end development of multiple SaaS products using Next.js, React, Node.js, and MongoDB, serving hundreds of active users.",
      "Designed and shipped an AI-powered interview platform leveraging Google Gemini for resume parsing, question generation, and real-time candidate evaluation.",
      "Architected an enterprise POS/ERP system with modules for billing, inventory, HR payroll, multi-branch reporting, and financial ledgers.",
      "Implemented JWT authentication, Google OAuth, and granular RBAC; managed Vercel deployments with automated CI/CD, reducing release cycles by ~40%.",
    ],
  },
  {
    company: "BulipeTech Ltd.",
    role: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    period: "Jan 2025 – Oct 2025",
    color: "#10b981",
    highlights: [
      "Shipped three full-stack applications from scratch, each optimized for performance, scalability, and data security.",
      "Mentored two junior developers through code reviews, pair programming, and structured onboarding sessions.",
      "Built reusable React components with Context API, cutting new-feature development time by about 25%.",
      "Integrated REST APIs and third-party services (payment gateways, bulk SMS) into admin dashboards; improved MongoDB performance by 30% through indexing and caching.",
    ],
  },
  {
    company: "Repwoop IT Company",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "Jul 2024 – Dec 2024",
    color: "#8b5cf6",
    highlights: [
      "Led frontend and backend development of a POS product with real-time billing, stock tracking, and reporting dashboards.",
      "Built responsive interfaces with Next.js and Tailwind CSS; developed REST backend services on Node.js, Express, and MongoDB.",
      "Added JWT authentication and role-based permissions for secure multi-user access.",
      "Reduced page load times by ~35% with code splitting, lazy loading, and query optimization; configured CI/CD for production deployments.",
    ],
  },
];

export default function Experience(): JSX.Element {
  return (
    <Section id="experience" title="Experience" subtitle="Professional">
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-[19px] top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(16,185,129,0.3), rgba(139,92,246,0.3), transparent)",
          }}
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[12px] top-6 w-[15px] h-[15px] rounded-full border-2"
                style={{
                  borderColor: exp.color,
                  backgroundColor: `${exp.color}20`,
                  boxShadow: `0 0 12px ${exp.color}40`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 300 }}
              />

              <motion.div
                className="glass-card rounded-2xl p-6 group"
                whileHover={{
                  borderColor: `${exp.color}25`,
                  boxShadow: `0 12px 40px ${exp.color}10`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-lg tracking-tight" style={{ color: exp.color }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm text-foreground/50 mt-0.5">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-foreground/30 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, hIdx) => (
                    <motion.li
                      key={hIdx}
                      className="flex gap-3 text-sm text-foreground/60 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + hIdx * 0.05 + 0.3 }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: exp.color, opacity: 0.6 }}
                      />
                      <span>{h}</span>
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


