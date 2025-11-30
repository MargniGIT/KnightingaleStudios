"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-600 to-purple-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">K</span>
            </div>
            <span className="text-xl font-bold text-slate-100">Knightingale Studios</span>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-rose-400 transition-colors">
              Games
            </a>
            <a href="#project" className="text-slate-300 hover:text-rose-400 transition-colors">
              Projects
            </a>
            <a href="#newsletter" className="text-slate-300 hover:text-rose-400 transition-colors">
              Newsletter
            </a>
          </div>

          {/* Press Kit Button */}
          <motion.a
            href="#press-kit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-rose-600/50 rounded-lg text-rose-400 hover:bg-rose-600/10 transition-all text-sm font-medium"
          >
            Press Kit
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

