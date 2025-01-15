import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import "../styles/workshop.css";

export default function Workshop() {
  const contentRef = useRef(null);
  const h2Ref = useRef(null); // Reference for the h2 element

  const [workshopData] = useState([
    {
      name: "Intro to AI",
      description: "Learn the basics of Artificial Intelligence.",
      image: "/images/ai.jpg",
    },
    {
      name: "Web Development",
      description: "Build modern and responsive websites.",
      image: "/images/web.jpg",
    },
    {
      name: "Data Science",
      description: "Analyze and visualize data effectively.",
      image: "/images/data.jpg",
    },
    {
      name: "Cybersecurity",
      description: "Learn to protect systems from threats.",
      image: "/images/cyber.jpg",
    },
  ]);

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
    router.push("/events");
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
                      <img src={items.image} alt={items.name} />
                    </div>
                    <div className="content">
                      <p className="heading">{items.name}</p>
                      <p className="description">{items.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="glass-effect"></div>
          <div className="button-container">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
