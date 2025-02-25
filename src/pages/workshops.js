"use client";
import React, { useState } from "react";
import "../styles/workshopsection.css";
import Workshopimg from "../../public/images/1.jpg";
import Data from "../../public/Data/Workshopdata";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";

export default function Intro() {
  return (
    <div className="container">
      <MenuBar />

      <div className="flex flex-col text-white">
        <div className="fulldiv">
          <div className="topcont">
            <div className="left">
              <h1>Workshops</h1>
              <h3>Mathrix'25</h3>
              <p>
                Immerse yourself in hands-on learning experiences at Saarang's
                dynamic workshops. Led by industry experts and talented
                professionals, these sessions offer unique opportunities to
                develop new skills and explore your interests in an engaging
                environment.
              </p>
            </div>
            <div className="right">
              <div className="imgdiv">
                <img src={Workshopimg} alt="Workshop" />
              </div>
            </div>
          </div>
        </div>
        <div className="workshopsecond">
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
        </div>
      </div>
    </div>
  );
}
