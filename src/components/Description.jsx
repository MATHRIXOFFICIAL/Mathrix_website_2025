import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./desc.css";

export default function Description() {
  const Background = "/images/bk.gif"; // Ensure this is a static path in the 'public' directory
  const container = useRef();
  const contentRef = useRef(null);
  const h2Ref = useRef(null);

  // Framer Motion scroll progress
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
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={Background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="head">
          <h2 className="h2jan mx-10 my-20 animated-gradient" ref={h2Ref}>
            March 28 to March 29
          </h2>
          <h2 className="h2math animated-gradient">About Mathrix</h2>
        </div>

        <div
          className="flex relative overflow-hidden divcont mx-5 mb-5 divabout"
          ref={contentRef}
        >
          <div className="divpara">
            <p className="fade-in">
              Mathrix is an annual mathematics and technology event designed to
              inspire and educate the next generation of innovators and
              thinkers. Experience hands-on workshops, insightful lectures, and
              exciting competitions.
            </p>
          </div>
          <div className="divmath">
            <p
              className={`text-[2.5vw] uppercase text-left max-w-[80vw] leading-none typing-animation`}
            >
              EPSILON TO INFINITY
            </p>
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
          animation: typing 4s steps(40, end), blink 0.5s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
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
    </div>
  );
}
