"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible stardust-overlay">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-visible"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.15] pb-6 overflow-visible">
            <span className="block bg-gradient-to-r from-slate-100 via-rose-400 to-purple-400 bg-clip-text text-transparent pb-3 overflow-visible" style={{ lineHeight: '1.15' }}>
              We Forge Legends
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-rose-400 to-slate-100 bg-clip-text text-transparent overflow-visible">
              From Pixel & Code
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="#demos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 rounded-lg font-semibold text-lg shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all"
            >
              Play Demos
            </motion.a>
            
            <motion.a
              href="#lore"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-rose-600/50 rounded-lg font-semibold text-lg hover:bg-rose-600/10 transition-all"
            >
              Read Lore
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

