"use client";

import { motion } from "framer-motion";
import ComponentBlock from "./ComponentBlock";
import { useState } from "react";
import {
  Check, Heart, Bell, ArrowRight, Download, Share2,
  Eye, EyeOff, Lock, Mail, User, AlertTriangle, Info,
  X, Zap, Plus, Star, Loader2,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

// ─── tiny reusable atoms ───────────────────────────────────────────────
function GlassBtn({ children, gradient, onClick }: { children: React.ReactNode; gradient?: string; onClick?: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium text-white ${gradient ? `bg-gradient-to-r ${gradient}` : "glass border border-white/10"}`}
    >
      {children}
    </motion.button>
  );
}


// ─── section heading ───────────────────────────────────────────────────
function SectionHeading({ id, label, title, desc }: { id: string; label: string; title: string; desc: string }) {
  return (
    <div id={id} className="mb-10 pt-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-purple-300 mb-3 border border-purple-500/20">
        <Zap size={11} /> {label}
      </div>
      <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
      <p className="text-white/40">{desc}</p>
      <div className="mt-6 h-px bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-transparent" />
    </div>
  );
}

// ─── chart data ────────────────────────────────────────────────────────
const areaData = [
  { month: "Jan", v: 4200 }, { month: "Feb", v: 6800 }, { month: "Mar", v: 5400 },
  { month: "Apr", v: 8900 }, { month: "May", v: 7200 }, { month: "Jun", v: 11400 },
  { month: "Jul", v: 9800 },
];
const barData = [
  { d: "M", v: 80 }, { d: "T", v: 45 }, { d: "W", v: 92 },
  { d: "T", v: 67 }, { d: "F", v: 88 }, { d: "S", v: 35 }, { d: "S", v: 22 },
];


// ─── Buttons preview ───────────────────────────────────────────────────
function ButtonsPreview() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <GlassBtn gradient="from-purple-600 to-blue-600">Primary</GlassBtn>
      <GlassBtn gradient="from-red-600 to-pink-600">Danger</GlassBtn>
      <GlassBtn gradient="from-green-600 to-teal-600">Success</GlassBtn>
      <GlassBtn>Ghost</GlassBtn>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium">
        <Download size={14} /> Download
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-white/70 text-sm font-medium">
        <Share2 size={14} /> Share
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center">
        <Plus size={16} />
      </motion.button>
    </div>
  );
}


// ─── Badges preview ────────────────────────────────────────────────────
function BadgesPreview() {
  const chips = [
    { label: "New", g: "from-purple-500 to-blue-500" },
    { label: "Hot", g: "from-red-500 to-orange-500" },
    { label: "Beta", g: "from-green-500 to-teal-500" },
    { label: "Pro", g: "from-yellow-500 to-amber-500" },
    { label: "Sale", g: "from-pink-500 to-rose-500" },
  ];
  const tags = ["React", "TypeScript", "Next.js", "Tailwind", "HeroUI"];
  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <motion.span key={c.label} whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${c.g}`}>
            {c.label}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full text-xs text-purple-300 glass border border-purple-500/20">{t}</span>
        ))}
      </div>
    </div>
  );
}


