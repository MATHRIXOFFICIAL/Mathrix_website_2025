"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const BoxesCore = () => {
  const rows = Array.from({ length: 15 });
  const cols = Array.from({ length: 10 });

  const colorOptions = [
    "#38bdf8", // sky-300
    "#f472b6", // pink-300
    "#4ade80", // green-300
    "#facc15", // yellow-300
    "#f43f5e", // red-300
    "#a855f7", // purple-300
    "#3b82f6", // blue-300
    "#6366f1", // indigo-300
    "#8b5cf6", // violet-300
  ];

  const [boxColors, setBoxColors] = useState([]);

  useEffect(() => {
    setBoxColors(
      rows.map(() =>
        cols.map(
          () => colorOptions[Math.floor(Math.random() * colorOptions.length)]
        )
      )
    );
  }, []);

  return (
    <div
      className="absolute w-full h-full flex flex-wrap"
      style={{ transform: "skewX(-20deg) skewY(10deg) scale(1.2)" }}
    >
      {boxColors.length > 0 &&
        boxColors.map((rowColors, rowIndex) => (
          <div key={rowIndex} className="flex">
            {rowColors.map((color, colIndex) => (
              <motion.div
                key={colIndex}
                className="w-16 h-8 border border-gray-800"
                style={{ backgroundColor: color }} // ✅ Fix: Ensures initial color works
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#fbbf24", // ✅ Fix: Hover color now works
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
