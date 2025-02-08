import React from 'react'
import "../styles/contact.css"
import ContactForm from "../components/Contact/ContactForm"
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Accordin from "./Contact/Accordin"



const Contact = () => {
  return (
    <div className='contactdiv'>
      <div className='contactheading'>
        <h1>Contact Mathrix</h1>
      </div>
      <div className='secondcontact'>
        <div className='contactleft'>
          <h1 className=' connectheading'>Connect</h1>

          <div className='contactsocial'>
            <div className='cardsocial'>
              <a
                href='#'
                className='socialContainer containerOnes containerOne'
              >
                <FaInstagram />
              </a>

              <a
                href='#'
                className='socialContainer containerOnes containerTwo'
              >
                <FaWhatsapp />
              </a>

              <a
                href='#'
                className='socialContainer containerOnes containerThree'
              >
                <FaLinkedin />
              </a>

              <a
                href='#'
                className='socialContainer containerOnes containerFour'
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className='map'>
         <p>
          Map
         </p>
          </div>

          <div className='accordins'>
            <Accordin />
          </div>
        </div>

        <div className='contactright'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact