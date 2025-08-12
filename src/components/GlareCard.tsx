"use client";

import { useState } from "react";
import type { JSX } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlareCard({ children, className }: Props): JSX.Element {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 50, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const onLeave = () => setPos({ x: 50, y: 0 });

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className={`relative ${className ?? ""}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(200px 120px at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.18), transparent 60%)`,
          opacity: 1,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}