// ─── Interactive preview ───────────────────────────────────────────────
function InteractivePreview() {
  const [toggled, setToggled] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-wrap gap-8 items-center">
      {/* Toggle */}
      <div className="flex items-center gap-3">
        <span className="text-white/50 text-sm">Toggle</span>
        <motion.button onClick={() => setToggled(!toggled)}
          className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${toggled ? "bg-purple-600" : "bg-white/20"}`}>
          <motion.div animate={{ x: toggled ? 24 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 w-4 h-4 rounded-full bg-white shadow" />
        </motion.button>
      </div>
      {/* Like */}
      <div className="flex items-center gap-3">
        <span className="text-white/50 text-sm">Like</span>
        <motion.button whileTap={{ scale: 0.7 }} onClick={() => setLiked(!liked)}>
          <motion.div animate={{ scale: liked ? [1, 1.5, 1] : 1 }} transition={{ duration: 0.3 }}>
            <Heart size={24} className={liked ? "text-pink-500 fill-pink-500" : "text-white/30"} />
          </motion.div>
        </motion.button>
      </div>
      {/* Stars */}
      <div className="flex items-center gap-2">
        <span className="text-white/50 text-sm">Rating</span>
        <div className="flex gap-1">
          {[1,2,3,4,5].map((s) => (
            <motion.button key={s} whileHover={{ scale: 1.2 }} onClick={() => setRating(s)}>
              <Star size={18} className={s <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"} />
            </motion.button>
          ))}
        </div>
        <span className="text-white/30 text-sm">{rating}.0</span>
      </div>
    </div>
  );
}


// ─── Progress preview ──────────────────────────────────────────────────
function ProgressPreview() {
  const bars = [
    { label: "Performance", value: 92, g: "from-green-500 to-teal-500" },
    { label: "Design", value: 87, g: "from-purple-500 to-blue-500" },
    { label: "Accessibility", value: 78, g: "from-yellow-500 to-orange-500" },
    { label: "Speed", value: 64, g: "from-pink-500 to-rose-500" },
  ];
  return (
    <div className="w-full max-w-sm space-y-4">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between text-xs text-white/40 mb-1.5">
            <span>{b.label}</span><span>{b.value}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/8 overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.value}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}
              className={`h-full rounded-full bg-gradient-to-r ${b.g}`} />
          </div>
        </div>
      ))}
    </div>
  );
}


// ─── Avatars preview ───────────────────────────────────────────────────
function AvatarsPreview() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      {/* Stack */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} whileHover={{ y: -6, zIndex: 10 }}
            style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 5 - i }}
            className="w-9 h-9 rounded-full border-2 border-black overflow-hidden"
          >
            <div className="w-full h-full" style={{ background: `hsl(${i * 55 + 240}deg,70%,60%)` }} />
          </motion.div>
        ))}
        <span className="ml-3 text-white/40 text-sm">+42</span>
      </div>
      {/* Profile card */}
      <div className="flex items-center gap-3 glass px-4 py-3 rounded-2xl border border-white/5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">JD</div>
        <div>
          <div className="text-white font-medium text-sm">Jane Doe</div>
          <div className="text-white/40 text-xs">Senior Designer</div>
        </div>
        <div className="ml-2 w-2 h-2 rounded-full bg-green-400" />
      </div>
    </div>
  );
}


// ─── Alerts preview ────────────────────────────────────────────────────
function AlertsPreview() {
  const alerts = [
    { icon: Check, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", msg: "Deployment completed successfully" },
    { icon: Bell, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", msg: "3 new notifications arrived" },
    { icon: AlertTriangle, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", msg: "Storage usage at 85%" },
    { icon: X, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", msg: "Connection timed out" },
  ];
  return (
    <div className="w-full max-w-sm space-y-2">
      {alerts.map(({ icon: Icon, color, bg, msg }) => (
        <motion.div key={msg} whileHover={{ x: 4 }}
          className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${bg}`}>
          <Icon size={14} className={color} />
          <span className="text-white/70 text-sm flex-1">{msg}</span>
          <ArrowRight size={12} className="text-white/20" />
        </motion.div>
      ))}
    </div>
  );
}


// ─── Charts tooltip (top-level to avoid react/no-nested-components) ───
function ChartTip({ active, payload, label }: {active?: boolean; payload?: {value:number}[]; label?: string}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-3 py-2 text-xs">
      <p className="text-white/50 mb-1">{label}</p>
      <p className="text-white font-bold">${payload[0].value.toLocaleString()}</p>
    </div>
  );
}

// ─── Skeleton pulse (top-level to avoid react/no-nested-components) ───
function SkeletonPulse({ className }: { className?: string }) {
  return (
    <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.6, repeat: Infinity }}
      className={`rounded-xl bg-white/10 ${className}`} />
  );
}

// ─── Charts preview ────────────────────────────────────────────────────
function ChartsPreview() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass rounded-2xl p-5 border border-white/5">
        <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Revenue</p>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.1)" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<ChartTip />} />
            <Area type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} fill="url(#g1)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="glass rounded-2xl p-5 border border-white/5">
        <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Weekly</p>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={barData} barSize={10}>
            <XAxis dataKey="d" stroke="rgba(255,255,255,0.1)" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip contentStyle={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 12 }} />
            <Bar dataKey="v" fill="#6366f1" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


