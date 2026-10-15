"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

type EducationItem = {
  institute: string;
  degree: string;
  period: string;
  details?: string;
  icon: string;
  color: string;
};

const education: EducationItem[] = [
  {
    institute: "United International University (UIU), Dhaka",
    degree: "B.Sc. in Software Engineering",
    period: "2019 – 2024",
    details: "Major: Software Engineering",
    icon: "🎓",
    color: "#06b6d4",
  },
  {
    institute: "Adhyapak Abdul Majid College, Cumilla",
    degree: "Higher Secondary Certificate (HSC) — Science",
    period: "2017 – 2019",
    details: "GPA: 5.00 / 5.00",
    icon: "📚",
    color: "#10b981",
  },
];

export default function Education(): JSX.Element {
  return (
    <Section id="education" title="Education" subtitle="Academic">
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {education.map((e, idx) => (
          <motion.div
            key={e.institute}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 150 }}
            whileHover={{
              y: -4,
              borderColor: `${e.color}25`,
              boxShadow: `0 16px 40px ${e.color}10`,
            }}
            className="glass-card rounded-2xl p-4 sm:p-6 group relative overflow-hidden"
          >
            {/* Accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(to right, ${e.color}, transparent)` }}
            />

            <div className="flex items-start gap-3 sm:gap-4">
              <motion.div
                className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.2, type: "spring", stiffness: 300 }}
              >
                {e.icon}
              </motion.div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm sm:text-base tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-snug">
                  {e.degree}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/50 mt-1 leading-relaxed">{e.institute}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
                  <span className="text-xs font-medium text-foreground/40 bg-white/5 px-2.5 sm:px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                    {e.period}
                  </span>
                  {e.details && (
                    <span
                      className="text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full border whitespace-nowrap"
                      style={{
                        color: e.color,
                        borderColor: `${e.color}25`,
                        backgroundColor: `${e.color}08`,
                      }}
                    >
                      {e.details}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


