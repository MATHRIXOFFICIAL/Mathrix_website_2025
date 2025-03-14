import React from "react";
import "../../app/globals.css";
import { ags, image1, viral } from "../../../public/SponsorImage/index";
import SponsorCard from "./SponsorCard";

const SponsorMathrix = () => {
  const Sponsors = [
    {
      image: ags,
      sponsortype: "Event sponsor",
      name: "AGS",
    },
    {
      image: image1,
      sponsortype: "Executive sponsor",
      name: "Cinemax",
    },
    {
      image: viral,
      sponsortype: "Printing sponsor",
      name: "Viral",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="flex flex-col gap-5 justify-center items-center py-4">
        <p className="text-4xl font-extrabold text-red-500 text-center">
          Our Sponsors
        </p>
        <p className="text-neutral-600 text-xl text-center">
          We are proud to present our incredible lineup of sponsors!
        </p>

        {/* Responsive Grid */}
        <div className="mt-5 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[45px] place-items-center">
          {Sponsors.map((data, index) => (
            <SponsorCard
              key={index}
              name={data.name}
              image={data.image}
              type={data.sponsortype}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorMathrix;
