<<<<<<< HEAD
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/Team.css'
import { Pagination, Autoplay } from 'swiper/modules'
import TeamImg from "../../public/images/1.jpg"
import data from '../../public/Data/TeamMemebers'



const Team = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='teamheading'>Team</h1>
=======
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

const Team = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="teamheading">Team</h1>
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
      <Swiper
        slidesPerView={5} // Show 3 slides at a time
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        modules={[Pagination, Autoplay]}
<<<<<<< HEAD
        className='mySwiper'
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <div className='cardteam'>
              <div className='cardteam-img'>
                {/* <img src={TeamImg} alt={card.title} /> */}
                <img src='/images/1.jpg' alt="{data.name}" />
              </div>
              <ul className='social-media'>
                <li>
                  <a
                    href={card.github}
                    target='_blank'
                    rel='noopener noreferrer'
=======
        className="mySwiper"
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="cardteam">
              <div className="cardteam-img">
                {/* <img src={TeamImg} alt={card.title} /> */}
                <img src="/images/1.jpg" alt="{data.name}" />
              </div>
              <ul className="social-media">
                <li>
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href={card.linkedin}
<<<<<<< HEAD
                    target='_blank'
                    rel='noopener noreferrer'
=======
                    target="_blank"
                    rel="noopener noreferrer"
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href={card.instagram}
<<<<<<< HEAD
                    target='_blank'
                    rel='noopener noreferrer'
=======
                    target="_blank"
                    rel="noopener noreferrer"
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
<<<<<<< HEAD
              <div className='cardteam-info'>
                <p className='titleteam'>{card.title}</p>
                <p className='subtitleteam'>{card.content}</p>
=======
              <div className="cardteam-info">
                <p className="titleteam">{card.title}</p>
                <p className="subtitleteam">{card.content}</p>
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
<<<<<<< HEAD
  )
}

export default Team
=======
  );
};

export default Team;
>>>>>>> 5cf142bfd3f2ab3e12ba58cc8e22d4a85556468d
