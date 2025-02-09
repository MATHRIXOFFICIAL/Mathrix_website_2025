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
import "../styles/sidebar.css";
import "../app/globals.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Events } from "../constants/index";

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
  const video1 = "/videos/ScheduleBack.mp4";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle menu open/close
  };

  return (
    <div className="bg-[#e2e8f0]">
      {/* Sidebar */}
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

      {/* <video
        className="fixed top-0 left-0 w-full h-full object-cover "
        src={video1}
        autoPlay
        loop
        muted
      /> */}

      <section className="max-container">
        <div className="py-16">
          <div>
            <h3 className="font-bold uppercase text-6xl flex justify-center items-center text-red-600">
              Schedule For MATHRIX'25
            </h3>
            <h3 className="flex justify-center items-center text-4xl mt-5 font-semibold">
              March 14 - 23
            </h3>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {Events.map((exp, index) => {
                return (
                  <VerticalTimelineElement
                    key={index}
                    date={exp.date}
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: exp.iconBg,
                      boxShadow: "none",
                    }}
                  >
                    <div>
                      <h3 className="text-black text-xl font-poppins font-semibold">
                        {exp.name}
                      </h3>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {exp.points}
                    </ul>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
}
