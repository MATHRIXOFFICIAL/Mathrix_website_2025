import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import Link from 'next/link'
import '../styles/sidebar.css' // Ensure the path to CSS is correct
import '../styles/workshopsection.css'
import Workshopimg from '../../public/images/1.jpg'
import Data from '../../public/Data/Workshopdata'

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

export default function Intro() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev) // Toggle menu open/close
  }

  return (
    <div>
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

      <div className='fulldiv'>
        <div className='topcont'>
          <div className='left'>
            <h1>Workshops</h1>
            <h3>Mathrix'25</h3>
            <p>
              Immerse yourself in hands-on learning experiences at Saarang's
              dynamic workshops. Led by industry experts and talented
              professionals, these sessions offer unique opportunities to
              develop new skills and explore your interests in an engaging
              environment.
            </p>
          </div>
          <div className='right'>
            <div className='imgdiv'>
              <img src={Workshopimg} alt='Workshop' />
            </div>
          </div>
        </div>
      </div>

      <div className='workshopsecond'>
        <div className='workshoppass'>
          <h3>GET WORKSHOP PASS</h3>
          <p>
            Get Access at a discount price! Register for any workshop without
            additional payment.
          </p>
        </div>
      </div>

      <h1 className='upcoming'>Upcoming Workshop</h1>

      <div className='workshopcardcont'>
        <div className='cardinside'>
          {Data.map((item, key) => (
            <div class='card' key={key}>
              <div className='worktag'>WORKSHOP</div>
              <div class='image'>
                <img src='/images/1.jpg' alt='' />
              </div>
              <p className='title'>Register</p>
              <div class='divbutt'>
                <button>View Details</button>
                <button>Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
