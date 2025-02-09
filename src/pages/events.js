import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { img1, img2 } from "../../public/images/index";
import "../styles/sidebar.css"; // Ensure the path to CSS is correct
// import "../styles/eventsection.css";
// import "../styles/workshopsection.css";
import "../styles/Eventstyle.css";
import "../app/globals.css";

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

  const [pageIsOpen, setPageIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const cardsRef = useRef([]);
  const coverRef = useRef(null);
  const openContentRef = useRef(null);
  const openContentTextRef = useRef(null);
  const openContentImageRef = useRef(null);
  const closeContentRef = useRef(null);

  useEffect(() => {
    const init = () => {
      resize();
      attachListeners();
    };

    const resize = () => {
      if (pageIsOpen && currentCard) {
        const cardPosition = currentCard.getBoundingClientRect();
        setCoverPosition(cardPosition);
        scaleCoverToFillWindow(cardPosition);
      }
    };

    const attachListeners = () => {
      cardsRef.current.forEach((card, i) => {
        card.addEventListener("click", () => onCardClick(card, i));
      });
      closeContentRef.current.addEventListener("click", onCloseClick);
      window.addEventListener("resize", resize);
    };

    const onCardClick = (card, i) => {
      setCurrentCard(card);
      card.classList.add("clicked");
      setTimeout(() => animateCoverUp(card), 500);
      animateOtherCards(card, true);
      openContentRef.current.classList.add("open");
    };

    const animateCoverUp = (card) => {
      const cardPosition = card.getBoundingClientRect();
      const cardStyle = getComputedStyle(card);
      setCoverPosition(cardPosition);
      setCoverColor(cardStyle);
      scaleCoverToFillWindow(cardPosition);
      openContentTextRef.current.innerHTML = `<h1>${card.children[2].textContent}</h1>${paragraphText}`;
      openContentImageRef.current.src = card.children[1].src;
      setTimeout(() => {
        window.scroll(0, 0);
        setPageIsOpen(true);
      }, 300);
    };

    const animateCoverBack = (card) => {
      const cardPosition = card.getBoundingClientRect();
      setCoverPosition(cardPosition);
      scaleCoverToFillWindow(cardPosition);
      coverRef.current.style.transform = `scaleX(1) scaleY(1) translate3d(0px, 0px, 0px)`;
      setTimeout(() => {
        openContentTextRef.current.innerHTML = "";
        openContentImageRef.current.src = "";
        coverRef.current.style.width = "0px";
        coverRef.current.style.height = "0px";
        setPageIsOpen(false);
        card.classList.remove("clicked");
      }, 301);
    };

    const setCoverPosition = (cardPosition) => {
      coverRef.current.style.left = `${cardPosition.left}px`;
      coverRef.current.style.top = `${cardPosition.top}px`;
      coverRef.current.style.width = `${cardPosition.width}px`;
      coverRef.current.style.height = `${cardPosition.height}px`;
    };

    const setCoverColor = (cardStyle) => {
      coverRef.current.style.backgroundColor = cardStyle.backgroundColor;
    };

    const scaleCoverToFillWindow = (cardPosition) => {
      const scaleX = window.innerWidth / cardPosition.width;
      const scaleY = window.innerHeight / cardPosition.height;
      const offsetX =
        (window.innerWidth / 2 - cardPosition.width / 2 - cardPosition.left) /
        scaleX;
      const offsetY =
        (window.innerHeight / 2 - cardPosition.height / 2 - cardPosition.top) /
        scaleY;
      coverRef.current.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) translate3d(${offsetX}px, ${offsetY}px, 0px)`;
    };

    const onCloseClick = () => {
      openContentRef.current.classList.remove("open");
      animateCoverBack(currentCard);
      animateOtherCards(currentCard, false);
    };

    const animateOtherCards = (card, out) => {
      let delay = 100;
      cardsRef.current.forEach((c, i) => {
        if (c === card) return;
        if (out) animateOutCard(c, delay);
        else animateInCard(c, delay);
        delay += 100;
      });
    };

    const animateOutCard = (card, delay) => {
      setTimeout(() => card.classList.add("out"), delay);
    };

    const animateInCard = (card, delay) => {
      setTimeout(() => card.classList.remove("out"), delay);
    };

    init();

    return () => {
      window.removeEventListener("resize", resize);
      cardsRef.current.forEach((card) =>
        card.removeEventListener("click", onCardClick)
      );
      if (closeContentRef.current) {
        closeContentRef.current.removeEventListener("click", onCloseClick);
      }
    };
  }, [pageIsOpen, currentCard]);

  const paragraphText = `<p>Somebody once told me the world is gonna roll me...</p>`;

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
      <div className="min-h-screen p-10">
        <div className="flex justify-between gap-96">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-extrabold text-yellow-500">Events</h1>
            <h2 className="text-6xl font-extrabold">Mathrix'25</h2>
            <p className="">
              Immerse yourself in hands-on learning experiences at Saarang's
              dynamic workshops. Led by industry experts and talented
              professionals, these sessions offer unique opportunities to
              develop new skills and explore your interests in an engaging
              environment.
            </p>
          </div>
          <img src={img2} alt="Event" />
        </div>

        <h1
          // style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }}
          className="mt-10 flex items-center justify-center font-extrabold text-4xl"
          // className="text-6xl font-extrabold italic text-gray-900"
        >
          Upcoming Tech Events
        </h1>

        <div className="mt-5">
          <div className="container">
            <div className="card-column column-0">
              <div
                className="card card-color-0"
                ref={(el) => (cardsRef.current[0] = el)}
              >
                <div className="border"></div>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg"
                  alt="Allstar"
                />
                <h1>Hey now, you're an allstar</h1>
              </div>
              <div
                className="card card-color-2"
                ref={(el) => (cardsRef.current[1] = el)}
              >
                <div className="border"></div>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg"
                  alt="Rock star"
                />
                <h1>Hey now, you're a rock star</h1>
              </div>
            </div>
            <div className="card-column column-1">
              <div
                className="card card-color-1"
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className="border"></div>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg"
                  alt="Game on"
                />
                <h1>Get your game on, go play</h1>
              </div>
              <div
                className="card card-color-3"
                ref={(el) => (cardsRef.current[3] = el)}
              >
                <div className="border"></div>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg"
                  alt="Show on"
                />
                <h1>Get the show on, get paid</h1>
              </div>
            </div>
            <div id="cover" className="cover" ref={coverRef}></div>
            <div
              id="open-content"
              className="open-content"
              ref={openContentRef}
            >
              <a
                href="#"
                id="close-content"
                className="close-content"
                ref={closeContentRef}
              >
                <span className="x-1"></span>
                <span className="x-2"></span>
              </a>
              <img
                id="open-content-image"
                src=""
                alt="Content"
                ref={openContentImageRef}
              />
              <div
                className="text"
                id="open-content-text"
                ref={openContentTextRef}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
