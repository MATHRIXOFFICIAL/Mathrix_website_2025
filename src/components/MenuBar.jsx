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
    <div className="fixed top-5 right-5 z-50">
      {/* Menu Icon */}
      <div
        className="cursor-pointer w-8 h-8 z-50 relative md:w-10 md:h-10"
        onClick={toggleMenu}
      >
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

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center transition-transform ${
          menuActive ? "scale-100 z-40" : "scale-0"
        }`}
        onClick={toggleMenu}
      >
        <ul
          className="text-center text-white text-xl space-y-6 p-4 w-4/5 sm:w-3/5 md:w-2/5"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/events">Events</Link>
          </li>
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/schedule">Schedule</Link>
          </li>
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/workshops">Workshops</Link>
          </li>
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/sponsor">Sponsor</Link>
          </li>
          <li className="hover:text-yellow-300 text-lg md:text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
