import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const Background = "/images/math.mp4"; // Corrected path for the video
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-03-01T00:00:00").getTime(); // Countdown date

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="typing-text-container">
          <span className="typing-text">MATHRIX'25</span>
        </div>

        <style>{`
          .typing-text-container {
            position: relative;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            font-size: 80px;
            font-weight: bold;
            color: transparent;
            background: linear-gradient(45deg, #ff6ec4, #7873f5);
            -webkit-background-clip: text;
            animation: typing 4s steps(12) infinite, blink 0.5s step-end infinite;
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

        <div className="mt-10 text-2xl font-bold">
          <p>Countdown to the Event:</p>
          <div className="flex space-x-4 text-3xl mt-4">
            <div>
              <p>{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p>{timeLeft.hours}</p>
              <span>Hours</span>
            </div>
            <div>
              <p>{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>{timeLeft.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
