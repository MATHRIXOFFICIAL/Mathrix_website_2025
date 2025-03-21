// import SponsorMathrix from "@/components/Sponsor page/SponsorMathrix";
import { LampDemo } from "@/components/ComingSoon";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";
import SponsorCard from "@/components/Sponsor page/SponsorCard";
import SponsorMathrix from "@/components/Sponsor page/SponsorMathrix";

// pages/sponsers.js
export default function about() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center px-4 md:px-8">
      <MenuBar />

      <div className="flex flex-col text-white text-center md:text-left mt-10 md:mt-20 mb-10 hammersmith">
        <h2 className="text-4xl text-center md:text-6xl font-extrabold mb-5">
          Mathrix&apos;25
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-500 text-center hammersmith">
          Our Sponsors
        </h1>
      </div>

      <p className="text-white text-3xl text-center hammersmith">
        We are proud to present our incredible lineup of sponsors!
      </p>
      <div className="min-h-screen w-full flex items-center justify-center dmsans">
        {/* <LampDemo /> */}
        <SponsorMathrix />
      </div>
    </div>
  );
}
