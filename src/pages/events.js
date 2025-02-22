import React, { useState, useEffect, useRef } from "react";
import { img1, img2 } from "../../public/images/index";
// import "../styles/Eventstyle.css";
import "../app/globals.css";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import { LampDemo } from "@/components/ComingSoon"; // Import the Coming Soon component

export default function Intro() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center px-4 md:px-8">
      <MenuBar />

      <div className="flex flex-col text-white text-center md:text-left mt-10 md:mt-20 mb-10 hammersmith">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-500 text-center">
          Events
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold">Mathrix&apos;25</h2>
      </div>

      <div className="min-h-screen w-full flex items-center justify-center dmsans">
        <LampDemo />
      </div>
    </div>
  );
}
