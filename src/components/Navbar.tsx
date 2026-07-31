"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Components", href: "#components" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Forms", href: "#forms" },
  { label: "Cards", href: "#cards" },
  { label: "Notifications", href: "#notifications" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center glow-purple">
          <Zap size={16} className="text-white" />
        </div>
        <span className="font-bold text-lg gradient-text">NEXUS</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200 hover:text-purple-400"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white glow-purple"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
}
