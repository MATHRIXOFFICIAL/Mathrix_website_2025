import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "@/styles/section.css";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-black"
    >
      {/* Animated 3D Text */}
      <div className="absolute flex items-center justify-center w-full h-full">
        <motion.div
          style={{ y }}
          className="relative text-8xl font-extrabold uppercase text-yellow-500 Td-text"
        >
          <span className="text-shadow">EVENTS</span>
        </motion.div>
      </div>
    </div>
  );
}
