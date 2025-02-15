import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Ztext from "react-ztext";
import "@/styles/section.css";
// import { transform } from "next/dist/build/swc/generated-native";

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
      className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-gray-800"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/images/back2.mp4" // Ensure the path to the video file is correct
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 p-20 text-white w-full h-full flex flex-col justify-between">
        {/* Additional content can go here */}
      </div>

      {/* Animated Text */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 mix-blend-overlay">
            <p className="text-[6vw] uppercase proshow">EVENTS</p>

            {/* <h1>
              <span data-z>1rem</span>
            </h1>
            <h1>
              <span data-z data-z-layers="25" data-z-depth="60px">
                60px
              </span>
            </h1> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
