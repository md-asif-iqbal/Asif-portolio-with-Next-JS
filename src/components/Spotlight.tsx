"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

export default function Spotlight(): JSX.Element {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(600px 400px at ${position.x}px ${position.y}px, rgba(255,255,255,0.12), transparent 60%)`,
      }}
    />
  );
}


