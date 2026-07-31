"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bell, Check, Heart, Share2, Star, Zap, Download, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const badges = ["New", "Hot", "Beta", "Pro", "Free", "Sale"];
const badgeColors = [
  "from-purple-500 to-blue-500",
  "from-red-500 to-orange-500",
  "from-green-500 to-teal-500",
  "from-yellow-500 to-amber-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-blue-500",
];

export default function ComponentsSection() {
  const [liked, setLiked] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [progress] = useState(72);

  return (
    <section id="components" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-purple-300">
            <Zap size={14} /> Components
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Every Element, <span className="gradient-text">Perfected</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Glassmorphic components with buttery-smooth interactions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Buttons */}
          <motion.div variants={item} className="glass rounded-3xl p-6 space-y-4">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Primary", gradient: "from-purple-600 to-blue-600" },
                { label: "Danger", gradient: "from-red-600 to-pink-600" },
                { label: "Success", gradient: "from-green-600 to-teal-600" },
              ].map((btn) => (
                <motion.button
                  key={btn.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl bg-gradient-to-r ${btn.gradient} text-white text-sm font-medium`}
                >
                  {btn.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl glass text-white/70 text-sm font-medium"
              >
                Ghost
              </motion.button>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium"
              >
                <Download size={14} /> Download
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass text-white/70 text-sm font-medium"
              >
                <Share2 size={14} /> Share
              </motion.button>
            </div>
          </motion.div>

          {/* Badges & Chips */}
          <motion.div variants={item} className="glass rounded-3xl p-6">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Badges & Chips</h3>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${badgeColors[i]}`}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Tailwind"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs text-purple-300 glass border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Toggle & Like */}
          <motion.div variants={item} className="glass rounded-3xl p-6 space-y-5">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Interactive</h3>

            {/* Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Dark Mode</span>
              <motion.button
                onClick={() => setToggled(!toggled)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${toggled ? "bg-purple-600" : "bg-white/20"}`}
              >
                <motion.div
                  animate={{ x: toggled ? 24 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-4 h-4 rounded-full bg-white"
                />
              </motion.button>
            </div>

            {/* Like */}
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Favorite</span>
              <motion.button
                onClick={() => setLiked(!liked)}
                whileTap={{ scale: 0.8 }}
                className="relative"
              >
                <motion.div
                  animate={{ scale: liked ? [1, 1.4, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart
                    size={24}
                    className={liked ? "text-pink-500 fill-pink-500" : "text-white/40"}
                  />
                </motion.div>
              </motion.button>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div key={star} whileHover={{ scale: 1.2 }}>
                  <Star
                    size={20}
                    className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
                  />
                </motion.div>
              ))}
              <span className="text-white/40 text-sm ml-2">4.0</span>
            </div>
          </motion.div>

          {/* Progress bars */}
          <motion.div variants={item} className="glass rounded-3xl p-6 space-y-4">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Progress</h3>
            {[
              { label: "Performance", value: 92, color: "from-green-500 to-teal-500" },
              { label: "Design", value: 87, color: "from-purple-500 to-blue-500" },
              { label: "Accessibility", value: 78, color: "from-yellow-500 to-orange-500" },
              { label: "Loading", value: progress, color: "from-pink-500 to-rose-500" },
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>{p.label}</span>
                  <span>{p.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.value}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Avatar group */}
          <motion.div variants={item} className="glass rounded-3xl p-6">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Avatars</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, zIndex: 10 }}
                  style={{ marginLeft: i === 0 ? 0 : -12, zIndex: 5 - i }}
                  className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: `hsl(${(i * 60 + 240) % 360}, 70%, 60%)`,
                    }}
                  />
                </motion.div>
              ))}
              <div className="ml-2 text-sm text-white/50">+42 more</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <div className="text-white font-medium text-sm">John Doe</div>
                <div className="text-white/40 text-xs">Senior Designer</div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="ml-auto w-8 h-8 rounded-full glass flex items-center justify-center"
              >
                <Bell size={14} className="text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Notification card */}
          <motion.div variants={item} className="glass rounded-3xl p-6 space-y-3">
            <h3 className="text-white/60 text-xs uppercase tracking-widest mb-4">Alerts</h3>
            {[
              { icon: Check, color: "text-green-400", bg: "bg-green-500/10", msg: "Deployment successful" },
              { icon: Bell, color: "text-blue-400", bg: "bg-blue-500/10", msg: "3 new notifications" },
              { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10", msg: "Performance improved" },
            ].map(({ icon: Icon, color, bg, msg }) => (
              <motion.div
                key={msg}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${bg}`}
              >
                <Icon size={16} className={color} />
                <span className="text-white/70 text-sm">{msg}</span>
                <ArrowRight size={14} className="ml-auto text-white/20" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
