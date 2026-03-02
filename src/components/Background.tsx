"use client";

import type { JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background(): JSX.Element {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 2000], [0, -100]);
  const yMed = useTransform(scrollY, [0, 2000], [0, -180]);
  const yFast = useTransform(scrollY, [0, 2000], [0, -260]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Main gradient blobs */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_60%)] blur-3xl animate-blob"
      />
      <motion.div
        style={{ y: yMed }}
        className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] blur-3xl animate-blob animation-delay-2000"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_60%)] blur-3xl animate-blob animation-delay-4000"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute top-2/3 right-1/4 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_60%)] blur-3xl animate-blob animation-delay-6000"
      />

      {/* Top gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-20%,rgba(6,182,212,0.06),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </div>
  );
}


