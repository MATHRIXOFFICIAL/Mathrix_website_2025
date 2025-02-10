import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
import "../styles/sidebar.css";

// Variants for menu animation
const variants = {
  open: {
    width: 480,
    height: 650,
  },
  close: {
    width: 100,
    height: 40,
  },
};

export default function Intro() {
  const Background = "/images/back1.mp4";
  const Logo = "/images/logo.png";
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
      <motion.div style={{ y }} className="absolute inset-0 bg-red-400">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Background} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </motion.div>

      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className={`but mt-6 ${menuOpen ? "" : "hover:-translate-x-4"}`}
      >
        {menuOpen ? (
          <div className="flex justify-end mr-7 text-xl">
            <IoMdCloseCircle />
          </div>
        ) : (
          "Menu"
        )}
      </button>

      <motion.div
        className={`sidebar ${menuOpen ? "open" : ""}`}
        variants={variants}
        animate={menuOpen ? "open" : "close"}
        initial="close"
      >
        <ul className="menu-links">
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/workshops">Workshops</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
      <div className="logo-container">
        <motion.img
          src={Logo}
          alt="Mathrix Logo"
          className="logo-effect"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="typing-text-container">
          <span className="typing-text">MATHRIX'25</span>
        </div>

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
  );
}
