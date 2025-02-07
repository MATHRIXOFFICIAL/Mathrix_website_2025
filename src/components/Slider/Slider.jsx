import React, { useState } from 'react'
import Slide from './Slide'
import SliderControl from './SliderControl'

const Slider = ({ heading, slides }) => {
  const [current, setCurrent] = useState(0)

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  }

  return (
    <div className='slider' aria-labelledby={headingId}>
      <h3 id={headingId} className='visuallyhidden'>
        {heading}
      </h3>
      <ul className='slider__wrapper' style={wrapperTransform}>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className='slider__controls'>
        <SliderControl
          type='previous'
          title='Go to previous slide'
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type='next'
          title='Go to next slide'
          handleClick={handleNextClick}
        />
      </div>
    </div>
  )
}

export default Slider
