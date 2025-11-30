"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">K</span>
            </div>
            <span className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Knightingale Studios. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/50 flex items-center justify-center hover:border-rose-600/50 transition-colors"
            >
              <Twitter className="w-5 h-5 text-slate-400 hover:text-rose-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/50 flex items-center justify-center hover:border-rose-600/50 transition-colors"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-rose-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/50 flex items-center justify-center hover:border-rose-600/50 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-rose-400 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:hello@knightingalestudios.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800/50 flex items-center justify-center hover:border-rose-600/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-rose-400 transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

