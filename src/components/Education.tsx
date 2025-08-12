"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";

type EducationItem = {
  institute: string;
  degree: string;
  period: string;
  details?: string;
  icon?: string;
};

const education: EducationItem[] = [
  {
    institute: "United International University, Dhaka",
    degree: "Bachelor of Science in Software Engineering",
    period: "2019 - 2024",

  },
  {
    institute: "Adhyapak Abdul Majid College, Cumilla",
    degree: "Higher Secondary Certificate (Science) – GPA: 4.83 / 5.00",
    period: "2016 - 2018",

  },
];

export default function Education(): JSX.Element {
  return (
    <Section id="education" title="Education 🎓" subtitle="Academic">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e, idx) => (
          <motion.div
            key={e.institute}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
            }}
            className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm relative overflow-hidden group"
          >
            {/* Background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            {/* Icon */}
            <motion.div
              className="text-3xl mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1 + 0.2,
                type: "spring",
                stiffness: 300
              }}
            >
              {e.icon}
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className="font-semibold tracking-tight text-lg mb-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300"
              >
                {e.institute}
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                {e.degree}
              </motion.p>
              <motion.p 
                className="text-sm text-gray-600 dark:text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 }}
              >
                {e.period}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


