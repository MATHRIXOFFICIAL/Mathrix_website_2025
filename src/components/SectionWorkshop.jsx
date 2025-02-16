import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "@/styles/workshopsection.css";

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
      className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-gray-800"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/b2.jpg"
          alt="Background"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 p-20 text-white w-full h-full flex flex-col justify-between">
        {/* Additional content can go here */}
      </div>

      {/* Animated Text */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 mix-blend-overlay">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="text-3d-effect">WORKSHOPS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
