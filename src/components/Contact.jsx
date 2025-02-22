import React from "react";
import "../styles/contact.css";
import ContactForm from "./../components/contact/ContactForm";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Accordin from "./../components/contact/Accordin";
import Map from "./contact/Map";
import Footer from "./Footer";
import Link from "next/link";
import MenuBar from "./MenuBar";

const Contact = () => {
  return (
    <div className="contactdiv">
      <MenuBar />
      <div className="secondcontact">
        {/* Left Section - Socials + Map + Accordion */}
        <div className="contactleft">
          <h1 className="connectheading hammersmith">Connect</h1>{" "}
          {/* Connect text before social icons */}
          <div className="contactsocial">
            <div className="cardsocial">
              <Link
                href="https://www.instagram.com/mathrix_official/"
                className="socialContainer containerOne"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VazaJQMJENy6iDroTr0B"
                className="socialContainer containerTwo"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href="https://www.linkedin.com/company/mathrix-2025"
                className="socialContainer containerThree"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          {/* Google Map */}
          <div className="map">
            <Map />
          </div>
        </div>

        {/* Right Section - Contact Form + Accordion */}
        <div className="contactright">
          <ContactForm />

          {/* Accordion Below Contact Form */}
          <div className="accordins-right">
            <Accordin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