// ─── Stat cards preview ────────────────────────────────────────────────
function StatsPreview() {
  const stats = [
    { label: "Revenue", value: "$128k", change: "+23%", g: "from-purple-600 to-blue-600" },
    { label: "Users", value: "24.8k", change: "+12%", g: "from-blue-600 to-cyan-600" },
    { label: "Uptime", value: "99.9%", change: "Stable", g: "from-green-600 to-teal-600" },
    { label: "Errors", value: "0.01%", change: "-40%", g: "from-orange-600 to-red-600" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }} viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="glass rounded-2xl p-4 border border-white/5">
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.g} mb-3 flex items-center justify-center`}>
            <Info size={14} className="text-white" />
          </div>
          <div className="text-xl font-black text-white">{s.value}</div>
          <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
          <div className="text-green-400 text-xs mt-1">{s.change}</div>
        </motion.div>
      ))}
    </div>
  );
}


// ─── 3D Cards preview ─────────────────────────────────────────────────
function Cards3DPreview() {
  const cards = [
    { name: "Quantum Pro", price: "$299", g: "from-purple-600 to-blue-600", emoji: "✦" },
    { name: "Aurora Pack", price: "$89", g: "from-pink-600 to-rose-600", emoji: "◈" },
    { name: "Nebula Suite", price: "$149", g: "from-green-600 to-teal-600", emoji: "⬡" },
  ];
  return (
    <div className="flex flex-wrap gap-4" style={{ perspective: "800px" }}>
      {cards.map((c) => (
        <motion.div key={c.name} whileHover={{ rotateY: 6, rotateX: -4, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass rounded-2xl overflow-hidden border border-white/8 w-36">
          <div className={`h-24 bg-gradient-to-br ${c.g} flex items-center justify-center text-3xl`}>{c.emoji}</div>
          <div className="p-3">
            <div className="text-white text-xs font-semibold">{c.name}</div>
            <div className="gradient-text font-black mt-0.5">{c.price}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


// ─── Skeleton preview ─────────────────────────────────────────────────
function SkeletonPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="glass rounded-2xl overflow-hidden w-48 border border-white/5">
        <SkeletonPulse className="h-28 rounded-none" />
        <div className="p-4 space-y-2">
          <SkeletonPulse className="h-3 w-1/2" />
          <SkeletonPulse className="h-4 w-3/4" />
          <SkeletonPulse className="h-3 w-full" />
          <div className="flex justify-between pt-1">
            <SkeletonPulse className="h-5 w-12" />
            <SkeletonPulse className="h-7 w-16 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="glass rounded-2xl p-4 border border-white/5 w-48 space-y-3">
        <div className="flex items-center gap-3">
          <SkeletonPulse className="w-10 h-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <SkeletonPulse className="h-3 w-3/4" />
            <SkeletonPulse className="h-2 w-1/2" />
          </div>
        </div>
        <SkeletonPulse className="h-3 w-full" />
        <SkeletonPulse className="h-3 w-4/5" />
        <SkeletonPulse className="h-3 w-full" />
        <SkeletonPulse className="h-8 w-full rounded-xl" />
      </div>
    </div>
  );
}


// ─── Inputs preview ───────────────────────────────────────────────────
function InputsPreview() {
  const [focused, setFocused] = useState<string | null>(null);
  const fields = [
    { id: "name", icon: User, placeholder: "Full name", type: "text" },
    { id: "email", icon: Mail, placeholder: "Email address", type: "email" },
    { id: "pass", icon: Lock, placeholder: "Password", type: "password" },
  ];
  return (
    <div className="w-full max-w-xs space-y-3">
      {fields.map(({ id, icon: Icon, placeholder, type }) => (
        <div key={id} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 glass border ${
          focused === id ? "border-purple-500/50" : "border-white/5"
        }`}>
          <Icon size={15} className={focused === id ? "text-purple-400" : "text-white/25"} />
          <input type={type} placeholder={placeholder}
            onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
            className="flex-1 bg-transparent text-white placeholder-white/25 outline-none text-sm" />
        </div>
      ))}
    </div>
  );
}


