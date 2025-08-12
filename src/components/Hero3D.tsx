"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  size?: number;
};

export default function Hero3D({ size }: Props): JSX.Element {
  const [circleSize, setCircleSize] = useState(360);
  const [iconSize, setIconSize] = useState(90);

  useEffect(() => {
    const updateSize = () => {
      let newSize = 360; // default desktop
      if (window.innerWidth < 640) {
        newSize = 280; // mobile
      } else if (window.innerWidth < 1024) {
        newSize = 320; // tablet
      }
      
      if (size) {
        newSize = size; // override if size prop is provided
      }
      
      setCircleSize(newSize);
      setIconSize(Math.floor(newSize * 0.25)); // 25% of circle size
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);

  return (
    <div className="mx-auto grid place-items-center">
      <motion.div
        className="relative rounded-full p-[3px]"
        style={{
          width: circleSize,
          height: circleSize,
          background: "conic-gradient(from 0deg, #a855f7, #d946ef, #8b5cf6, #a855f7)",
          boxShadow: "0 0 60px rgba(168,85,247,0.25)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-black/60">
          {/* Developer Icon/Avatar in Center */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className="relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
              style={{
                width: iconSize,
                height: iconSize,
              }}
            >
              <motion.div
                className="text-white font-bold text-center"
                style={{
                  fontSize: Math.floor(iconSize * 0.4),
                }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👨‍💻
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
              style={{
                width: Math.floor(circleSize * 0.4),
                height: Math.floor(circleSize * 0.02),
              }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.12), transparent)",
                "radial-gradient(40% 60% at 80% 80%, rgba(255,255,255,0.08), transparent)",
                "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.12), transparent)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-400 rounded-full"
              style={{
                width: Math.floor(circleSize * 0.01),
                height: Math.floor(circleSize * 0.01),
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
