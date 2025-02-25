import React, { useEffect, useRef } from "react";

function Starfield({ numStars, size, duration }) {
  const starfieldRef = useRef(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    const starFieldWidth = 2560;
    const starFieldHeight = 2560;

    // Generate random star positions
    let stars = "";
    for (let i = 0; i < numStars; i++) {
      const x = Math.floor(Math.random() * starFieldWidth);
      const y = Math.floor(Math.random() * starFieldHeight);
      stars += `${x}px ${y}px #FFF, `;
    }
    stars = stars.slice(0, -2); // Remove the last comma and space

    // Apply the generated stars to the element
    starfield.style.boxShadow = stars;
    starfield.style.width = `${size}px`;
    starfield.style.height = `${size}px`;
    starfield.style.animationDuration = `${duration}s`;
  }, [numStars, size, duration]);

  return <div ref={starfieldRef} className="stars"></div>;
}

export default Starfield;
