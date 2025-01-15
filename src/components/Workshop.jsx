import React, { useEffect, useRef } from 'react'
import '../styles/events.css'
// import data from '../../public/Data/workshopdata'
import workshopdata from "../../public/Data/Workshopdata" 
import Button from '../components/Button'

export default function Workshop() {
  const contentRef = useRef(null)
  const h2Ref = useRef(null) // Reference for the h2 element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          h2Ref.current.classList.add('reveal')
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (h2Ref.current) {
      observer.observe(h2Ref.current)
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current)
      }
    }
  }, [])

  return (
    <>
      <div
        // className='flex my-40 relative overflow-hidden divcont mx-40 divabout'
        className='flex my-5 relative'
        ref={contentRef}
      >
        <div className='divevents '>
          <div className='eventgrid'>
            {workshopdata.map((items, key) => {
              return (
                <div class='card-container'>
                  <div class='card' key={key}>
                    <div class='img-content'>
                      <img src='/images/1.jpg' alt='' />
                    </div>
                    <div class='content'>
                      <p class='heading'>{items.name}</p>
                      <p>{items.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='buttonbuy'>
            <Button />
          </div>
        </div>
      </div>
    </>
  )
}
