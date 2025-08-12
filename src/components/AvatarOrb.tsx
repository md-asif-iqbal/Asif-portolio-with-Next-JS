"use client";

import Image from "next/image";
import { useRef } from "react";
import type { JSX } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type Props = {
  src: string;
  size?: number;
};

export default function AvatarOrb({ src, size = 420 }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const rotateX = useTransform(rx, [-1, 1], [10, -10]);
  const rotateY = useTransform(ry, [-1, 1], [-10, 10]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set(py * 2 - 1);
    ry.set(px * 2 - 1);
  };

  const onLeave = () => {
    animate(rx, 0, { duration: 0.4 });
    animate(ry, 0, { duration: 0.4 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY }}
      className="mx-auto grid place-items-center"
    >
      <div
        className="relative rounded-full p-[3px]"
        style={{
          width: size,
          height: size,
          background:
            "conic-gradient(from 0deg, #a855f7, #d946ef, #8b5cf6, #a855f7)",
          boxShadow: "0 0 60px rgba(168,85,247,0.25)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-black/50">
          <Image src={src} alt="Profile" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.15),transparent)]" />
        </div>
      </div>
    </motion.div>
  );
}


