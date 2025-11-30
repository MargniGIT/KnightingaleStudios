"use client";

import { motion } from "framer-motion";
import { Sparkles, Sword, Compass } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Mind-Bending Puzzles",
      description: "Challenge your intellect with intricate puzzles that blend logic, creativity, and narrative depth.",
      color: "rose-600"
    },
    {
      icon: Sword,
      title: "Epic RPGs",
      description: "Embark on legendary journeys through rich worlds filled with compelling characters and epic quests.",
      color: "purple-600"
    },
    {
      icon: Compass,
      title: "Boundless Adventure",
      description: "Explore vast, hand-crafted worlds where every corner holds secrets and new discoveries await.",
      color: "rose-600"
    },
  ];

  return (
    <section id="features" className="relative z-10 px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-rose-500/50 hover:bg-slate-800/50 transition-[border-color,background-color] duration-200 ease-out group will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              <div className={`w-14 h-14 rounded-lg ${
                feature.color === 'rose-600' 
                  ? 'bg-gradient-to-br from-rose-600 to-purple-600' 
                  : 'bg-gradient-to-br from-purple-600 to-rose-600'
              } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

