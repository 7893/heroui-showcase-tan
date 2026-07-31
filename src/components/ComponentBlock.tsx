"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, Eye, Copy, Check } from "lucide-react";

interface ComponentBlockProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function ComponentBlock({
  title,
  description,
  code,
  children,
  fullWidth,
}: ComponentBlockProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-10">
      {/* Title */}
      <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
      {description && (
        <p className="text-white/40 text-sm mb-4">{description}</p>
      )}

      {/* Panel */}
      <div className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02]">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1">
            {(["preview", "code"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  tab === t
                    ? "bg-purple-500/20 text-purple-300"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {t === "preview" ? <Eye size={12} /> : <Code2 size={12} />}
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          {tab === "code" && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={copy}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1.5 text-green-400">
                    <Check size={12} /> Copied!
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
                    <Copy size={12} /> Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {tab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`p-8 flex flex-wrap gap-4 items-center ${fullWidth ? "" : "justify-center"}`}
              style={{
                backgroundImage: `radial-gradient(rgba(139,92,246,0.04) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-5 overflow-x-auto"
            >
              <pre className="text-sm text-white/60 leading-relaxed font-mono whitespace-pre-wrap">
                <code>{code}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
