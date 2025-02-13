"use client"; // ✅ Required for using hooks in App Router

import { useRouter } from "next/navigation"; // ✅ Correct import
import "../styles/events.css";
import data from "../../public/Data/Eventsdata";

export default function Events() {
  const router = useRouter(); // ✅ Correct function for App Router

  const handleRegisterClick = () => {
    router.push("/events"); // ✅ Redirects correctly in App Router
  };

  return (
    <div className="divevents w-full pr-5">
      <div>
        <div className="background-overlay"></div>
        <h2 className="text-center text-4xl font-bold mb-8">Upcoming Events</h2>
        <div className="eventgrid">
          {data.map((items, key) => (
            <div className="card-container" key={key}>
              <div className="card">
                <div className="img-content">
                  <img src={items.img} alt={items.name} />
                </div>
                <div className="content">
                  <p className="heading">{items.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="buttonbuy">
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}
