"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "border-b border-black/10 dark:border-white/10" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#top" className="font-semibold tracking-tight">
              M D. Asif Iqbal
            </Link>
          </motion.div>

          <nav className="hidden gap-6 text-sm sm:flex">
            {links.map((l, idx) => (
              <motion.a 
                key={l.href} 
                href={l.href} 
                className="hover:opacity-80 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  y: -2,
                  color: "#a855f7"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {l.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              className="rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:opacity-90 hidden sm:inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me
            </motion.a>
            <motion.button
              aria-label="Toggle menu"
              className="sm:hidden rounded-md border border-black/10 dark:border-white/10 p-2"
              onClick={() => setOpen((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="block h-0.5 w-5 bg-foreground mb-1"
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="block h-0.5 w-5 bg-foreground mb-1"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="block h-0.5 w-5 bg-foreground"
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="sm:hidden border-t border-black/10 dark:border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
              {links.map((l, idx) => (
                <motion.a 
                  key={l.href} 
                  href={l.href} 
                  className="py-1" 
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 5, color: "#a855f7" }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: links.length * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


