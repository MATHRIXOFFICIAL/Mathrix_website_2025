import React from 'react'

const Slide = ({ slide, current, handleSlideClick }) => {
  return (
    <li
      className={`slide ${current === slide.index ? 'active' : ''}`}
      onClick={() => handleSlideClick(slide.index)}
    >
      <img src={slide.image} alt={slide.title} />
      <p>{slide.title}</p>
    </li>
  )
}

export default Slide
