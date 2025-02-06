import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Timeline from "../components/Timeline"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import Link from 'next/link'
import '../styles/sidebar.css'
import '../styles/schedule.css'

// Variants for menu animation
const variants = {
  open: {
    width: 480,
    height: 650,
  },
  close: {
    width: 100,
    height: 40,
  },
}

// Variants for timeline animation with zoom-in effect
const timelineVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.5, ease: 'easeOut' },
  }),
}



export default function Intro() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev) // Toggle menu open/close
  }

  return (
    <div>
      {/* Sidebar */}
      <motion.div
        className={`sidebar ${menuOpen ? 'open' : ''}`}
        variants={variants}
        animate={menuOpen ? 'open' : 'close'}
        initial='close'
      >
        <button onClick={toggleMenu} aria-label='Toggle menu' className='but'>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <ul className='menu-links'>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/schedule'>Schedule</Link>
          </li>
          <li>
            <Link href='/workshops'>Workshops</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='social-links'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook aria-label='Facebook' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter aria-label='Twitter' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram aria-label='Instagram' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin aria-label='LinkedIn' />
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub aria-label='GitHub' />
          </a>
        </div>
      </motion.div>

      <div className='schedulecontainer'>
        <div className='scheduleinside'>
          <div>
            <h2 className='scheduletitle'>Schedule For MATHRIX'25</h2>
          </div>

          <div className="scheduletimeline">  
            <Timeline />

            
          </div>

         
        </div>
      </div>
    </div>
  )
}
