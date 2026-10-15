"use client";

import Image from "next/image";
import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

type Project = {
  title: string;
  desc: string;
  image: string;
  href: string;
  tags: string[];
  color: string;
};

const projects: Project[] = [
  {
    title: "AI-Based Interview System",
    desc: "AI hiring platform with Gemini resume parsing, smart scoring & anti-cheat proctored video interviews.",
    image: "/ai-interview-showcase.png",
    href: "https://ai-based-interview-systems.vercel.app",
    tags: ["Next.js", "Gemini AI", "WebRTC", "Node.js", "MongoDB"],
    color: "#10b981",
  },
  {
    title: "Bridge to Bangladesh",
    desc: "Global diaspora platform connecting overseas Bangladeshis with national development initiatives & community circles.",
    image: "/bridge-to-bd-showcase.png",
    href: "https://bridgetobd.org/",
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    color: "#06b6d4",
  },
  {
    title: "BD Shoes — E-Commerce",
    desc: "Full-stack footwear e-commerce platform with real-time inventory, dynamic category filtering & checkout.",
    image: "/bd-shoes-showcase.png",
    href: "https://bdshoe.com",
    tags: ["Next.js 16", "React 19", "TypeScript", "Zustand", "Tailwind CSS"],
    color: "#f59e0b",
  },
];

export default function Projects(): JSX.Element {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Work">
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`h-full ${i === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none w-full" : ""}`}
          >
            <TiltCard tiltDegree={7} glareOpacity={0.22} scale={1.02} className="h-full">
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer w-full h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d14]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    priority={i < 2}
                    quality={90}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />

                  {/* Subtle bottom gradient only */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />

                  {/* Hover color tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${p.color}30, transparent 70%)`,
                    }}
                  />

                  {/* Curved reveal overlay — hidden by default, slides up on hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 z-20 pointer-events-none group-hover:pointer-events-auto"
                    style={{
                      height: "64%",
                      background: "rgba(10,10,15,0.94)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "45% 45% 0 0",
                      clipPath: "ellipse(80% 100% at 50% 100%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 gap-2 sm:gap-2.5">
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-full">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium border whitespace-nowrap shadow-sm"
                            style={{
                              borderColor: `${p.color}30`,
                              backgroundColor: `${p.color}15`,
                              color: `${p.color}`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action button */}
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                        style={{
                          backgroundColor: p.color,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom info — always visible */}
                <div
                  className="relative px-3.5 sm:px-4 py-3 sm:py-3.5 bg-[#0c0c14]/90 backdrop-blur-md"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Accent line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: p.color }}
                  />

                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: p.color, boxShadow: `0 0 0 2px #0c0c14, 0 0 0 3px ${p.color}40` }}
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm text-foreground/90 group-hover:text-white transition-colors truncate">
                          {p.title}
                        </h3>
                        <p className="text-[11px] text-foreground/40 group-hover:text-foreground/55 transition-colors line-clamp-1 mt-0.5">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Direct link on mobile screens */}
                    {p.href && p.href !== "#" && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="sm:hidden flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium text-white flex-shrink-0 transition-opacity hover:opacity-90 shadow-md"
                        style={{ backgroundColor: p.color }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
