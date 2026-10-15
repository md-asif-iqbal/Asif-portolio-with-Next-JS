"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
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
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            className="h-full"
          >
            <TiltCard tiltDegree={8} glareOpacity={0.25} scale={1.02} className="h-full">
              {/* Card */}
              <div
                className="group relative glass-card rounded-2xl p-5 sm:p-6 overflow-hidden h-full cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  transformStyle: "preserve-3d",
                }}
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

                {/* Content with 3D Depth */}
                <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                  {/* Icon popping out in 3D */}
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 border transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      color: service.color,
                      borderColor: `${service.color}25`,
                      backgroundColor: `${service.color}10`,
                      transform: "translateZ(30px)",
                    }}
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: `drop-shadow(0 0 10px ${service.color}60)`,
                      }}
                    >
                      {(() => {
                        const IconComp = iconMap[service.icon];
                        return <IconComp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />;
                      })()}
                    </motion.div>
                  </motion.div>

                  <h3
                    style={{ transform: "translateZ(22px)" }}
                    className="font-bold text-base mb-2 text-foreground/90 group-hover:text-white transition-colors duration-300"
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{ transform: "translateZ(18px)" }}
                    className="text-xs sm:text-sm text-foreground/45 leading-relaxed mb-4 sm:mb-5 group-hover:text-foreground/60 transition-colors duration-300"
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-2.5" style={{ transform: "translateZ(20px)" }}>
                    {service.features.map((feature, fIdx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-foreground/45 group-hover:text-foreground/70 transition-all duration-300"
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
                            opacity: 0.6,
                            boxShadow: `0 0 0px ${service.color}`,
                          }}
                          whileHover={{
                            scale: 2,
                            boxShadow: `0 0 8px ${service.color}80`,
                          }}
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 min-w-0 break-words">
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
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
