import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRegClock } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
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

const events = [
  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },
  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },

  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },

  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },

  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },

  {
    date: '11 March 2020',
    title: 'Our company starts its operations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    time: '2PM',
  },
  {
    date: '19 March 2020',
    title: 'First customer',
    description: 'Quisque ornare dui nibh, sagittis egestas nisi luctus nec...',
    time: '2PM',
  },
  {
    date: '24 June 2020',
    title: 'Our team exceeds 10 people',
    description:
      'Orci varius natoque penatibus et magnis dis parturient montes...',
    time: '2PM',
  },
  {
    date: '15 October 2020',
    title: 'Earned the first million $!',
    description:
      'Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam...',
    time: '2PM',
  },
]

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

          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-12'>
                <div id='content'>
                  <ul className='timeline-1 text-black'>
                    {events.map((event, index) => (
                      <motion.li
                        key={index}
                        className='event'
                        // span={FaRegClock}

                        data-date={event.date}
                        variants={timelineVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        custom={index}
                      >
                        <h4 className='mb-3'>{event.title}</h4>
                        <p>{event.description}</p>

                        <div className='clock'>
                          <div className='clockinside'>
                            <FaRegClock />
                            <span>{event.time}</span>
                          </div>
                          <div className='clockinside'>
                            <IoLocationOutline />
                            <span>Location</span>
                          </div>
                        </div>

                        <div></div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
