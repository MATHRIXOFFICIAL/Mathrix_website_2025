import React from "react";
import Image from "next/image";

const Slide = ({ slide, current, handleSlideClick }) => {
  return (
    <li
      className={`slide ${current === slide.index ? "active" : ""}`}
      onClick={() => handleSlideClick(slide.index)}
    >
      <Image src={slide.image} alt={slide.title} />
      <p>{slide.title}</p>
    </li>
  );
};

export default Slide;