// ─── Validation preview ───────────────────────────────────────────────
function ValidationPreview() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailOk = email.includes("@") && email.includes(".");
  const passOk = pass.length >= 8;
  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass border border-white/5">
        <Mail size={15} className={emailOk ? "text-green-400" : "text-white/25"} />
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-white/25 outline-none text-sm" />
        {emailOk && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={14} className="text-green-400" /></motion.div>}
      </div>
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass border border-white/5">
        <Lock size={15} className={passOk ? "text-green-400" : "text-white/25"} />
        <input type={showPass ? "text" : "password"} placeholder="Min 8 characters" value={pass} onChange={(e) => setPass(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-white/25 outline-none text-sm" />
        <button type="button" onClick={() => setShowPass(!showPass)}>
          {showPass ? <EyeOff size={14} className="text-white/25" /> : <Eye size={14} className="text-white/25" />}
        </button>
      </div>
      {pass.length > 0 && (
        <div className="flex gap-1">
          {[1,2,3,4].map((l) => (
            <div key={l} className="flex-1 h-1 rounded-full transition-all"
              style={{ background: pass.length >= l * 2 ? l <= 1 ? "#ef4444" : l <= 2 ? "#f59e0b" : l <= 3 ? "#3b82f6" : "#22c55e" : "rgba(255,255,255,0.1)" }} />
          ))}
        </div>
      )}
    </div>
  );
}


