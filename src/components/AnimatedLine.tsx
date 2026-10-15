"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";

type Props = {
  className?: string;
  width?: string;
};

export default function AnimatedLine({
  className = "",
  width = "w-20 sm:w-24",
}: Props): JSX.Element {
  return (
    <div
      className={`group relative mt-3 h-1 ${width} overflow-hidden rounded-full bg-cyan-500/20 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/30 ${className}`}
    >
      {/* Base smooth expanding glowing bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="h-full w-full rounded-full bg-[#00f2fe] shadow-[0_0_14px_rgba(0,242,254,0.8)] dark:bg-[#00f2fe] dark:shadow-[0_0_14px_rgba(0,242,254,0.85)]"
      />

      {/* Radiant traveling laser gleam beam */}
      <motion.div
        animate={{ x: ["-100%", "260%"] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.4,
        }}
        className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-95 blur-[0.5px]"
      />
    </div>
  );
}
