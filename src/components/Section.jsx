import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "@/styles/section.css";
import Image from "next/image";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Smooth scrolling effect
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-gray-800"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/images/b1.jpg"
          alt="Background"
          width={800}
          height={600}
          layout="intrinsic"
        />
      </div>

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 p-20 text-white w-full h-full flex flex-col justify-between">
        {/* Add your content here */}
      </div>

      {/* Animated Text with 3D Shadow Effect */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex flex-col items-center justify-center">
              <div className="t-3d-effect">EVENTS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
