"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Heart, Bookmark, ExternalLink, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Quantum Pro",
    category: "Software",
    price: "$299",
    rating: 4.9,
    reviews: 2847,
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Nebula Suite",
    category: "Design",
    price: "$149",
    rating: 4.7,
    reviews: 1234,
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    badge: "New",
  },
  {
    id: 3,
    name: "Aurora Pack",
    category: "Templates",
    price: "$89",
    rating: 4.8,
    reviews: 987,
    gradient: "from-pink-600 via-rose-600 to-red-600",
    badge: "Hot",
  },
];

function Card3D({ product }: { product: typeof products[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="glass rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Card image area */}
      <div className={`h-44 bg-gradient-to-br ${product.gradient} relative flex items-center justify-center`}>
        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white glass">
          {product.badge}
        </span>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className="w-8 h-8 rounded-full glass flex items-center justify-center"
          >
            <Heart size={14} className={liked ? "text-pink-400 fill-pink-400" : "text-white/60"} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
            className="w-8 h-8 rounded-full glass flex items-center justify-center"
          >
            <Bookmark size={14} className={saved ? "text-yellow-400 fill-yellow-400" : "text-white/60"} />
          </motion.button>
        </div>

        {/* Fake icon */}
        <motion.div
          style={{ translateZ: 30 }}
          className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-4xl"
        >
          ✦
        </motion.div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-white/40 text-xs mb-1">{product.category}</p>
            <h3 className="text-white font-bold text-lg">{product.name}</h3>
          </div>
          <span className="text-xl font-black gradient-text">{product.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
              />
            ))}
          </div>
          <span className="text-white/60 text-xs">{product.rating} ({product.reviews.toLocaleString()})</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r ${product.gradient} flex items-center justify-center gap-2`}
        >
          Get Access <ExternalLink size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function CardsSection() {
  return (
    <section id="cards" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-cyan-300">
            <Star size={14} /> Cards
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            3D Cards That <span className="gradient-text">Breathe</span>
          </h2>
          <p className="text-white/50 text-lg">Hover over any card to feel the depth</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card3D product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
