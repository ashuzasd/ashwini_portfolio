"use client";

import { motion } from "framer-motion";

export function RetroGrid() {
  const gridItems = Array.from({ length: 40 }).map((_, i) => (
    <motion.div
      key={i}
      className="h-8 w-8 border border-white opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.2], scale: [1, 1.1, 1] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 1,
        duration: 2.5,
        delay: i * 0.05,
      }}
    />
  ));

  return (
    <div className="absolute inset-0 grid grid-cols-8 gap-6 p-8">
      {gridItems}
    </div>
  );
}
