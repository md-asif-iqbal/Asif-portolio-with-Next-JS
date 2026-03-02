"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Rocket,
  type LucideProps,
} from "lucide-react";

type IconKey = "layers" | "monitor" | "server" | "shield" | "rocket";

const iconMap: Record<IconKey, React.FC<LucideProps>> = {
  layers: Layers,
  monitor: MonitorSmartphone,
  server: Server,
  shield: ShieldCheck,
  rocket: Rocket,
};

type Service = {
  title: string;
  description: string;
  icon: IconKey;
  features: string[];
  color: string;
  gradient: string;
};

const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications with modern technologies and scalable architecture.",
    icon: "layers",
    features: ["React & Next.js", "Node.js & Express", "RESTful APIs", "TypeScript"],
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-500/0",
  },
  {
    title: "Frontend Development",
    description:
      "Beautiful, interactive user interfaces with pixel-perfect responsive design.",
    icon: "monitor",
    features: ["Modern UI/UX", "Tailwind CSS", "Component Libraries", "Animations"],
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    title: "Backend & Database",
    description:
      "Robust server-side applications with optimized database design.",
    icon: "server",
    features: [
      "API Development",
      "MongoDB / PostgreSQL",
      "Caching & Indexing",
      "Performance Tuning",
    ],
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-violet-500/0",
  },
  {
    title: "Security Implementation",
    description:
      "Secure applications following industry best practices and standards.",
    icon: "shield",
    features: ["JWT & OAuth 2.0", "RBAC Systems", "OWASP Guidelines", "Data Encryption"],
    color: "#ef4444",
    gradient: "from-red-500/20 to-red-500/0",
  },
  {
    title: "Performance & DevOps",
    description:
      "Fast, efficient apps with CI/CD pipelines and cloud deployments.",
    icon: "rocket",
    features: ["CI/CD Pipelines", "Vercel / Netlify", "Code Splitting", "Docker"],
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-500/0",
  },
];

export default function Services(): JSX.Element {
  return (
    <Section id="services" title="Services" subtitle="What I Offer">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: idx * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            className="group relative"
          >
            {/* Card */}
            <motion.div
              className="relative glass-card rounded-2xl p-6 overflow-hidden h-full cursor-default"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {/* Colored background glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Accent top line */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                }}
              />

              {/* Content (relative so it's above the glow) */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    color: service.color,
                    borderColor: `${service.color}20`,
                    backgroundColor: `${service.color}08`,
                  }}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: `drop-shadow(0 0 8px ${service.color}40)`,
                    }}
                  >
                    {(() => {
                      const IconComp = iconMap[service.icon];
                      return <IconComp className="w-6 h-6" strokeWidth={1.8} />;
                    })()}
                  </motion.div>
                </motion.div>

                <h3 className="font-bold text-base mb-2 text-foreground/90 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-foreground/40 leading-relaxed mb-5 group-hover:text-foreground/55 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5">
                  {service.features.map((feature, fIdx) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-foreground/45 group-hover:text-foreground/65 transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.08 + 0.15 + fIdx * 0.06,
                      }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                        style={{
                          backgroundColor: service.color,
                          opacity: 0.5,
                          boxShadow: `0 0 0px ${service.color}`,
                        }}
                        whileHover={{
                          scale: 2,
                          boxShadow: `0 0 8px ${service.color}80`,
                        }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 blur-2xl"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
