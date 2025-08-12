"use client";

import Image from "next/image";
import Section from "./Section";
import TiltCard from "./TiltCard";
import GlareCard from "./GlareCard";
import type { JSX } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  href?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Macdosoft Corporate Website",
    description:
      "Enterprise software services site with polished UI, animations, and strong performance.",
    image: "/macdosoft.png",
    href: "https://macdosoft.com/",
    tags: ["Next.js", "Tailwind", "SEO", "MERN", "Responsive", "Animations"],
  },
  {
    title: "NicdoWeb Agency Website",
    description:
      "Modern agency presence with responsive layouts and optimized content delivery.",
    image: "/nicdoweb.png",
    href: "https://nicdoweb.com/",
    tags: ["Next.js", "Responsive", "Animations"],
  },
  {
    title: "Repwoop POS System",
    description:
      "Full-featured POS with real-time billing, inventory, reports, JWT auth and RBAC.",
    image: "/repwoop.png",
    href: "https://repwoop-pos-system.vercel.app/",
    tags: ["MERN", "JWT", "Responsive", "POS"],
  },
];

export default function Projects(): JSX.Element {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Work">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
            className="group rounded-xl p-[1px] bg-gradient-to-br from-gray-600/20 via-gray-600/20 to-gray-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-purple-600/30 transition-all duration-300"
          >
            <TiltCard className="block h-full">
              <GlareCard>
                <a href={p.href ?? "#"} target="_blank" rel="noreferrer" className="block h-full rounded-xl overflow-hidden border border-gray-200/20 dark:border-gray-700/30 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="relative aspect-[16/9] w-full border-b border-gray-200/20 dark:border-gray-700/30 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-[1.03]" onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                      const fallback = document.createElement('div');
                      fallback.className = 'absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/30';
                      (e.currentTarget.parentElement as HTMLElement).appendChild(fallback);
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />
                  </motion.div>
                  <div className="p-6 flex flex-col min-h-[200px]">
                    <motion.h3 
                      className="font-semibold tracking-tight text-lg text-gray-800 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300"
                    >
                      {p.title}
                    </motion.h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t, tagIdx) => (
                        <motion.span 
                          key={t} 
                          className="rounded-full border border-gray-300/50 dark:border-gray-600/50 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100/50 dark:bg-gray-800/50 group-hover:bg-purple-100/50 dark:group-hover:bg-purple-800/50 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:border-purple-300/50 dark:group-hover:border-purple-600/50 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (i * 0.1) + (tagIdx * 0.05) + 0.2,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.05
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </a>
              </GlareCard>
            </TiltCard>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}


