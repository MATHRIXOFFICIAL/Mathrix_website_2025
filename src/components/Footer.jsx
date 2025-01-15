import React, { useState } from "react";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const handleShowLinkedIn = () => {
    setShowLinkedIn((prev) => !prev);
  };

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
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/events">Events</a>
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
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Mathrix. All Rights Reserved.</p>
        <p className="developer-credits" onClick={handleShowLinkedIn}>
          Developed by TechMathrix
        </p>
        {showLinkedIn && (
          <div className="linkedin-popup">
            <a
              href="https://linkedin.com/in/techmathrix"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Developer's LinkedIn
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
