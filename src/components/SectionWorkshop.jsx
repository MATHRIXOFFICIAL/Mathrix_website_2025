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
      className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-800"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src="/images/b2.jpg"
          alt="Background"
          width={1920}
          height={600}
        />
      </div>

      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 px-6 text-white flex flex-col justify-center w-full h-full text-center">
        {/* Content here */}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div style={{ y }} className="relative w-full text-center">
          <div className="t-3d-effect1">WORKSHOPS </div>
        </motion.div>
      </div>
    </div>
  );
}
