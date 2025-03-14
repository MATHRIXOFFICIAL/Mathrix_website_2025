"use client";
import React, { useState } from "react";
import "../styles/workshopcard.css";
import Workshopimg from "../../public/images/1.jpg";
import Data from "../../public/Data/Workshopdata";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";
import { LampDemo } from "@/components/ComingSoon";
import { workshopDatacards } from "../../public/Data/Workshopdata";
import Image from "next/image";

// const cards = [
//   {
//     title: "GOOGLE FOR DEVELOPERS",
//     copy: "AI-Powered Fashion App with AlloyDB & Gemini 2.0 + Contextual Yoga Pose Recommender with Firestore, Vector Search & Gemini 2.0",
//     button: "Register Now",
//     imageId: "/events/sess.jpg",
//   },
//   {
//     title: "AZURE DEVELOPER COMMUNITY",
//     copy: " AI: From Fundamentals to Generative Applications",
//     button: "Register Now",
//     imageId: "/events/workshop.jpeg",
//   },
// ];

const Card = ({ title, copy, button, imageId }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card w-[300px] sm:w-[430px] md:w-[650px] lg:w-[600px] h-[250px] sm:h-[380px] md:h-[400px] rounded-xl ${
        hovered ? "hovered" : ""
      }`}
      // style={{
      //   backgroundImage: imageId,
      // }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <Image
          draggable={false}
          src={imageId}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="overlay"></div>
      <div
        className="content"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}
      >
        <h2 className="title text-base sm:text-lg md:text-2xl">{title}</h2>
        {hovered && (
          <>
            <p className="copy text-xs sm:text-base md:text-lg">{copy}</p>
            {/* <button className="btn text-xs sm:text-base">{button}</button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default function Intro() {
  return (
    <div className="container1 min-h-screen w-full h-full flex flex-col items-center px-4 md:px-8">
      <MenuBar />

      <div className="flex flex-col text-white text-center md:text-left mt-10 md:mt-30 mb-10 hammersmith">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-500 text-center">
          Workshops
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold">Mathrix&apos;25</h2>
      </div>

      <main className="page-content p-10 flex flex-wrap justify-center gap-6">
        {workshopDatacards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
    </div>
  );
}
