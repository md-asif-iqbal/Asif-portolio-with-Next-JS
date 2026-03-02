"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
  {
    href: "https://github.com/md-asif-iqbal",
    label: "GitHub",
    icon: Github,
    hoverBg: "hover:bg-white/10 hover:border-white/30",
    hoverText: "group-hover:text-white",
    glow: "rgba(255,255,255,0.15)",
  },
  {
    href: "https://www.linkedin.com/in/md-asif-iqbal-652473185/",
    label: "LinkedIn",
    icon: Linkedin,
    hoverBg: "hover:bg-[#0077b5]/15 hover:border-[#0077b5]/40",
    hoverText: "group-hover:text-[#0077b5]",
    glow: "rgba(0,119,181,0.25)",
  },
];

export default function Socials(): JSX.Element {
  return (
    <div className="fixed bottom-8 left-6 z-50 hidden md:block">
      <ul className="flex flex-col items-center gap-3">
        {links.map(({ href, label, icon: Icon, hoverBg, hoverText, glow }, i) => (
          <motion.li
            key={href}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200, damping: 16 }}
          >
            <motion.a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 ${hoverBg}`}
              aria-label={label}
              whileHover={{
                scale: 1.15,
                y: -2,
                boxShadow: `0 8px 25px ${glow}`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon
                size={18}
                strokeWidth={2}
                className={`text-foreground/50 ${hoverText} transition-colors duration-300`}
              />
            </motion.a>
          </motion.li>
        ))}
        {/* Vertical line */}
        <motion.li
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="w-px h-20 bg-gradient-to-b from-white/15 via-white/8 to-transparent origin-top"
        />
      </ul>
    </div>
  );
}


