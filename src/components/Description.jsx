import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "../styles/desc.css";

export default function Description() {
  const Background = "/images/bg1.jpg"; // Ensure this is a valid path
  const container = useRef();
  const contentRef = useRef(null);
  const h2Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  useEffect(() => {
    if (typeof window !== "undefined" && h2Ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            h2Ref.current.classList.add("reveal");
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(h2Ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      {/* Background Image with Blur Effect */}
      <motion.div style={{ y }} className="absolute inset-0 bg-overlay">
        <img
          src={Background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Box with Glassmorphism */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="glass-box">
          {/* About Mathrix Appears First */}
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About Mathrix
          </motion.h2>

          {/* EPSILON TO INFINITY Drops in Next */}
          <motion.h2
            className="drop-bounce-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {"EPSILON TO INFINITY".split("").map((char, index) => (
              <motion.span
                key={index}
                className="drop-letter"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1 + index * 0.1, // Starts after About Mathrix finishes
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description Text Appears Last */}
          <motion.p
            className="about-description"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Mathrix is the annual intercollegiate symposium where mathematics
            meets technology! Hosted by the Department of Mathematics, College
            of Engineering Guindy, Anna University, Mathrix is a one-of-a-kind
            fest that brings together logic, innovation, and problem-solving
            under one roof. Organized by the brilliant minds of M.Sc. Computer
            Science (5 years), M.Sc. Information Technology (5 years), and M.Sc.
            Mathematics (2 years), Mathrix is more than just a symposium—it's a
            fusion of numbers, algorithms, and cutting-edge tech. With a perfect
            blend of mathematical and technical events, this fest is designed to
            challenge intellects, spark creativity, and push boundaries. From
            thrilling competitions that test your mathematical prowess to
            tech-driven challenges that fuel your coding skills, Mathrix is the
            ultimate arena for innovators, problem-solvers, and
            future disruptors.
          </motion.p>
          {/* Date Text Appears with a Slide-In Effect */}
          <motion.h2
            className="event-date animated-gradient"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            March 28 to March 29
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
