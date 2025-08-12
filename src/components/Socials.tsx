"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
  { 
    href: "https://github.com/md-asif-iqbal", 
    label: "GitHub", 
    icon: Github,
    bgColor: "bg-[#0d1117]", // GitHub's original dark background
    hoverColor: "hover:bg-[#161b22]", // GitHub's hover state
    borderColor: "border-[#30363d]" // GitHub's border color
  },
  { 
    href: "https://www.linkedin.com/in/md-asif-iqbal-652473185/", 
    label: "LinkedIn", 
    icon: Linkedin,
    bgColor: "bg-[#0077b5]", // LinkedIn's brand color
    hoverColor: "hover:bg-[#005885]", // LinkedIn's darker shade
    borderColor: "border-[#0077b5]/30" // LinkedIn's border color
  },
];

export default function Socials(): JSX.Element {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <ul className="flex flex-col gap-3">
        {links.map(({ href, label, icon: Icon, bgColor, hoverColor, borderColor }, i) => (
          <motion.li
            key={href}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 18 }}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`group grid h-10 w-10 place-items-center rounded-full border ${borderColor} ${bgColor} ${hoverColor} text-white backdrop-blur hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              aria-label={label}
            >
              <Icon size={18} className="opacity-90 group-hover:opacity-100" />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


