"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "../styles/sidebar.css";
import MenuBar from "./MenuBar";
import "../styles/star.css";

const variants = {
  open: { width: 480, height: 650 },
  close: { width: 100, height: 40 },
};

export default function Intro() {
  const Background = "/images/back1.mp4";
  const Logo = "/images/logo.png";
  const Logo1 = "/images/logo1.png"; // NEW animated logo

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]); // Fixed white screen issue

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-03-29T00:00:00").getTime();

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
    // <div className="container">
    //   <div className="sky">
    <div className="h-screen overflow-hidden relative" ref={container}>
      <div className="z-0 inset-0 flex flex-row  overflow-hidden h-full absolute">
        <div>
          <img
            className="pointer-events-auto brightness-50 hover:brightness-100 w-[50vw] h-full"
            src="../IntroImage/1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="brightness-50 hover:brightness-100 w-[50vw] h-full"
            src="../IntroImage/2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="brightness-50 hover:brightness-100 w-[50vw] h-full"
            src="../IntroImage/3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="brightness-50 hover:brightness-100 w-[50vw] h-full"
            src="../IntroImage/4.jpg"
            alt=""
          />
        </div>
      </div>

      <MenuBar />

      <div className="logo-container">
        <motion.img
          src={Logo}
          alt="Mathrix Logo"
          className="logo-effect cursor-pointer"
        />
      </div>

      {/* Replaced Typing Text with Animated Logo1 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 pointer-events-none">
        <h3 className="font-bold uppercase text-9xl flex justify-center items-center bg-gradient-to-b from-gray-300 to-black text-transparent bg-clip-text">
          MATHRIX
        </h3>
        <div className="mt-10 text-2xl font-bold">
          <div className="countdown-3d-container">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className={`countdown-3d-cube ${
                  label === "seconds" ? "animate-rotate-cube" : ""
                }`} // Add rotation only for seconds
              >
                <div className="cube">
                  <div className="face front">{value}</div>
                  <div className="face left">{value}</div>
                  <div className="face right">{value}</div>
                  <div className="face top">{value}</div>
                  <div className="face bottom">{value}</div>
                </div>
                <span className="countdown-label">{label.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
