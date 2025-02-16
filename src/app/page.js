"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Section from "@/components/Section";
import Events from "@/components/Events";
import Workshop from "@/components/Workshop";
import SectionWorkshop from "@/components/SectionWorkshop";
import SectionTeam from "../components/SectionTeam";
import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* img */}
      <Intro />
      {/* about */}
      <Description />
      {/* title */}
      <Section />
      <Events />
      {/* Workshop */}
      <SectionWorkshop />
      <Workshop />
      {/* <SectionTeam />
      <Team /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
