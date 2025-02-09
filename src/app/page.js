"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Section from "@/components/Section";
import Events from "@/components/Events";
import Workshop from "@/components/Workshop";
import SectionWorkshop from "@/components/SectionWorkshop";
<<<<<<< HEAD
import SectionTeam from "../components/SectionTeam"
import Team from "../components/Team"
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
    });
=======
import SectionTeam from "../components/SectionTeam";
import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({});
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
<<<<<<< HEAD
    style={{
        width: "100vw",
        height: "100vh",
      }}>
=======
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
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
<<<<<<< HEAD
      <SectionTeam/>
      <Team/>


=======
      <SectionTeam />
      <Team />
      {/* <Contact /> */}
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
      <div className="h-[20vh] bg-black"></div>
      <Footer />
    </main>
  );
}
