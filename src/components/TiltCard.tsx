"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  tiltDegree?: number;
  glareOpacity?: number;
  scale?: number;
};

export default function TiltCard({
  children,
  className = "",
  tiltDegree = 10,
  glareOpacity = 0.25,
  scale = 1.02,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [tiltDegree, -tiltDegree]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltDegree, tiltDegree]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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

  return (
    <div style={{ perspective: 1000 }} className="relative w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouchDevice ? 0 : rotateX,
          rotateY: isTouchDevice ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered && !isTouchDevice ? scale : 1,
        }}
        transition={{ scale: { duration: 0.25, ease: "easeOut" } }}
        className={`relative ${className}`}
      >
        {children}

        {/* 3D Dynamic Specular Glare */}
        {!isTouchDevice && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden transition-opacity duration-300"
            style={{
              opacity: isHovered ? glareOpacity : 0,
            }}
          >
            <motion.div
              className="absolute w-[180%] h-[180%] -top-[40%] -left-[40%] pointer-events-none"
              style={{
                background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255,255,255,0.4), transparent 70%)`,
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
