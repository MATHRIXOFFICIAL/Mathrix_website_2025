import React, { useState } from "react";
import "../app/globals.css";
import { FaRegBuilding } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Events } from "../constants/index";
import "../styles/schedule.css";
import MenuBar from "@/components/MenuBar";

export default function Intro() {
  return (
    <div className="container relative">
      {/* Sidebar */}
      <MenuBar />

      <section className="max-container">
        <div className="py-16">
          <div className="text-center text-white hammersmith">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-500">
              Schedules
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Mathrix&apos;25
            </h2>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {Events.map((exp, index) => {
                return (
                  <VerticalTimelineElement
                    key={index}
                    date={exp.date}
                    contentStyle={{
                      background: "#f3f4f6",
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: exp.iconBg,
                      boxShadow: "none",
                      padding: "1.5rem",
                      borderRadius: "5px",
                      marginVertical: "1rem",
                    }}
                    className="mx-8 lg:mx-0 w-64 lg:w-[30rem]"
                    dateClassName="custom-date hammersmith mx-8 lg:text-lg text-sm font-extrabold"
                    iconStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3 className="text-secondary-500 text-lg font-poppins font-bold hammersmith">
                        {exp.name}
                      </h3>
                      <h3 className="text-black text-md flex gap-2 items-center mt-2 font-poppins font-bold hammersmith">
                        <IoTime />
                        {exp.time}
                      </h3>
                      <h3 className="text-black text-md font-poppins font-bold flex gap-2 mt-2 items-center hammersmith">
                        <FaRegBuilding />
                        {exp.venue}
                      </h3>
                    </div>
                    {/* <ul className='my-5 list-disc ml-5 space-y-2 font-semibold dmsans'>
                      {exp.points}
                    </ul> */}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
}
