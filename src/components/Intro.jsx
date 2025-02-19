"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "../styles/sidebar.css";
import MenuBar from "./MenuBar";

export default function Intro() {
  const Background = "/images/back1.mp4";
  const Logo = "/images/logo.png";
  const Logo1 = "/images/logo1.png"; // NEW animated logo

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]);

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
    <div className="h-screen overflow-hidden relative" ref={container}>
      <div className="z-0 inset-0 flex flex-row flex-wrap md:flex-nowrap overflow-hidden h-full absolute">
        {[2, 3, 1, 4].map((num) => (
          <div key={num} className="w-full h-full">
            <img
              className="w-full h-full object-cover brightness-50 hover:brightness-100"
              src={`/IntroImage/${num}.jpg`}
              alt={`Intro Image ${num}`}
            />
          </div>
        ))}
      </div>

      <MenuBar />

      <div className="logo-container">
        <motion.img
          src={Logo}
          alt="Mathrix Logo"
          className="logo-effect cursor-pointer"
        />
      </div>

      <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center text-center text-white z-10 pointer-events-none">
        <h3 className="font-bold uppercase text-6xl md:text-9xl flex justify-center items-center bg-gradient-to-b from-gray-300 to-black text-transparent bg-clip-text">
          MATHRIX
        </h3>
        <div className="mt-5 md:mt-10 text-xl md:text-2xl font-bold">
          <div className="countdown-3d-container">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className={`countdown-3d-cube ${
                  label === "seconds" ? "animate-rotate-cube" : ""
                }`}
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
