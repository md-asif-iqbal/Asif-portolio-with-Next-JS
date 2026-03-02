"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Achievement = {
  title: string;
  description: string;
  image?: string;
  icon: string;
  year: string;
  verificationLink?: string;
  color: string;
};

const achievements: Achievement[] = [
  {
    title: "HackerRank – JavaScript (Intermediate)",
    description: "Advanced JS concepts and problem-solving proficiency demonstrated.",
    image: "/javascript.png",
    icon: "💻",
    year: "2024",
    verificationLink: "https://www.hackerrank.com/certificates/iframe/9c8b39c8ec09",
    color: "#f59e0b",
  },
  {
    title: "HackerRank – Problem Solving (Basic)",
    description: "Strong algorithms and logical reasoning skills validated.",
    image: "/software.png",
    icon: "🧩",
    year: "2024",
    verificationLink: "https://www.hackerrank.com/certificates/iframe/805e27d2e65e",
    color: "#10b981",
  },
  {
    title: "UIU CSE Project Show – 1st Runner-up",
    description: "Presented innovative software engineering project at university-level competition, 2023.",
    image: "/cse.png",
    icon: "🏆",
    year: "2023",
    verificationLink: "https://drive.google.com/file/d/1GzfSj-jrAhndTK5fpfx1AY-rx-Sv-BO4/view",
    color: "#8b5cf6",
  },
];

export default function Achievements(): JSX.Element {
  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, idx) => (
          <motion.a
            key={achievement.title}
            href={achievement.verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, type: "spring", stiffness: 150 }}
            whileHover={{
              y: -6,
              borderColor: `${achievement.color}25`,
              boxShadow: `0 20px 50px ${achievement.color}12`,
            }}
            className="glass-card rounded-2xl overflow-hidden group block"
          >
            {/* Image */}
            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
              {achievement.image ? (
                <>
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${achievement.color}20, transparent)`,
                    }}
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
                  {achievement.icon}
                </div>
              )}

              {/* Year badge */}
              <div className="absolute top-3 right-3">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    color: achievement.color,
                    backgroundColor: `${achievement.color}15`,
                    border: `1px solid ${achievement.color}25`,
                  }}
                >
                  {achievement.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-sm tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-snug">
                {achievement.title}
              </h3>
              <p className="text-xs text-foreground/40 mt-2 leading-relaxed">
                {achievement.description}
              </p>

              {achievement.verificationLink && (
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium" style={{ color: achievement.color }}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Verify Online
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}


