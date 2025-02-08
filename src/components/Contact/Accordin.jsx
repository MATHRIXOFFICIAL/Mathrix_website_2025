import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa' // Import down arrow icon

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const accordionData = [
    {
      question: 'General Inquiries [HR] :',
      answers: [
        <>
          HR 1 <span className='accordinside1'>1000000</span>
        </>,
        <>
          HR 2 <span className='accordinside1'>1000000</span>
        </>,
        <>
           <span className='accordinside3'>Mathrix@gnail.com</span>
        </>,
      ],
    },
    {
      question: "Mathrix OB'S",
      answers: [
        <>
          Ramanan <span className='accordinside2'>1000000</span>
        </>,
        <>
          Swetha <span className='accordinside2'>1000000</span>
        </>,
      ],
    },
    {
      question: 'Our Sponsors',
      answers: [
        <>
          Sponsor <span className='accordinside'>Link to article</span>
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
