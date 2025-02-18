import React, { useState } from "react";
import "../app/globals.css";
import Link from "next/link";

const MenuBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState({});

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    if (menuActive) {
      setSubMenuActive({}); // Close all submenus when closing main menu
    }
  };

  const toggleSubMenu = (index) => {
    setSubMenuActive((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div
      className={`fixed top-5 right-5 z-50 ${
        menuActive ? "hamburger-guide" : ""
      }`}
    >
      <div className="cursor-pointer w-8 h-8" onClick={toggleMenu}>
        <span
          className={`block h-1 bg-white transition-transform ${
            menuActive ? "translate-y-2.5 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-1 bg-white mt-1 transition-all ${
            menuActive ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-1 bg-white mt-1 transition-transform ${
            menuActive ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        />
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center transition-transform ${
          menuActive ? "scale-100 z-40" : "scale-0"
        }`}
        onClick={toggleMenu}
      >
        <ul
          className="text-center text-white text-xl space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
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
            <Link href="/workshops">Sponsor</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
