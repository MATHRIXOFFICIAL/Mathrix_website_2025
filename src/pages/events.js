import React, { useState, useEffect, useRef } from "react";
import { img1, img2 } from "../../public/images/index";
import "../styles/Eventstyle.css";
import "../app/globals.css";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import { LampDemo } from "@/components/ComingSoon"; // Import the Coming Soon component

export default function Intro() {
  return (
    <div className="container">
      <MenuBar />

      <div className="flex flex-col text-white">
        <div className="fulldiv">
          <div className="topcont">
            <div className="left">
              <h1 className="text-6xl font-extrabold text-teal-500">Events</h1>
              <h2 className="text-6xl font-extrabold">Mathrix&apos;25</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Replace with LampDemo (Coming Soon) */}
      <div className="min-h-screen w-full flex items-center justify-center">
        <LampDemo />
      </div>
    </div>
  );
}
