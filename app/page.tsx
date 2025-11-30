"use client";

import { motion } from "framer-motion";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import GameTeaser from "@/src/components/GameTeaser";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-visible">
      <Navbar />
      <Hero />
      <Features />
      <GameTeaser />

      {/* Newsletter Section */}
      <section id="newsletter" className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
              Get the latest news about our games, development updates, and exclusive content delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-slate-900/50 border border-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-600/50 focus:ring-2 focus:ring-rose-600/20 transition-all"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 rounded-lg font-semibold text-lg shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
