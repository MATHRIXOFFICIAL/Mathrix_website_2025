'use client' // ✅ Add this if you're using Next.js App Router (app directory)

import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router' // ✅ Import useRouter
import Button from '../components/Button'
import './styles/slider.css'
import Slider from './Slider/Slider'
import SlideData from '../../public/Data/SlideData' // ✅ Ensure correct import path

export default function Team() {
  const contentRef = useRef(null)
  const h2Ref = useRef(null)
  const router = useRouter() // ✅ Correctly using Next.js router

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          h2Ref.current.classList.add('reveal')
        }
      },
      { threshold: 0.5 }
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

  const handleViewAll = () => {
    router.push('/events') // ✅ Next.js navigation
  }

  return (
    <div ref={contentRef} className='workshop-container'>
      <div>
        <div className='background-overlay'></div>
        <h2 ref={h2Ref} className='section-title'>
          Team
        </h2>
        <div>
          <Slider heading='Featured Slides' slides={SlideData} />
        </div>
        <div className='button-container'>
          <Button onClick={handleViewAll} />{' '}
          {/* ✅ Ensure Button accepts onClick */}
        </div>
      </div>
    </div>
  )
}
