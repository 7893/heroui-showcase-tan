"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 mt-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">NEXUS</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Home", "Components", "Dashboard", "Forms"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[GitBranch, Globe, ExternalLink].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-white/20 text-sm">
          Built with Next.js, HeroUI, Framer Motion & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
