import React, { useState } from "react";
import "../app/globals.css";
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
          <div>
            <h3 className="font-bold uppercase text-6xl flex justify-center items-center gradient-text">
              Schedule For MATHRIX'25
            </h3>
            <h3 className="flex justify-center items-center text-4xl mt-5 font-semibold gradient-text">
              March 15 , March 22 and March 29
            </h3>
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
                    }}
                    dateClassName="custom-date"
                  >
                    <div>
                      <h3 className="text-black text-xl font-poppins font-semibold">
                        {exp.name}
                      </h3>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {exp.points}
                    </ul>
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
