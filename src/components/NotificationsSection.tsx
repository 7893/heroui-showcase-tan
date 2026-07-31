"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, X, Bell, AlertTriangle, Info, Zap, Plus } from "lucide-react";

type Toast = {
  id: number;
  type: "success" | "error" | "warning" | "info";
  message: string;
};

const toastConfig = {
  success: { icon: Check, color: "text-green-400", bg: "from-green-500/20 to-teal-500/10", border: "border-green-500/30" },
  error: { icon: X, color: "text-red-400", bg: "from-red-500/20 to-rose-500/10", border: "border-red-500/30" },
  warning: { icon: AlertTriangle, color: "text-yellow-400", bg: "from-yellow-500/20 to-amber-500/10", border: "border-yellow-500/30" },
  info: { icon: Info, color: "text-blue-400", bg: "from-blue-500/20 to-indigo-500/10", border: "border-blue-500/30" },
};

const examples: { type: Toast["type"]; message: string }[] = [
  { type: "success", message: "Deployment completed successfully" },
  { type: "error", message: "Connection failed — please retry" },
  { type: "warning", message: "Storage at 85% capacity" },
  { type: "info", message: "New version available: v2.1.0" },
];

export default function NotificationsSection() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [counter, setCounter] = useState(0);

  const addToast = (type: Toast["type"], message: string) => {
    const id = counter + 1;
    setCounter(id);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section id="notifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-yellow-300">
            <Bell size={14} /> Notifications
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Toast So <span className="gradient-text-gold">Smooth</span>
          </h2>
          <p className="text-white/50 text-lg">Click the buttons to fire live notifications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Trigger buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Fire Notifications</h3>
            {examples.map(({ type, message }) => {
              const cfg = toastConfig[type];
              const Icon = cfg.icon;
              return (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToast(type, message)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-gradient-to-r ${cfg.bg} border ${cfg.border} text-left`}
                >
                  <div className={`w-8 h-8 rounded-xl glass flex items-center justify-center`}>
                    <Icon size={14} className={cfg.color} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-semibold capitalize ${cfg.color}`}>{type}</div>
                    <div className="text-white/40 text-xs mt-0.5 truncate">{message}</div>
                  </div>
                  <Plus size={14} className="text-white/20" />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Toast preview area */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 min-h-64 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4 text-white/40 text-sm">
                <Zap size={14} />
                <span>Live notifications appear here</span>
              </div>

              <div className="flex-1 space-y-3">
                <AnimatePresence>
                  {toasts.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-10 text-white/20"
                    >
                      <Bell size={32} className="mb-3" />
                      <span className="text-sm">No notifications yet</span>
                    </motion.div>
                  )}
                  {toasts.map((toast) => {
                    const cfg = toastConfig[toast.type];
                    const Icon = cfg.icon;
                    return (
                      <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r ${cfg.bg} border ${cfg.border}`}
                      >
                        <Icon size={16} className={cfg.color} />
                        <span className="text-white/80 text-sm flex-1">{toast.message}</span>
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => removeToast(toast.id)}
                          className="text-white/30 hover:text-white/60"
                        >
                          <X size={14} />
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
