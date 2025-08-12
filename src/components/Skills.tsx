"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

const skills = {
  "Programming Languages": ["C", "C++", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "CSS", "Bootstrap", "Material UI"],
  Backend: ["Node.js", "Express.js", "NestJS", "Django"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "Tools & DevOps": ["Git", "GitHub", "VS Code", "Firebase", "Netlify", "Figma"],
  "Auth & Security": ["JWT", "Firebase Auth", "RBAC", "OWASP"]
} as const;

export default function Skills(): JSX.Element {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Core">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items], idx) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.15)",
              backgroundColor: "rgba(168, 85, 247, 0.1)"
            }}
            className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-all duration-300"
          >
            <h3 className="text-sm font-semibold tracking-wide text-foreground/80">{group}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((s, skillIdx) => (
                <motion.span 
                  key={s} 
                  className="rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-xs cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (idx * 0.05) + (skillIdx * 0.02),
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    borderColor: "rgba(168, 85, 247, 0.3)"
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


