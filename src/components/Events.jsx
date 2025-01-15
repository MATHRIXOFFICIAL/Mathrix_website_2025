import React, { useEffect, useRef } from "react";
import "../styles/events.css";
import data from "../../public/Data/Eventsdata";
import Button from "../components/Button";

export default function Events() {
  const contentRef = useRef(null);
  const h2Ref = useRef(null);

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

  return (
    <>
      <div className="flex my-5 relative" ref={contentRef}>
        <div className="divevents">
          <h2 ref={h2Ref} className="text-center text-4xl font-bold mb-8">
            Upcoming Events
          </h2>
          <div className="eventgrid">
            {data.map((items, key) => {
              return (
                <div className="card-container" key={key}>
                  <div className="card">
                    <div className="img-content">
                      <img src="/images/1.jpg" alt={items.name} />
                    </div>
                    <div className="content">
                      <p className="heading">{items.name}</p>
                      <p>{items.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="buttonbuy">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
