"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Check, Mail, Lock, User } from "lucide-react";

export default function FormsSection() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const emailValid = email.includes("@") && email.includes(".");
  const passwordValid = password.length >= 8;
  const nameValid = name.length >= 2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValid && passwordValid && nameValid) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="forms" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-pink-300">
            <User size={14} /> Forms
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Input That <span className="gradient-text-gold">Feels Magic</span>
          </h2>
          <p className="text-white/50 text-lg">Validation with fluid feedback</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Create Account</h3>
            <p className="text-white/40 text-sm mb-8">Join thousands of happy users</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <div
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                    focused === "name"
                      ? "glass border border-purple-500/50 glow-purple"
                      : "glass border border-white/5"
                  }`}
                >
                  <User size={16} className={nameValid ? "text-green-400" : "text-white/30"} />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-sm"
                  />
                  <AnimatePresence>
                    {nameValid && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={16} className="text-green-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Email */}
              <div>
                <div
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                    focused === "email"
                      ? "glass border border-purple-500/50 glow-purple"
                      : "glass border border-white/5"
                  }`}
                >
                  <Mail size={16} className={emailValid ? "text-green-400" : "text-white/30"} />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-sm"
                  />
                  <AnimatePresence>
                    {emailValid && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={16} className="text-green-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Password */}
              <div>
                <div
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                    focused === "password"
                      ? "glass border border-purple-500/50 glow-purple"
                      : "glass border border-white/5"
                  }`}
                >
                  <Lock size={16} className={passwordValid ? "text-green-400" : "text-white/30"} />
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password (min 8 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused(null)}
                    className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-sm"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff size={16} className="text-white/30" /> : <Eye size={16} className="text-white/30" />}
                  </button>
                </div>
                {/* Strength bar */}
                {password.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4].map((level) => (
                      <motion.div
                        key={level}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="flex-1 h-1 rounded-full"
                        style={{
                          background:
                            password.length >= level * 2
                              ? level <= 1 ? "#ef4444" : level <= 2 ? "#f59e0b" : level <= 3 ? "#3b82f6" : "#22c55e"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="done"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Check size={18} /> Account Created!
                    </motion.div>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                    >
                      Create Account
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: "Real-time Validation", desc: "Instant feedback as you type, no more submit and pray.", icon: Check },
              { title: "Strength Meter", desc: "Visual password strength with smooth animated bars.", icon: Lock },
              { title: "Micro-interactions", desc: "Every focus, blur and success has its own animation.", icon: Mail },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{title}</h4>
                  <p className="text-white/40 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
