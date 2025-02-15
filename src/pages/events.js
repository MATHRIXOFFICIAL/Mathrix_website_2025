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
              <h2 className="text-6xl font-extrabold">Mathrix'25</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen p-10">
        <div className="flex justify-between gap-96 text-white">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-extrabold text-teal-500">Events</h1>
            <h2 className="text-6xl font-extrabold">Mathrix'25</h2>
            <p className=""></p>
          </div>
        </div>

        <h1 className="mt-10 flex items-center justify-center font-extrabold text-4xl">
          Upcoming Tech Events
        </h1>


        
        <div className="mt-5">
          <div className="containerr">
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" alt="Allstar" />
                <h1>Hey now, you're an allstar</h1>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" alt="Rock star" />
                <h1>Hey now, you're a rock star</h1>
              </div>
            </div>
            <div className="card-column column-1">
              <div className="card card-color-1">
                <div className="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" alt="Game on" />
                <h1>Get your game on, go play</h1>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" alt="Show on" />
                <h1>Get the show on, get paid</h1>
              </div>
            </div>
          </div>
        </div> */}

      {/* Replace with LampDemo (Coming Soon) */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <LampDemo />
      </div>
    </div>
  );
}