// ─── Toasts preview ───────────────────────────────────────────────────
type ToastType = "success" | "error" | "warning" | "info";
type ToastItem = { id: number; type: ToastType; message: string };
const toastCfg = {
  success: { icon: Check, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  error: { icon: X, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  warning: { icon: AlertTriangle, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  info: { icon: Info, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
};
function ToastsPreview() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [ctr, setCtr] = useState(0);
  const add = (type: ToastType, msg: string) => {
    const id = ctr + 1; setCtr(id);
    setToasts((p) => [...p, { id, type, message: msg }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3500);
  };
  const examples: { type: ToastType; msg: string }[] = [
    { type: "success", msg: "Saved successfully" },
    { type: "error", msg: "Something went wrong" },
    { type: "warning", msg: "Low disk space" },
    { type: "info", msg: "Update available" },
  ];
  return (
    <div className="flex gap-6 flex-wrap items-start w-full">
      <div className="space-y-2">
        {examples.map(({ type, msg }) => {
          const cfg = toastCfg[type];
          return (
            <motion.button key={type} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => add(type, msg)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-sm ${cfg.bg} w-52`}>
              <cfg.icon size={13} className={cfg.color} />
              <span className="text-white/60 capitalize">{type}</span>
              <Plus size={12} className="ml-auto text-white/20" />
            </motion.button>
          );
        })}
      </div>
      <div className="space-y-2 min-w-56">
        {toasts.length === 0 && <p className="text-white/20 text-sm">Fire one →</p>}
        {toasts.map((t) => {
          const cfg = toastCfg[t.type];
          return (
            <motion.div key={t.id} initial={{ opacity: 0, x: 20, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40 }} className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${cfg.bg}`}>
              <cfg.icon size={13} className={cfg.color} />
              <span className="text-white/70 text-sm flex-1">{t.message}</span>
              <button onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))}>
                <X size={12} className="text-white/30" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


// ─── Overview ─────────────────────────────────────────────────────────
function Overview() {
  const features = [
    { icon: Zap, title: "60fps Animations", desc: "Framer Motion powered, buttery smooth every frame." },
    { icon: Loader2, title: "Glassmorphism", desc: "Backdrop blur, noise texture, luminous borders." },
    { icon: Star, title: "Dark First", desc: "Deep black base with vibrant purple-blue accents." },
    { icon: Check, title: "Accessible", desc: "Keyboard friendly, ARIA labels, focus management." },
  ];
  return (
    <div className="space-y-8">
      <div className="glass rounded-2xl p-6 border border-white/5">
        <h3 className="text-white font-bold text-lg mb-2">NEXUS UI</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          A curated collection of glassmorphic UI components built with Next.js, Framer Motion, and Tailwind CSS v4.
          Every component is interactive, animated, and designed for visual impact.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Next.js 15", "Framer Motion", "Tailwind v4", "TypeScript"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs text-purple-300 glass border border-purple-500/20">{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} whileHover={{ y: -2 }}
            className="glass rounded-2xl p-5 border border-white/5 flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-1">{title}</div>
              <div className="text-white/40 text-xs">{desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


// ─── code snippets (truncated for display) ────────────────────────────
const snippets: Record<string, string> = {
  buttons: `<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 py-2 rounded-xl text-sm font-medium
             text-white bg-gradient-to-r from-purple-600
             to-blue-600"
>
  Primary
</motion.button>`,
  badges: `<span className="px-3 py-1 rounded-full text-xs
  font-bold text-white bg-gradient-to-r
  from-purple-500 to-blue-500">
  New
</span>`,
  interactive: `const [toggled, setToggled] = useState(false);

<motion.button onClick={() => setToggled(!toggled)}
  className={\`w-12 h-6 rounded-full \${toggled
    ? "bg-purple-600" : "bg-white/20"}\`}>
  <motion.div animate={{ x: toggled ? 24 : 2 }}
    transition={{ type: "spring", stiffness: 500 }}
    className="w-4 h-4 rounded-full bg-white" />
</motion.button>`,
  progress: `<div className="h-2 rounded-full bg-white/10 overflow-hidden">
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "87%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="h-full rounded-full bg-gradient-to-r
               from-purple-500 to-blue-500"
  />
</div>`,
  avatars: `{[...Array(5)].map((_, i) => (
  <motion.div whileHover={{ y: -6 }}
    style={{ marginLeft: i === 0 ? 0 : -10 }}
    className="w-9 h-9 rounded-full border-2 border-black">
    <div style={{ background: \`hsl(\${i*55+240}deg,70%,60%)\` }} />
  </motion.div>
))}`,
  alerts: `<motion.div whileHover={{ x: 4 }}
  className="flex items-center gap-3 px-4 py-3
             rounded-2xl bg-green-500/10
             border border-green-500/20">
  <Check size={14} className="text-green-400" />
  <span className="text-white/70 text-sm">
    Deployment completed
  </span>
</motion.div>`,
  charts: `<ResponsiveContainer width="100%" height={140}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
      </linearGradient>
    </defs>
    <Area type="monotone" dataKey="v"
      stroke="#a855f7" strokeWidth={2}
      fill="url(#grad)" />
  </AreaChart>
</ResponsiveContainer>`,
  stats: `<motion.div whileHover={{ y: -3 }}
  className="glass rounded-2xl p-4 border border-white/5">
  <div className="text-xl font-black text-white">$128k</div>
  <div className="text-white/40 text-xs mt-0.5">Revenue</div>
  <div className="text-green-400 text-xs mt-1">+23%</div>
</motion.div>`,
  cards3d: `<motion.div
  whileHover={{ rotateY: 6, rotateX: -4, scale: 1.04 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="glass rounded-2xl overflow-hidden border border-white/8">
  <div className="h-24 bg-gradient-to-br
                  from-purple-600 to-blue-600
                  flex items-center justify-center text-3xl">
    ✦
  </div>
</motion.div>`,
  skeleton: `<motion.div
  animate={{ opacity: [0.3, 0.7, 0.3] }}
  transition={{ duration: 1.6, repeat: Infinity }}
  className="h-4 w-3/4 rounded-xl bg-white/10"
/>`,
  inputs: `<div className="flex items-center gap-3 px-4 py-3
           rounded-2xl glass border border-white/5
           focus-within:border-purple-500/50 transition-all">
  <Mail size={15} className="text-white/25" />
  <input type="email" placeholder="Email address"
    className="flex-1 bg-transparent text-white
               placeholder-white/25 outline-none text-sm" />
</div>`,
  validation: `const emailOk = email.includes("@") && email.includes(".");

{emailOk && (
  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
    <Check size={14} className="text-green-400" />
  </motion.div>
)}`,
  toasts: `const [toasts, setToasts] = useState([]);

const add = (type, msg) => {
  const id = Date.now();
  setToasts(prev => [...prev, { id, type, msg }]);
  setTimeout(() => remove(id), 3500);
};

<AnimatePresence>
  {toasts.map(t => (
    <motion.div key={t.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}>
      {t.msg}
    </motion.div>
  ))}
</AnimatePresence>`,
};


// ─── Main export ──────────────────────────────────────────────────────
interface ShowcasePanelProps { active: string }

export default function ShowcasePanel({ active }: ShowcasePanelProps) {
  return (
    <main className="flex-1 min-w-0 py-10 px-8 max-w-4xl">

      {/* Overview */}
      {(active === "overview") && (
        <>
          <SectionHeading id="overview" label="Start Here" title="Overview" desc="Everything you need to build stunning interfaces." />
          <Overview />
        </>
      )}

      {/* Buttons */}
      {(active === "buttons") && (
        <>
          <SectionHeading id="buttons" label="Components" title="Buttons" desc="Gradient, ghost, icon, and loading variants with spring animations." />
          <ComponentBlock title="Button variants" description="Hover and tap for spring feedback." code={snippets.buttons}>
            <ButtonsPreview />
          </ComponentBlock>
        </>
      )}

      {/* Badges */}
      {(active === "badges") && (
        <>
          <SectionHeading id="badges" label="Components" title="Badges & Chips" desc="Gradient badges and outlined tag chips." />
          <ComponentBlock title="Badge variants" code={snippets.badges} fullWidth>
            <BadgesPreview />
          </ComponentBlock>
        </>
      )}

      {/* Interactive */}
      {(active === "interactive") && (
        <>
          <SectionHeading id="interactive" label="Components" title="Interactive" desc="Toggle, like, and star rating with live state." />
          <ComponentBlock title="Toggle / Like / Rating" description="All state is local — try clicking." code={snippets.interactive}>
            <InteractivePreview />
          </ComponentBlock>
        </>
      )}

      {/* Progress */}
      {(active === "progress") && (
        <>
          <SectionHeading id="progress" label="Components" title="Progress Bars" desc="Animated on scroll-enter with gradient fills." />
          <ComponentBlock title="Progress bars" code={snippets.progress}>
            <ProgressPreview />
          </ComponentBlock>
        </>
      )}

      {/* Avatars */}
      {(active === "avatars") && (
        <>
          <SectionHeading id="avatars" label="Components" title="Avatars" desc="Stacked group and profile card variants." />
          <ComponentBlock title="Avatar group & profile card" code={snippets.avatars}>
            <AvatarsPreview />
          </ComponentBlock>
        </>
      )}

      {/* Alerts */}
      {(active === "alerts") && (
        <>
          <SectionHeading id="alerts" label="Components" title="Alerts" desc="Color-coded alert rows with hover slide." />
          <ComponentBlock title="Alert variants" code={snippets.alerts} fullWidth>
            <AlertsPreview />
          </ComponentBlock>
        </>
      )}

      {/* Charts */}
      {(active === "charts") && (
        <>
          <SectionHeading id="charts" label="Data Display" title="Charts" desc="Area and bar charts with gradient fills." />
          <ComponentBlock title="Area & Bar chart" code={snippets.charts} fullWidth>
            <ChartsPreview />
          </ComponentBlock>
        </>
      )}

      {/* Stats */}
      {(active === "stats") && (
        <>
          <SectionHeading id="stats" label="Data Display" title="Stat Cards" desc="Metric cards with icon, value and trend." />
          <ComponentBlock title="Stat cards" code={snippets.stats} fullWidth>
            <StatsPreview />
          </ComponentBlock>
        </>
      )}

      {/* 3D Cards */}
      {(active === "cards3d") && (
        <>
          <SectionHeading id="cards3d" label="Data Display" title="3D Cards" desc="Mouse-reactive perspective tilt on hover." />
          <ComponentBlock title="3D product cards" description="Hover over each card." code={snippets.cards3d}>
            <Cards3DPreview />
          </ComponentBlock>
        </>
      )}

      {/* Skeleton */}
      {(active === "skeleton") && (
        <>
          <SectionHeading id="skeleton" label="Data Display" title="Skeleton" desc="Pulsing placeholder screens for async content." />
          <ComponentBlock title="Skeleton loaders" code={snippets.skeleton}>
            <SkeletonPreview />
          </ComponentBlock>
        </>
      )}

      {/* Inputs */}
      {(active === "inputs") && (
        <>
          <SectionHeading id="inputs" label="Forms" title="Inputs" desc="Focused border glow and icon states." />
          <ComponentBlock title="Input fields" description="Click to focus — border highlights." code={snippets.inputs}>
            <InputsPreview />
          </ComponentBlock>
        </>
      )}

      {/* Validation */}
      {(active === "validation") && (
        <>
          <SectionHeading id="validation" label="Forms" title="Validation" desc="Real-time feedback with password strength meter." />
          <ComponentBlock title="Validated inputs" description="Type to see live validation." code={snippets.validation}>
            <ValidationPreview />
          </ComponentBlock>
        </>
      )}

      {/* Toasts */}
      {(active === "toasts") && (
        <>
          <SectionHeading id="toasts" label="Feedback" title="Toasts" desc="Animated toast notifications with auto-dismiss." />
          <ComponentBlock title="Toast system" description="Click a button to fire a toast." code={snippets.toasts} fullWidth>
            <ToastsPreview />
          </ComponentBlock>
        </>
      )}

    </main>
  );
}
