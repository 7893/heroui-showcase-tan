"use client";

import { motion } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const areaData = [
  { month: "Jan", revenue: 4200, users: 1200 },
  { month: "Feb", revenue: 6800, users: 1900 },
  { month: "Mar", revenue: 5400, users: 1600 },
  { month: "Apr", revenue: 8900, users: 2400 },
  { month: "May", revenue: 7200, users: 2100 },
  { month: "Jun", revenue: 11400, users: 3200 },
  { month: "Jul", revenue: 9800, users: 2800 },
];

const barData = [
  { day: "M", value: 80 },
  { day: "T", value: 45 },
  { day: "W", value: 92 },
  { day: "T", value: 67 },
  { day: "F", value: 88 },
  { day: "S", value: 35 },
  { day: "S", value: 22 },
];

function AnimatedCounter({ target, prefix = "" }: { target: number; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{prefix}{count.toLocaleString()}</span>;
}

const stats = [
  { label: "Total Revenue", value: 128400, prefix: "$", change: "+23.5%", icon: DollarSign, color: "from-purple-600 to-blue-600" },
  { label: "Active Users", value: 24830, prefix: "", change: "+12.1%", icon: Users, color: "from-blue-600 to-cyan-600" },
  { label: "Growth Rate", value: 34, prefix: "", suffix: "%", change: "+5.2%", icon: TrendingUp, color: "from-green-600 to-teal-600" },
  { label: "Uptime", value: 99, prefix: "", suffix: ".9%", change: "Stable", icon: Activity, color: "from-orange-600 to-red-600" },
];

const CustomTooltip = ({ active, payload, label }: {active?: boolean, payload?: {value: number}[], label?: string}) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl px-4 py-3 text-sm">
        <p className="text-white/60 mb-1">{label}</p>
        <p className="text-white font-bold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-blue-300">
            <Activity size={14} /> Dashboard
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Data Never Looked <span className="gradient-text">This Good</span>
          </h2>
          <p className="text-white/50 text-lg">Real-time metrics with animated charts</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-3xl p-6"
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon size={18} className="text-white" />
              </div>
              <div className="text-2xl font-black text-white">
                <AnimatedCounter target={stat.value} prefix={stat.prefix} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              <div className="text-green-400 text-xs mt-2">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Area chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-bold text-lg">Revenue Overview</h3>
                <p className="text-white/40 text-sm">Last 7 months</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs text-green-400 bg-green-500/10">↑ 23.5%</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.2)" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="#a855f7" strokeWidth={2} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-white font-bold text-lg mb-1">Weekly Activity</h3>
            <p className="text-white/40 text-sm mb-6">Sessions per day</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData} barSize={12}>
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.2)" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }} />
                <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
