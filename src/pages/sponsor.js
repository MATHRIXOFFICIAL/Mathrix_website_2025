import SponsorMathrix from "@/components/Sponsor page/SponsorMathrix";
import { LampDemo } from "@/components/ComingSoon";
import MenuBar from "@/components/MenuBar";
import "../styles/schedule.css";
import "../app/globals.css";

// pages/sponsers.js
export default function about() {
  return (
    <div className="container">
      <MenuBar />

      <div className="flex flex-col text-white">
        <div className="fulldiv">
          <div className="topcont">
            <div className="left">
              <h1 className="text-6xl font-extrabold text-teal-500">
                Sponsors
              </h1>
              <h2 className="text-6xl font-extrabold">Mathrix&apos;25</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <LampDemo />
      </div>
    </div>
  );
}
