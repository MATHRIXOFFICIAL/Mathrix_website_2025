"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Section from "@/components/Section";
import Events from "@/components/Events";
import Workshop from "@/components/Workshop";
import SectionWorkshop from "@/components/SectionWorkshop";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
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

      <div className="h-[20vh] bg-black"></div>
      <Footer />
    </main>
  );
}
