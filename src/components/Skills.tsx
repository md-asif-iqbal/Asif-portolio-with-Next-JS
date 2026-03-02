"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: {
    items: ["JavaScript", "TypeScript", "Python", "C++"],
    color: "#06b6d4",
  },
  Frontend: {
    items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "Material UI", "HTML5", "CSS3"],
    color: "#10b981",
  },
  Backend: {
    items: ["Node.js", "Express.js", "Nest.js", "Django", "REST API Design"],
    color: "#8b5cf6",
  },
  Databases: {
    items: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose ODM"],
    color: "#f59e0b",
  },
  "Auth & Security": {
    items: ["JWT", "OAuth 2.0", "Google Auth", "Firebase Auth", "RBAC", "OWASP"],
    color: "#ef4444",
  },
  "DevOps & Tools": {
    items: ["Git", "GitHub", "CI/CD", "Vercel", "Netlify", "Firebase", "Docker", "Figma", "Jira"],
    color: "#06b6d4",
  },
  "Testing & QA": {
    items: ["Jest", "React Testing Library", "Postman", "Unit Testing", "Integration Testing"],
    color: "#10b981",
  },
  "AI & APIs": {
    items: ["Google Gemini AI", "OpenAI API", "REST APIs", "WebRTC", "Third-party Integrations"],
    color: "#8b5cf6",
  },
} as const;

export default function Skills(): JSX.Element {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Core Stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, { items, color }], idx) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{
              y: -4,
              boxShadow: `0 12px 30px ${color}15`,
              borderColor: `${color}30`,
            }}
            className="glass-card rounded-xl p-5 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
              />
              <h3 className="text-sm font-semibold tracking-wide text-foreground/80">{group}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s, skillIdx) => (
                <motion.span
                  key={s}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/60 cursor-default transition-all duration-300 hover:text-foreground/90"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.05 + skillIdx * 0.02,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: `${color}15`,
                    borderColor: `${color}30`,
                    color: color,
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


