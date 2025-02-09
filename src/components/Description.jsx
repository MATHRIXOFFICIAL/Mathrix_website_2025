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

<<<<<<< HEAD
      <div className="absolute inset-0 flex md:flex-row flex-col-reverse  items-center justify-center text-center">
        <div className="md:w-3/5 md:h-1/2 w-full h-auto">
          <h2 className="h2jan px-10 py-20 animated-gradient" ref={h2Ref}>
            March 28 to March 29
          </h2>
          <div className="divpara">
            <p className="fade-in px-10 -mt-5 text-sm md:text-base">
              Mathrix is an annual mathematics and technology event designed to
              inspire and educate the next generation of innovators and
              thinkers. Experience hands-on workshops, insightful lectures, and
              exciting competitions. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="h-1/2 md:w-2/5 sm:w-2/3 h-auto flex flex-wrap items-center pl-5">
          <div>
            <h2 className="h2math animated-gradient text-left">
              About Mathrix
            </h2>
            <div className="divpara mt-5">
              <p
                className={`text-[2.5vw] uppercase text-left max-w-[80vw] leading-none typing-animation`}
              >
                EPSILON TO INFINITY
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animated-gradient {
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 2s forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .typing-animation {
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          animation: typing 4s steps(40, end) infinite, blink 0.5s step-end infinite;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          50% {
            width: 100%; /* Fully typed */
          }
          85% {
            width: 100%; /* Hold fully typed state */
          }
          100% {
            width: 0; /* Reset to hidden */
          }
        }

        @keyframes blink {
          from {
            border-right-color: rgba(255, 255, 255, 0.75);
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
=======
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
            Mathrix is an annual mathematics and technology event designed to
            inspire and educate the next generation of innovators and thinkers.
            Experience hands-on workshops, insightful lectures, and exciting
            competitions.
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
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
    </div>
  );
}
