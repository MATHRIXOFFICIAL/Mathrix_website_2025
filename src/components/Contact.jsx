import React from "react";
import "../styles/contact.css";
import ContactForm from "../components/Contact/ContactForm";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Accordin from "./Contact/Accordin";
import Map from "./contact/Map";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contactdiv">
      <div className="secondcontact">
        {/* Left Section - Socials + Map + Accordion */}
        <div className="contactleft">
          <h1 className="connectheading">Connect</h1>{" "}
          {/* Connect text before social icons */}
          <div className="contactsocial">
            <div className="cardsocial">
              <a
                href="https://www.instagram.com/mathrix_official/"
                className="socialContainer containerOne"
              >
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VazaJQMJENy6iDroTr0B"
                className="socialContainer containerTwo"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/company/mathrix-2025"
                className="socialContainer containerThree"
              >
                <FaLinkedin />
              </a>
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
