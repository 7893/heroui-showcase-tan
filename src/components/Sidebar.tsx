"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Layers, ToggleLeft, BarChart2, FormInput, CreditCard,
  Bell, Loader, ChevronRight, Zap, Search
} from "lucide-react";

const nav = [
  {
    group: "Getting Started",
    items: [{ id: "overview", label: "Overview", icon: Zap }],
  },
  {
    group: "Components",
    items: [
      { id: "buttons", label: "Buttons", icon: Layers },
      { id: "badges", label: "Badges & Chips", icon: ToggleLeft },
      { id: "interactive", label: "Interactive", icon: ToggleLeft },
      { id: "progress", label: "Progress", icon: BarChart2 },
      { id: "avatars", label: "Avatars", icon: Layers },
      { id: "alerts", label: "Alerts", icon: Bell },
    ],
  },
  {
    group: "Data Display",
    items: [
      { id: "charts", label: "Charts", icon: BarChart2 },
      { id: "stats", label: "Stat Cards", icon: BarChart2 },
      { id: "cards3d", label: "3D Cards", icon: CreditCard },
      { id: "skeleton", label: "Skeleton", icon: Loader },
    ],
  },
  {
    group: "Forms",
    items: [
      { id: "inputs", label: "Inputs", icon: FormInput },
      { id: "validation", label: "Validation", icon: FormInput },
    ],
  },
  {
    group: "Feedback",
    items: [
      { id: "toasts", label: "Toasts", icon: Bell },
    ],
  },
];

interface SidebarProps {
  active: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const [search, setSearch] = useState("");

  const filtered = nav.map((g) => ({
    ...g,
    items: g.items.filter((i) =>
      i.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <aside className="w-64 shrink-0 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto py-6 px-3 border-r border-white/5">
      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass mb-6 border border-white/5">
        <Search size={13} className="text-white/30 shrink-0" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search components..."
          className="bg-transparent text-sm text-white/60 placeholder-white/20 outline-none w-full"
        />
      </div>

      {filtered.map((group) => (
        <div key={group.group} className="mb-6">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-widest px-3 mb-2">
            {group.group}
          </p>
          <div className="space-y-0.5">
            {group.items.map((item) => {
              const isActive = active === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  whileHover={{ x: 2 }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-purple-500/15 text-purple-300 font-medium"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  <item.icon size={14} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {isActive && <ChevronRight size={12} className="text-purple-400" />}
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
