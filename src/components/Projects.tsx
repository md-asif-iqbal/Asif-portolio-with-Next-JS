"use client";

import Image from "next/image";
import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    title: "NexLearn",
    desc: "AI-powered tutoring platform with 10,000+ students, live video sessions & Stripe payments.",
    image: "/Edu-system.png",
    href: "https://edu-platfrom-nex-learn.vercel.app",
    tags: ["Next.js 16", "TypeScript", "MongoDB", "Gemini AI", "Stripe", "Jitsi"],
    color: "#8b5cf6",
  },
  {
    title: "SoftLanding Interview",
    desc: "End-to-end AI hiring platform with resume parsing, proctored video interviews & smart scoring.",
    image: "/ai-based.png",
    href: "https://ai-based-interview-systems.vercel.app",
    tags: ["Next.js", "TypeScript", "Gemini AI", "WebRTC", "MongoDB"],
    color: "#10b981",
  },
  {
    title: "CineWave",
    desc: "Netflix-style streaming app with cinematic banners, trending carousels & admin panel.",
    image: "/cinewave-striming-platfrom.png",
    href: "https://cinewave-movie-platform-bixw.vercel.app",
    tags: ["Next.js", "Node.js", "MongoDB", "Payment Gateway"],
    color: "#ef4444",
  },
  {
    title: "SoftLanding POS V2",
    desc: "Enterprise POS & ERP dashboard tracking $385K+ sales, 5,870+ invoices & real-time analytics.",
    image: "/pos.png",
    href: "https://soft-landing-pos-system-v2.vercel.app",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT"],
    color: "#06b6d4",
  },
];

export default function Projects(): JSX.Element {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Work">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <motion.div
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d14]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  priority={i < 2}
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width:640px) 100vw, 600px"
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

                {/* Curved reveal overlay — slides up on hover */}
                <div
                  className="absolute inset-x-0 -bottom-1 transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-[calc(100%-1px)]"
                  style={{
                    height: "55%",
                    background: "rgba(10,10,15,0.92)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "40% 40% 0 0",
                    clipPath: "ellipse(75% 100% at 50% 100%)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full px-6 pt-6 pb-4 gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-medium border"
                          style={{
                            borderColor: `${p.color}25`,
                            backgroundColor: `${p.color}10`,
                            color: `${p.color}cc`,
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
                      className="flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-105"
                      style={{ backgroundColor: p.color }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom info — always visible */}
              <div className="relative px-4 py-3.5 bg-[#0c0c14]/80 backdrop-blur-sm">
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: p.color }}
                />

                <div className="flex items-center gap-2.5">
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
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
