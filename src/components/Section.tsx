"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";
import type { JSX } from "react";

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export default function Section({ id, className, title, subtitle, children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 w-full ${className ?? ""}`}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          {subtitle && (
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              <span className="text-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.45)]">{title}</span>
            </h2>
          )}
          <div className="mt-3 h-1 w-16 bg-[#00f2fe] rounded-full shadow-[0_0_12px_rgba(0,242,254,0.6)]" />
        </motion.div>
      )}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}


