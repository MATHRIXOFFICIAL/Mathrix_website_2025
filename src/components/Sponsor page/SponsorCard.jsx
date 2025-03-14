import React from "react";
import Image from "next/image";
//

const SponsorCard = ({ name, image, type }) => {
  return (
    <div
      className="w-full max-w-[400px] h-[400px]
       sm:w-[280px] sm:h-[290px]
       md:w-[280px] md:h-[290px] 
       xs:w-72 xs:h-72
       lg:w-[350px] lg:h-[350px] bg-[#f0f0f9] bg-opacity-80 relative grid place-content-center rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:rounded-none hover:scale-105
    md:[@media(min-width:400px)and(max-width:450px)]:w-[580px] md:[@media(min-width:400px)and(max-width:450px)]:h-[290px]"
    >
      {/* Border */}
      <div className="absolute inset-0 border-2 border-[#bd9f67] opacity-0 rotate-[10deg] transition-all duration-500 ease-in-out hover:inset-[10px] hover:opacity-100 hover:rotate-0"></div>

      {/* Content */}
      <div className="transition-all duration-500 ease-in-out p-4 sm:p-3 md:p-4 lg:p-5">
        {/* Sponsor Section */}
        <div className="flex flex-col items-center mb-4">
          {/* Sponsor Image */}
          <div className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-300 mb-2 overflow-hidden">
            <Image
              src={image}
              alt="Sponsor"
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          </div>
          {/* Sponsor Type and Name */}
          <div className="text-center">
            <p className="text-lg sm:text-md md:text-lg lg:text-xl text-[#bd9f67] uppercase">
              {type}
            </p>
            <p className="text-md sm:text-sm md:text-md lg:text-lg text-[#243137] font-semibold">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
