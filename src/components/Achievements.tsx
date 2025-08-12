"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Achievement = {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
  year?: string;
  verificationLink?: string;
};

const achievements: Achievement[] = [
  {
    title: "HackerRank – JavaScript (Intermediate)",
    description: "Achieved intermediate level proficiency in JavaScript programming with strong problem-solving skills",
    image: "/javascript.png",
    icon: "💻",
    year: "2024",
    verificationLink: "https://www.hackerrank.com/certificates/iframe/9c8b39c8ec09",
  },
  {
    title: "HackerRank – Problem Solving (Basic)",
    description: "Demonstrated strong problem-solving skills and algorithmic thinking in software development",
    image: "/software.png",
    icon: "🧩",
    year: "2024",
    verificationLink: "https://www.hackerrank.com/certificates/iframe/805e27d2e65e",
  },
  {
    title: "CSE Project Showcase",
    description: "Presented innovative software engineering project at university level competition",
    image: "/cse.png",
    icon: "🏆",
    year: "2023",
    verificationLink: "https://drive.google.com/file/d/1GzfSj-jrAhndTK5fpfx1AY-rx-Sv-BO4/view",
  },
];

export default function Achievements(): JSX.Element {
  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.title}
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
              scale: 1.03,
              y: -8,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)"
            }}
            className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
          >
            {/* Background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            {/* Achievement Image */}
            <motion.div
              className="w-full h-32 mb-4 rounded-lg bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/20 dark:to-gray-700/20 flex items-center justify-center relative overflow-hidden border border-gray-200/20 dark:border-gray-700/20 group-hover:from-purple-100/50 group-hover:to-pink-100/50 dark:group-hover:from-purple-800/20 dark:group-hover:to-pink-800/20 group-hover:border-purple-200/20 dark:group-hover:border-purple-700/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {achievement.image ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ) : (
                <div className="text-6xl opacity-60">
                  {achievement.icon}
                </div>
              )}
            </motion.div>
            
            <div className="relative z-10">
              {/* Year Badge */}
              <motion.div
                className="inline-block bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium mb-3 border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:border-purple-200/50 dark:group-hover:border-purple-700/50 transition-all duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {achievement.year}
              </motion.div>
              
              <motion.h3 
                className="font-semibold tracking-tight text-base mb-2 leading-tight text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300"
              >
                {achievement.title}
              </motion.h3>
              
              {achievement.description && (
                <motion.p 
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  {achievement.description}
                </motion.p>
              )}

              {/* Verification Link */}
              {achievement.verificationLink && (
                <motion.a
                  href={achievement.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>🔗</span>
                  <span>Verify Online</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


