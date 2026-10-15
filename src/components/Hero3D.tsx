"use client";

import React, { useRef, useState, useEffect } from "react";
import type { JSX } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero3D(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 24, stiffness: 240, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Natural subtle isometric 3D rest angle, dynamically tilting on mouse hover
  const rotateX = useTransform(smoothY, [0, 1], [14, -14]);
  const rotateY = useTransform(smoothX, [0, 1], [-16, 16]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = (e.clientX - rect.left) / rect.width;
    const clientY = (e.clientY - rect.top) / rect.height;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="relative w-full max-w-md mx-auto select-none"
    >
      {/* 3D Ambient Light Backing Glow */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500/25 via-emerald-500/15 to-violet-500/25 rounded-3xl blur-2xl animate-pulse-glow" />

      {/* 3D Rotational Canvas */}
      <motion.div
        style={{
          rotateX: isTouchDevice ? 0 : rotateX,
          rotateY: isTouchDevice ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered && !isTouchDevice ? 1.03 : 1,
        }}
        transition={{ scale: { duration: 0.3 } }}
        className="relative rounded-2xl glass-card overflow-visible shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] border border-white/10"
      >
        {/* Terminal Header */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0c0c16]/90 backdrop-blur-md rounded-t-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            </div>
            <span className="text-[11px] sm:text-xs text-cyan-300/60 ml-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              developer.ts
            </span>
          </div>

          <div className="text-[10px] text-white/30 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5">
            3D Console
          </div>
        </div>

        {/* Code Content Area with 3D Depth */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-[#090912]/80 backdrop-blur-sm"
        >
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.4 + i * 0.08,
                ease: "easeOut",
              }}
              className="flex items-center whitespace-nowrap"
              style={{ paddingLeft: `${line.indent * 12}px` }}
            >
              <span className="text-white/20 w-4 sm:w-6 text-right mr-2.5 sm:mr-4 text-[10px] sm:text-xs select-none flex-shrink-0">
                {i + 1}
              </span>
              <span style={{ color: line.color }} className="opacity-95 font-medium drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
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
            <span className="text-white/20 w-4 sm:w-6 text-right mr-2.5 sm:mr-4 text-[10px] sm:text-xs select-none flex-shrink-0">
              11
            </span>
            <span className="w-1.5 sm:w-2 h-3.5 sm:h-4 bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]" />
          </motion.div>
        </div>

        {/* Status Bar */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-[#0c0c16]/90 text-[10px] text-white/30 rounded-b-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-400/80 font-mono">Ready</span>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <span>UTF-8</span>
            <span className="text-cyan-400/70">Ln 11, Col 1</span>
          </div>
        </div>

        {/* 3D Specular Light Glare Layer */}
        {!isTouchDevice && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 rounded-2xl overflow-hidden transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.35 : 0.08,
            }}
          >
            <motion.div
              className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] pointer-events-none"
              style={{
                background: `radial-gradient(circle 400px at ${glareX} ${glareY}, rgba(6,182,212,0.4), rgba(255,255,255,0.2) 20%, transparent 60%)`,
              }}
            />
          </motion.div>
        )}

        {/* Floating 3D Tech Hologram Badges Pop-out (translateZ) */}
        <div className="hidden sm:block pointer-events-none">
          {/* Badge 1: Next.js */}
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-[#0e0e1a]/90 border border-cyan-500/40 shadow-[0_10px_30px_rgba(6,182,212,0.25)] backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-cyan-300"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm">▲</span>
            <span>Next.js 15</span>
          </motion.div>

          {/* Badge 2: TypeScript */}
          <motion.div
            style={{ transform: "translateZ(55px)" }}
            className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#0e0e1a]/90 border border-blue-500/40 shadow-[0_10px_30px_rgba(59,130,246,0.25)] backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-blue-300"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <span className="text-sm">🔷</span>
            <span>TypeScript</span>
          </motion.div>

          {/* Badge 3: React Fullstack */}
          <motion.div
            style={{ transform: "translateZ(45px)" }}
            className="absolute top-1/2 -right-6 px-3 py-1 rounded-xl bg-[#0e0e1a]/90 border border-emerald-500/40 shadow-[0_10px_25px_rgba(16,185,129,0.25)] backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-emerald-300"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-sm">⚛️</span>
            <span>React.js</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
