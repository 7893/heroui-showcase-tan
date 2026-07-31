"use client";

import { motion } from "framer-motion";
import { Zap, Star, ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 flex items-center justify-between px-6 glass border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
          <Zap size={14} className="text-white" />
        </div>
        <span className="font-bold text-sm gradient-text">NEXUS UI</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-purple-300 bg-purple-500/15 border border-purple-500/20">
          v1.0
        </span>
      </div>

      {/* Center tabs */}
      <div className="hidden md:flex items-center gap-1">
        {["Components", "Examples", "Docs"].map((tab) => (
          <button
            key={tab}
            className="px-4 py-1.5 rounded-lg text-sm text-white/40 hover:text-white/80 hover:bg-white/5 transition-all"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-1.5 text-white/30 text-xs">
          <Star size={12} />
          <span>2.4k</span>
        </div>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        >
          <ExternalLink size={12} />
          GitHub
        </motion.a>
      </div>
    </header>
  );
}
