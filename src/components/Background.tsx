"use client";

import type { JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background(): JSX.Element {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 1000], [0, -80]);
  const yMed = useTransform(scrollY, [0, 1000], [0, -140]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -220]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: ySlow }} className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.28),transparent_60%)] blur-2xl animate-blob" />
      <motion.div style={{ y: yMed }} className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.26),transparent_60%)] blur-2xl animate-blob animation-delay-2000" />
      <motion.div style={{ y: yFast }} className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.24),transparent_60%)] blur-2xl animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-50%,rgba(255,255,255,0.07),transparent)] dark:bg-[radial-gradient(1000px_600px_at_50%_-50%,rgba(255,255,255,0.07),transparent)]" />
    </div>
  );
}


