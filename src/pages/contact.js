import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import "../styles/sidebar.css"; // Ensure the path to CSS is correct
import "../styles/eventsection.css";
import "../styles/workshopsection.css";
import Workshopimg from "../../public/images/1.jpg";
import Data from "../../public/Data/Workshopdata";
// import Contact from "../../components/Contact";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle menu open/close
  };

  return (
    <div>
      <motion.div
        className={`sidebar ${menuOpen ? "open" : ""}`}
        variants={variants}
        animate={menuOpen ? "open" : "close"}
        initial="close"
      >
        <button onClick={toggleMenu} aria-label="Toggle menu" className="but">
          {menuOpen ? "Close" : "Menu"}
        </button>
        <ul className="menu-links">
          <li>
            <Link href="/events">Events</Link>
          </li>

          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/workshops">Workshops</Link>
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
            <FaFacebook aria-label="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter aria-label="Twitter" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-label="Instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-label="GitHub" />
          </a>
        </div>
      </motion.div>

      {/* <Contact /> */}
    </div>
  );
}
