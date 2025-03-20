import React, { useEffect, useRef } from "react";
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
      eventTypeImage: "/events/session.jpeg",
    },
    { key: 3, eventType: "Math", eventTypeImage: "/events/Numerix nexus .png" },
  ];
  const refMain = useRef(null);
  const refTech = useRef(null);
  const refNonTech = useRef(null);
  const refMath = useRef(null);
  const handleClick = (sectionName) => {
    if (sectionName === "Technical") {
      refTech.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "Non Technical") {
      refNonTech.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "Math") {
      refMath.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      refMain.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container min-h-screen w-full flex flex-col items-center px-4 md:px-8 scroll-smooth">
      <MenuBar />
      <section
        ref={refMain}
        className="h-screen w-full flex flex-col items-center my-24"
      >
        <div className="text-center text-white mt-16 mb-10 hammersmith">
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-500">
            Events
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Mathrix&apos;25
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-9 cursor-pointer min-w-fit px-16 w-full place-items-center gap-4">
          {eventCards.map((eventCard) => (
            <div
              onClick={() => handleClick(eventCard.eventType)}
              key={eventCard.key}
              className="relative min-h-36 min-w-64 max-w-[300px] max-h-[200px] rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 card col-span-3 transition-all duration-[0.6s] ease-[cubic-bezier(0.23,1,0.320,1)];  floating-card"
            >
              <Image
                draggable={false}
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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd8_t6sjSCVOqM3Zanwt3SyySgv7bpnB9T9oEySyWO5dZCZCA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            onClick={() => console.log("Register")}
            class="floating-card text-white bg-secondary-500 my-8 hover:text-secondary-500 border border-gray-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-secondary-500 font-semibold rounded-lg text-xl px-24 py-4 text-center me-2 mb-2 dark:border-secondary-500 dark:text-secondary-500 dark:hover:text-white dark:hover:bg-secondary-500 dark:focus:ring-secondary-500"
          >
            Register
          </button>
        </a>
      </section>
      <Section
        title="Technical Events"
        events={eventData.filter((event) => event.type === "Technical")}
        classes="mt-20"
        reference={refTech}
      />
      <Section
        title="Non Technical Events"
        events={eventData.filter((event) => event.type === "Non Technical")}
        reference={refNonTech}
      />
      <Section
        title="Mathematical Events"
        events={eventData.filter((event) => event.type === "Math")}
        reference={refMath}
      />
    </div>
  );
}
const Section = ({ title, events, classes, reference }) => (
  <section
    ref={reference}
    className={`py-20 w-full text-center mt-16 text-white my-20 ${classes} floating-card`}
  >
    <h2 className="text-4xl py-8 md:text-5xl font-extrabold underline decoration-secondary-500">
      {title}
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto mt-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  </section>
);
const EventCard = ({ event }) => (
  <div className="card my-16 md:my-2 lg:my-0">
    <div className="card-inner">
      <div className="card-front">
        <div className="border text-white border-secondary-500 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            draggable={false}
            src={event.img}
            width={150}
            height={150}
            className="w-full md:w-1/3 object-cover"
            alt={event.name}
          />
          <div className="p-4 flex flex-col justify-between w-full text-start">
            <h2 className="lg:text-2xl text-sm font-bold text-secondary-500">
              {event.name}
            </h2>
            <p className="text-sm hidden lg:block indent-5">
              {event.description}
            </p>
            <div className="flex items-center gap-1.5 lg:text-sm text-xs text-gray-400">
              <FaLocationDot className="text-secondary-500" />
              <span className="font-semibold">{event.location}</span>
              <IoIosTime className="text-secondary-500" />
              <span className="font-semibold">{event.time}</span>
              <RiTeamFill className="text-secondary-500 hidden md:block" />
              <span className="hidden md:block font-semibold">
                {event.teamSize}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-back flex flex-col text-2xl justify-center">
        <h1 className="text-secondary-500 font-bold text-2xl underline">
          Rules
        </h1>
        <ul className="list-inside">
          {event.rules.map((e) => (
            <li key={e} className="text-gray-200 lg:text-lg text-sm">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
