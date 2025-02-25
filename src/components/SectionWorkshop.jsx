import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "@/styles/workshopsection.css";

export default function SectionWorkshop() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={container} className="section-workshop-container">
      <div className="section-workshop-bg">
        <Image
          src="/images/b2.jpg"
          alt="Workshop Background"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="bg-overlay"></div>
      <div className="section-workshop-content">
        <motion.div style={{ y }} className="motion-text">
          <div className="text-3d-effect">WORKSHOPS</div>
        </motion.div>
      </div>
    </div>
  );
}
