"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import "../styles/events.css";
import data from "../../public/Data/Eventsdata";
import Image from "next/image";

export default function Events() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleRegisterClick = () => {
    router.push("/events");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Generate particles for the particle animation
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      className="particle"
      key={i}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ));

  return (
    <div ref={sectionRef} className="divevents w-full pr-5">
      <div className="background-overlay black-bg">
        {isVisible && particles}{" "}
        {/* Particles appear when section is visible */}
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold mb-8 text-white dmsans">
          Upcoming Events
        </h2>
        <div className="eventgrid">
          {data.map((items, key) => (
            <div className="card-container" key={key}>
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
      </div>

      <div className="buttonbuy dmsans">
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}
