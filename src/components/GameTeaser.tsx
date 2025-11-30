"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function GameTeaser() {
  return (
    <section id="project" className="relative z-10 px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          </div>

          <div className="relative p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-rose-600/10 border border-rose-600/30 mb-6">
                    <span className="text-sm text-rose-400 font-medium">Coming Soon</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                    Project: Aether
                  </h2>
                  <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                    An isometric puzzle adventure that transports you to a realm where reality bends and logic becomes art.
                  </p>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Navigate through stunning isometric environments, solve intricate puzzles, and uncover the mysteries of the Aether realm. Every level is a masterpiece of design and challenge.
                  </p>
                  <motion.a
                    href="#aether"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 rounded-lg font-semibold text-lg shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all"
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900 to-slate-950">
                  {/* Placeholder for game image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 via-purple-600/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Compass className="w-24 h-24 text-slate-700 mx-auto mb-4" />
                      <p className="text-slate-600 text-sm">Isometric Preview</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-rose-600 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

