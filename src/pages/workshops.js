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
              <h2 className="text-6xl font-extrabold">Mathrix'25</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="workshopsecond">
          <div className="workshoppass">
            <h3>GET WORKSHOP PASS</h3>
            <p>
              Get Access at a discount price! Register for any workshop without
              additional payment.
            </p>
          </div>
        </div>

        <h1 className="upcoming">Upcoming Workshop</h1>

        <div className="cardworkshop">
          <div className="cardworkshopinside">
            {Data.map((item, key) => {
              return (
                <div class="card" key={key}>
                  <div class="content">
                    <h2 class="title">{item.name}</h2>
                    <p class="copy">{item.description}</p>
                    <button class="btn">Book Tickets</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <LampDemo />
      </div>
    </div>
  );
}
