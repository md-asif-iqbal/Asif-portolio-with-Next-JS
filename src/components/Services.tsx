"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
};

const services: Service[] = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern technologies and responsive design",
    icon: <Code className="w-8 h-8" />,
    features: ["React & Next.js", "Node.js & Express", "RESTful APIs", "Responsive Design"]
  },

  {
    title: "Frontend Development",
    description: "Beautiful, interactive user interfaces with modern frameworks",
    icon: <Globe className="w-8 h-8" />,
    features: ["Modern UI/UX", "TypeScript", "Tailwind CSS", "Component Libraries"]
  },
  {
    title: "Backend Development",
    description: "Robust server-side applications and database management",
    icon: <Database className="w-8 h-8" />,
    features: ["API Development", "Database Design", "Authentication", "Performance Optimization"]
  },
  {
    title: "Security Implementation",
    description: "Secure applications with best practices and modern security standards",
    icon: <Shield className="w-8 h-8" />,
    features: ["JWT Authentication", "OWASP Guidelines", "Data Encryption", "Security Audits"]
  },
  {
    title: "Performance Optimization",
    description: "Fast, efficient applications with optimized code and infrastructure",
    icon: <Zap className="w-8 h-8" />,
    features: ["Code Optimization", "Caching Strategies", "CDN Integration", "Load Balancing"]
  }
];

export default function Services(): JSX.Element {
  return (
    <Section id="services" title="Services" subtitle="What I Offer">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
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
            
            {/* Service Icon */}
            <motion.div
              className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-purple-700 dark:text-purple-300 border border-gray-200 dark:border-gray-600 relative z-10 group-hover:bg-gradient-to-br group-hover:from-purple-100 group-hover:to-pink-100 dark:group-hover:from-purple-800 dark:group-hover:to-pink-800 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:border-purple-200 dark:group-hover:border-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                {service.description}
              </motion.p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                                     <motion.div
                     key={feature}
                     className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ 
                       delay: idx * 0.1 + 0.3 + (featureIdx * 0.05),
                       duration: 0.3
                     }}
                     whileHover={{ x: 5 }}
                   >
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-purple-400 dark:group-hover:bg-purple-500 transition-colors duration-300" />
                     <span>{feature}</span>
                   </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
