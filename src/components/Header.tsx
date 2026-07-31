"use client";

import { motion } from "framer-motion";
import { Zap, Star, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function Header() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

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

        {/* Theme toggle */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center transition-colors"
        >
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Sun size={15} className="text-yellow-400" />
            ) : (
              <Moon size={15} className="text-purple-500" />
            )}
          </motion.div>
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://github.com/7893/nextui-showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        >
          <ExternalLink size={12} />
          GitHub
        </motion.a>
      </div>
    </header>
  );
}
