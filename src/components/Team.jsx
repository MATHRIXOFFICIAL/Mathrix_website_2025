import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Team.css";
import { Pagination, Autoplay } from "swiper/modules";
import TeamImg from "../../public/images/1.jpg";
import data from "../../public/Data/TeamMembers";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="teamheading">Team</h1>
      <Swiper
        slidesPerView={5} // Show 3 slides at a time
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="cardteam">
              <div className="cardteam-img">
                {/* <img src={TeamImg} alt={card.title} /> */}
                <Image src="/images/1.jpg" alt="{data.name}" />
              </div>
              <ul className="social-media">
                <li>
                  <Link
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    href={card.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    href={card.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
              <div className="cardteam-info">
                <p className="titleteam">{card.title}</p>
                <p className="subtitleteam">{card.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
