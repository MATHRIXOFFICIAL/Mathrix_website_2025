"use client";
import React, { useState } from "react";
import "../styles/workshopsection.css";
import Workshopimg from "../../public/images/1.jpg";
import Data from "../../public/Data/Workshopdata";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";
import { LampDemo } from "@/components/ComingSoon";

export default function Intro() {
  return (
    <div className="container">
      <MenuBar />

      <div className="flex flex-col text-white">
        <div className="fulldiv">
          <div className="topcont">
            <div className="left">
              <h1 className="text-6xl font-extrabold text-teal-500">
                Workshops
              </h1>
              <h2 className="text-6xl font-extrabold">Mathrix&apos;25</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <LampDemo />
      </div>
    </div>
  );
}
