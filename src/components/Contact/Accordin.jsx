import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import down arrow icon

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "General Inquiries  :",
      answers: [
        <>
          Gokul Ramana <span className="accordinside1">9342194955</span>
        </>,
        <>
          Swetha <span className="accordinside1">9360831815</span>
        </>,
        <>
          <span className="accordinside3">mathrix2025@gmail.com</span>
        </>,
      ],
    },
    {
      question: "Sponsor Inquiries",
      answers: [
        <>
          Harshidha <span className="accordinside2">9080436437</span>
        </>,
        <>
          Metta Surendhar <span className="accordinside2">8122801247</span>
        </>,
        <>
          Logeshwari<span className="accordinside2">8778158668</span>
        </>,
        <>
          <span className="accordinside3">
            mathrix.industrialrelations@gmail.com
          </span>
        </>,
      ],
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <FaChevronDown
              className={`icon ${openIndex === index ? "rotate" : ""}`}
            />
          </div>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
          >
            {item.answers.map((answer, ansIndex) => (
              <p key={ansIndex}>{answer}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
