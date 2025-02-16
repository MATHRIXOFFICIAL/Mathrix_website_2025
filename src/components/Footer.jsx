import React from "react";
import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const developers = [
  {
    name: "Aravindkumar",
    img: "/images/aravind.jpg",
    linkedin: "https://linkedin.com/in/amjath",
  },
  {
    name: "Rajesh Babu",
    img: "/images/rajesh.jpg",
    linkedin: "https://linkedin.com/in/sagar",
  },
  {
    name: "Vimalesh C T",
    img: "/images/vimal1.jpg",
    linkedin: "https://www.linkedin.com/in/vimalesh-c-t/",
  },
];

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">MATHRIX</h2>
          <p className="footer-description">
            Explore the world of mathematics and computer technology with us.
            Join our events, workshops, and competitions to unlock your
            potential.
          </p>
        </div>

        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/schedule">Schedule</a>
            </li>
            <li>
              <a href="/workshops">Workshops</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-icons">
            <a
              href="https://whatsapp.com/channel/0029VazaJQMJENy6iDroTr0B"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/mathrix_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/mathrix-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Mathrix. All Rights Reserved.</p>
        <div className="developer-corner">
          <p className="developer-title">Developed by TechMathrix Team</p>
          <div className="developer-corner-avatars">
            {developers.map((dev, index) => (
              <div key={index} className="developer-avatar">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={dev.img} alt={dev.name} className="developer-img" />
                  <div className="developer-tooltip">{dev.name}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
