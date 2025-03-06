"use client";
import React, { useState } from "react";
import "../styles/workshopcard.css";
import Workshopimg from "../../public/images/1.jpg";
import Data from "../../public/Data/Workshopdata";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";
import { LampDemo } from "@/components/ComingSoon";

const cards = [
  {
    title: "GOOGLE FOR DEVELOPERS",
    copy: "AI-Powered Fashion App with AlloyDB & Gemini 2.0 + Contextual Yoga Pose Recommender with Firestore, Vector Search & Gemini 2.0",
    button: "Register Now",
    imageId: "1545243424-0ce743321e11",
  },
  {
    title: "AZURE DEVELOPER COMMUNITY",
    copy: " AI: From Fundamentals to Generative Applications",
    button: "Register Now",
    imageId: "1531306728370-e2ebd9d7bb99",
  },
];

const Card = ({ title, copy, button, imageId }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card w-[300px] sm:w-[400px] md:w-[650px] lg:w-[600px] h-[250px] sm:h-[350px] md:h-[400px] ${
        hovered ? "hovered" : ""
      }`}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-${imageId}?q=80&fm=jpg&w=400&fit=max)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
            <button className="btn text-xs sm:text-base">{button}</button>
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
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
    </div>
  );
}
