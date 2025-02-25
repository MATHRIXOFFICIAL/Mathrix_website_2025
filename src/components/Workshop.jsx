import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../styles/workshop.css";
import workshopData from "../../public/Data/Workshopdata";
import Image from "next/image";

export default function Workshop() {
  const contentRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Add matrix-style code rain dynamically
    const codeRainContainer = document.querySelector(".code-rain");
    const characters = "01XΩ∑πλ";
    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      span.textContent =
        characters[Math.floor(Math.random() * characters.length)];
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 5}s`;
      codeRainContainer.appendChild(span);
    }
  }, []);

  const handleRegisterClick = () => {
    router.push("/workshops");
  };

  return (
    <div ref={contentRef} className="workshop-container">
      <div className="background-overlay">
        {/* Code Rain Effect */}
        <div className="code-rain"></div>

        {/* Glowing Digital Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="digital-line"
            style={{ left: `${i * 20}%` }}
          ></div>
        ))}

        {/* Rotating Data Points */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="data-point"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <h2 className="section-title">Workshops</h2>
      <div className="workshop-grid">
        {workshopData.map((items, key) => (
          <div key={key} className="card-container">
            <div className="card">
              <div className="img-content">
                <Image
                  src={items.img}
                  alt={items.name}
                  width={800}
                  height={600}
                  layout="intrinsic"
                />
              </div>
              <div className="content">
                <p className="heading dmsans">{items.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="buttonbuy dmsans">
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}
