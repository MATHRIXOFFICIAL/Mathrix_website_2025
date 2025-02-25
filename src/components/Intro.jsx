"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "../styles/sidebar.css";
import MenuBar from "./MenuBar";
// import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Starfield from "./starBackground/Starfield";
import ShootingStar from "./starBackground/ShootingStar";
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
      {/* <Starfield numStars={1700} size={1} duration={100} />
          <Starfield numStars={700} size={2} duration={125} />
          <Starfield numStars={200} size={3} duration={175} />
          <ShootingStar /> */}
      {/* <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="w-full h-full object-cover fixed top-0 left-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
      </motion.div> */}
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
        {/* <motion.img
              src={Logo1}
              alt="Animated Logo"
              className="logo1-effect"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: -3 }}
            /> */}
        <h3 className="font-bold uppercase text-9xl flex justify-center items-center bg-gradient-to-b from-gray-300 to-black text-transparent bg-clip-text">
          MATHRIX
        </h3>

        <div className="mt-10 text-2xl font-bold">
          <p>Countdown to the Event:</p>
          <div className="countdown-container">
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
    //   </div>
    // </div>
  );
}
