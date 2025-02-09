import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import "../styles/workshop.css";
import workshopData from "../../public/Data/Workshopdata";
import { useRouter } from "next/navigation";

export default function Workshop() {
  const contentRef = useRef(null);
  const h2Ref = useRef(null); // Reference for the h2 element
  const router = useRouter(); // ✅ Correct function for App Router

  const handleRegisterClick = () => {
    router.push("/workshops"); // ✅ Redirects correctly in App Router
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          h2Ref.current.classList.add("reveal");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  const handleViewAll = () => {
    router.push("/workshops");
  };

  return (
    <>
      <div ref={contentRef} className="workshop-container">
        <div>
          <div className="background-overlay"></div>
          <h2 ref={h2Ref} className="section-title">
            Workshops
          </h2>
          <div className="workshop-grid">
            {workshopData.map((items, key) => {
              return (
                <div key={key} className="card-container">
                  <div className="card">
                    <div className="img-content">
                      <img src={items.img} alt={items.name} />
                    </div>
                    <div className="content">
                      <p className="heading">{items.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="buttonbuy">
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
