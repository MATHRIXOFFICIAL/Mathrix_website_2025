import React, { useState, useEffect, useRef } from "react";
import { img1, img2 } from "../../public/images/index";
// import "../styles/Eventstyle.css";
import "../app/globals.css";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import Image from "next/image";
import eventData from "../../public/Data/Eventsdata";
import { FaLocationDot } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";

export default function Intro() {
  const eventCards = [
    {
      key: 1,
      eventType: "Technical",
      eventTypeImage: "/events/ai workshop.jpeg",
    },
    {
      key: 2,
      eventType: "Non Technical",
      eventTypeImage: "/images/nonTechnical.jpeg",
    },
    {
      key: 3,
      eventType: "Others",
      eventTypeImage: "/events/session.jpeg",
    },
  ];
  return (
    <div className="container min-h-screen w-full flex flex-col items-center px-4 md:px-8">
      <MenuBar />
      <div className="flex flex-col text-white text-center md:text-left mt-10 md:mt-20 mb-10 hammersmith">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-500 text-center">
          Events
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold">Mathrix&apos;25</h2>
      </div>
      <div className="min-h-screen w-full">
        <div className="grid grid-cols-1 lg:grid-cols-9 cursor-pointer min-w-fit px-16 max-w-full place-items-center gap-4">
          {eventCards.map((eventCard) => (
            <div
              key={eventCard.key}
              className="relative min-h-36 min-w-64 max-w-[300px] max-h-[200px] rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 card col-span-3 transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.320,1)];"
            >
              <Image
                src={eventCard.eventTypeImage}
                width={500}
                height={500}
                className="object-cover w-full h-full"
                alt={eventCard.eventType}
              />
              <div className="card__content -translate-x-2/4 -translate-y-2/4 rotate-0 duration-[0.6s] ease-[cubic-bezier(0.23,1,0.320,1)]; translate-all absolute top-1/2 left-1/2 w-full h-full p-20 box-border bg-black opacity-0 scale-110 hover:opacity-90">
                <div className="text-center font-sans font-bold w-full h-full flex items-center justify-center">
                  <p className="font-bold text-3xl text-white transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.320,1)];">
                    {eventCard.eventType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white text-center md:text-left mt-10 md:mt-30 hammersmith mb-10 flex-col items-center justify-center snap-y snap-mandatory scrollbar-hiddenp-16">
        <h2 className="text-4xl md:text-6xl font-extrabold underline decoration-primary-500">
          Technical Events
        </h2>
        <div className="snap-always snap-center">
          <div>
            {eventData.map(
              (event) =>
                event.type == "Technical" && (
                  <div
                    key={event.id}
                    className="border border-primary-500 mx-4 my-6 rounded-xl grid grid-flow-row md:grid-flow-col lg:grid-cols-12 grid-cols-1 gap-4"
                  >
                    <div className="lg:col-span-3 col-span-12">
                      <Image
                        src={event.img}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full lg:rounded-l-xl rounded-xl"
                        alt={event.name}
                      />
                    </div>
                    <div className="lg:col-span-9 col-span-12 flex flex-col justify-center items-center lg:items-start p-4 gap-6">
                      <h2 className="lg:text-5xl text-2xl font-bold text-primary-500">
                        {event.name}
                      </h2>
                      <p className="text-lg hidden lg:block indent-10">
                        {event.description}
                      </p>
                      <div className="text-base text-nowrap flex justify-around flex-row lg:gap-4 gap-3 lg:min-w-xl max-w-sm lg:max-w-2xl">
                        <div className="flex items-center lg:gap-2 gap-1">
                          <FaLocationDot className="text-primary-500 lg:size-8 size-4" />
                          <span className="lg:text-lg text-sm font-bold">
                            {event.location}
                          </span>
                        </div>
                        <div className="flex items-center lg:gap-2 gap-1">
                          <IoIosTime className="text-primary-500 lg:size-8 size-4" />
                          <span className="lg:text-lg text-sm font-bold">
                            {event.time}
                          </span>
                        </div>
                        <div className="lg:flex items-center lg:gap-2 gap-1 hidden">
                          <RiTeamFill className="text-primary-500 lg:size-8 size-4" />
                          <span className="lg:text-lg text-xs font-bold">
                            {event.teamSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
