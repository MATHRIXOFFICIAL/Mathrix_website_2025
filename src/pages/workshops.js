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

const Card = ({ title, copy, imageId }) => {
  return (
    <div className="group relative w-[300px] sm:w-[430px] md:w-[650px] lg:w-[600px] h-[250px] sm:h-[380px] md:h-[400px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Background Image */}
      <Image
        draggable={false}
        src={imageId}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        alt="Workshop"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-4">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold hammersmith">
          {title}
        </h2>
        <p className="text-xs sm:text-base md:text-lg dmsans">{copy}</p>
      </div>
    </div>
  );
};

export default function Intro() {
  return (
    <div className="container1 min-h-screen w-full flex flex-col items-center px-4 md:px-8">
      <MenuBar />

      <div className="flex flex-col text-white text-center mt-10 mb-10 hammersmith">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-500">
          Workshops
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Mathrix&apos;25
        </h2>
      </div>

      <main className="p-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {workshopDatacards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
    </div>
  );
}