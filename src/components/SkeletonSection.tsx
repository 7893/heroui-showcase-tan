"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

function SkeletonPulse({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-xl bg-white/10 ${className}`}
    />
  );
}

function LoadedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-3xl overflow-hidden"
    >
      <div className="h-36 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-4xl">
        ✦
      </div>
      <div className="p-5">
        <p className="text-white/40 text-xs mb-1">Software · Design</p>
        <h4 className="text-white font-bold text-lg mb-1">Quantum Studio</h4>
        <p className="text-white/40 text-sm mb-4">The ultimate creative toolkit for modern designers and developers.</p>
        <div className="flex items-center justify-between">
          <span className="gradient-text font-black text-xl">$199</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium"
          >
            Get it
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      <SkeletonPulse className="h-36 rounded-none" />
      <div className="p-5 space-y-3">
        <SkeletonPulse className="h-3 w-1/3" />
        <SkeletonPulse className="h-5 w-2/3" />
        <SkeletonPulse className="h-3 w-full" />
        <SkeletonPulse className="h-3 w-4/5" />
        <div className="flex justify-between items-center pt-2">
          <SkeletonPulse className="h-6 w-16" />
          <SkeletonPulse className="h-8 w-20 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonSection() {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const simulate = () => {
    setLoaded(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 2000);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="skeleton" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-green-300">
            <RefreshCw size={14} /> Loading States
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Even Loading Looks <span className="gradient-text">Beautiful</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">Skeleton screens that feel alive</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={simulate}
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium disabled:opacity-50"
          >
            <motion.div animate={loading ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}>
              <RefreshCw size={16} />
            </motion.div>
            {loading ? "Loading..." : "Reload"}
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {loaded ? (
            <>
              <LoadedCard />
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass rounded-3xl overflow-hidden"
                >
                  <div className={`h-36 flex items-center justify-center text-4xl ${i === 0 ? "bg-gradient-to-br from-pink-600 to-rose-600" : "bg-gradient-to-br from-green-600 to-teal-600"}`}>
                    {i === 0 ? "◈" : "⬡"}
                  </div>
                  <div className="p-5">
                    <p className="text-white/40 text-xs mb-1">{i === 0 ? "Design" : "Templates"}</p>
                    <h4 className="text-white font-bold text-lg mb-1">{i === 0 ? "Aurora Pack" : "Nebula Suite"}</h4>
                    <p className="text-white/40 text-sm mb-4">Premium {i === 0 ? "design assets" : "templates"} for modern projects.</p>
                    <div className="flex items-center justify-between">
                      <span className="gradient-text font-black text-xl">{i === 0 ? "$89" : "$149"}</span>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-4 py-2 rounded-xl text-white text-sm font-medium bg-gradient-to-r ${i === 0 ? "from-pink-600 to-rose-600" : "from-green-600 to-teal-600"}`}>
                        Get it
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
          )}
        </div>
      </div>
    </section>
  );
}
