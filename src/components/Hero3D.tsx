"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export default function Hero3D(): JSX.Element {
  const codeLines = [
    { text: "const developer = {", color: "#06b6d4", indent: 0 },
    { text: '  name: "Asif Iqbal",', color: "#10b981", indent: 1 },
    { text: '  role: "Software Engineer",', color: "#10b981", indent: 1 },
    { text: "  skills: [", color: "#8b5cf6", indent: 1 },
    { text: '    "React", "Next.js",', color: "#f59e0b", indent: 2 },
    { text: '    "Node.js", "TypeScript",', color: "#f59e0b", indent: 2 },
    { text: '    "MongoDB", "PostgreSQL"', color: "#f59e0b", indent: 2 },
    { text: "  ],", color: "#8b5cf6", indent: 1 },
    { text: "  passion: true,", color: "#ef4444", indent: 1 },
    { text: "};", color: "#06b6d4", indent: 0 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow background */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-violet-500/20 rounded-2xl blur-2xl animate-pulse-glow" />

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative glass-card rounded-2xl overflow-hidden"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-white/30 ml-2 font-mono">developer.ts</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + i * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center"
              style={{ paddingLeft: `${line.indent * 16}px` }}
            >
              <span className="text-white/20 w-6 text-right mr-4 text-xs select-none">
                {i + 1}
              </span>
              <span style={{ color: line.color }} className="opacity-90">
                {line.text}
              </span>
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.div
            className="flex items-center mt-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="text-white/20 w-6 text-right mr-4 text-xs select-none">
              11
            </span>
            <span className="w-2 h-4 bg-cyan-400/80 rounded-sm" />
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 text-[10px] text-white/25">
          <span>TypeScript</span>
          <div className="flex gap-3">
            <span>UTF-8</span>
            <span>LF</span>
            <span className="text-cyan-400/60">Ln 11, Col 1</span>
          </div>
        </div>
      </motion.div>

      {/* Floating tech icons around the terminal */}
      {[
        { emoji: "⚛️", x: -30, y: 20, delay: 1 },
        { emoji: "🚀", x: "calc(100% + 10px)", y: 40, delay: 1.5 },
        { emoji: "💻", x: 10, y: "calc(100% + 5px)", delay: 2 },
        { emoji: "⚡", x: "calc(100% - 20px)", y: -20, delay: 2.5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-xl"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 1, 1, 0.8],
            y: [0, -10, -10, -20],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
