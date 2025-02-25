import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa' // Import down arrow icon

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const accordionData = [
    {
      question: 'General Inquiries:',
      answers: [
        <>
          Gokul Ramana{' '}
          <a href='tel:+919342194955' className='accordinside1'>
            +91 9342194955
          </a>
        </>,
        <>
          Swetha{' '}
          <a href='tel:+919360831815' className='accordinside1'>
            +91 9360831815
          </a>
        </>,
        <>
          <a href='mailto:mathrix2025@gmail.com' className='accordinside3'>
            mathrix2025@gmail.com
          </a>
        </>,
      ],
    },
    {
      question: 'Sponsor Inquiries',
      answers: [
        <>
          Harshidha{' '}
          <a href='tel:+919080436437' className='accordinside2'>
            9080436437
          </a>
        </>,
        <>
          Metta Surendhar{' '}
          <a href='tel:+918122801247' className='accordinside2'>
            8122801247
          </a>
        </>,
        <>
          Logeshwari{' '}
          <a href='tel:+918778158668' className='accordinside2'>
            8778158668
          </a>
        </>,
        <>
          <a
            href='mailto:mathrix.industrialrelations@gmail.com'
            className='accordinside3'
          >
            mathrix.industrialrelations@gmail.com
          </a>
        </>,
      ],
    },
  ]

  return (
    <div className='accordion'>
      {accordionData.map((item, index) => (
        <div key={index} className='accordion-item'>
          <div
            className='accordion-title'
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <FaChevronDown
              className={`icon ${openIndex === index ? 'rotate' : ''}`}
            />
          </div>
          <div
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
          >
            {item.answers.map((answer, ansIndex) => (
              <p key={ansIndex}>{answer}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
