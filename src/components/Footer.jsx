import React from "react";
import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const developers = [
  {
    name: "Aravindkumar",
    img: "/images/aravind.jpg",
    linkedin: "https://www.linkedin.com/in/aravindkumar-m-206702263/",
  },
  {
    name: "Rajesh Babu",
    img: "/images/rajesh.jpg",
    linkedin: "https://www.linkedin.com/in/rajeshbabu2004/",
  },
  {
    name: "Vimalesh C T",
    img: "/images/vimal1.jpg",
    linkedin: "https://www.linkedin.com/in/vimalesh-c-t/",
  },
];

export default function Footer() {
  return (
    <footer className="footer-container montserrat text-lg">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left flex flex-col gap-10">
          <h2 className="footer-logo-text">MATHRIX</h2>
          <p className="footer-description">
            Explore the world of mathematics and technology with us. Join our
            events, workshops, and competitions to unlock your potential.
          </p>
        </div>

        {/* Center Links */}
        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
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
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-right">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-icons">
            <Link href="https://whatsapp.com/channel/0029VazaJQMJENy6iDroTr0B">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.instagram.com/mathrix_official/">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/mathrix-2025">
              <FaLinkedin />
            </Link>
          </div>

          {/* ✅ Developer Section Directly Below Social Icons */}
          <div className="developer-corner">
            <p className="developer-title">Developed by TechMathrix Team</p>
            <div className="developer-corner-avatars">
              {developers.map((dev, index) => (
                <div key={index} className="developer-avatar">
                  <Link href={dev.linkedin} target="_blank">
                    <Image
                      src={dev.img}
                      alt={dev.name}
                      width={60}
                      height={60}
                      className="developer-img"
                    />
                    <div className="developer-tooltip">{dev.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mathrix. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
