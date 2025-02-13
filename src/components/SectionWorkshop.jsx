import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "@/styles/section.css";

export default function SectionWorkshop() {
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
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Glassmorphic Background Wrapper */}
      <div className="absolute inset-0 glassmorphic-bg">
        <img
          src="/images/back.jpg"
          className="w-full h-full object-cover"
          alt="Workshop Background"
        />
      </div>

      {/* Foreground Content (Text) */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          style={{ y }}
          className="relative text-8xl font-extrabold uppercase Td-text"
        >
          <span className="text-shadow">WORKSHOPS</span>
        </motion.div>
      </div>
    </div>
  );
}
