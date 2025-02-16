import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "../styles/desc.css";
import { Cover } from "@/ui/cover";
import Starfield from "./starBackground/Starfield";
import ShootingStar from "./starBackground/ShootingStar";
import "../styles/star.css";
// import "../styles/schedule.css";

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
    <>
      <div className="container">
        <div className="sky">
          <div className="h-screen overflow-hidden relative" ref={container}>
            <Starfield numStars={1700} size={1} duration={100} />
            <Starfield numStars={700} size={2} duration={125} />
            <Starfield numStars={200} size={3} duration={175} />
            <ShootingStar />

            {/* Content Box with Glassmorphism */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="glass-box">
                {/* About Mathrix Appears First */}
                <motion.h2
                  className="font-bold uppercase text-6xl grad-text"
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
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <Cover>EPSILON TO INFINITY</Cover>
                </motion.h2>

                {/* Description Text Appears Last */}
                <motion.p
                  className="about-description"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                >
                  Mathrix is the annual intercollegiate symposium where
                  mathematics meets technology! Hosted by the Department of
                  Mathematics, College of Engineering Guindy, Anna University,
                  Mathrix is a one-of-a-kind fest that brings together logic,
                  innovation, and problem-solving under one roof. Organized by
                  the brilliant minds of M.Sc. Computer Science (5 years), M.Sc.
                  Information Technology (5 years), and M.Sc. Mathematics (2
                  years), Mathrix is more than just a symposium—it's a fusion of
                  numbers, algorithms, and cutting-edge tech. With a perfect
                  blend of mathematical and technical events, this fest is
                  designed to challenge intellects, spark creativity, and push
                  boundaries. From thrilling competitions that test your
                  mathematical prowess to tech-driven challenges that fuel your
                  coding skills, Mathrix is the ultimate arena for innovators,
                  problem-solvers, and future disruptors.
                </motion.p>
                {/* Date Text Appears with a Slide-In Effect */}
                <motion.h2
                  className="event-date animated-gradient"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3, duration: 1 }}
                >
                  29th March 2025
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
