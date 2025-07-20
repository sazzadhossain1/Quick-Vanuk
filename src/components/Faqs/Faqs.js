import React, { useState } from "react";
import faqs_photo from "../../accets/faqs/faqs_photo.png";
import "./Faqs.css";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const customerFaqs = [
    {
      question: "• How Do I Book A Van?",
      answer: "Simply use our website.",
    },
    {
      question: "• How Is Pricing Calculated?",
      answer: "Based on distance, time, and van size.",
    },
    {
      question: "• What If My Delivery Is Delayed?",
      answer: "We notify you and provide updates.",
    },
    {
      question: "• Do I Need To Help Load/Unload?",
      answer: "Our drivers assist, but extra manpower can be added.",
    },
  ];

  const driverFaqs = [
    {
      question: "• What Documents Do I Need?",
      answer: "Driving license, insurance, vehicle registration.",
    },
    {
      question: "• How Do I Get Paid?",
      answer: "Weekly bank deposits based on completed trips.",
    },
  ];

  return (
    <div className="faqs_parent_div">
      <div className="faqs_grid_div">
        <div className="faqs_question_div">
          <div>
            <h2>Customers</h2>
            {customerFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq_box ${openIndex === index ? "open" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="faq_header">
                  <p className="faq_question">{faq.question}</p>
                  <span
                    className={`arrow ${openIndex === index ? "rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <p className="faq_answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            <h2>Drivers</h2>
            {driverFaqs.map((faq, index) => (
              <div
                key={index + 100}
                className={`faq_box ${openIndex === index + 100 ? "open" : ""}`}
                onClick={() => toggle(index + 100)}
              >
                <div className="faq_header">
                  <p className="faq_question">{faq.question}</p>
                  <span
                    className={`arrow ${
                      openIndex === index + 100 ? "rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {openIndex === index + 100 && (
                  <p className="faq_answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="faqs_photo_div">
          <img src={faqs_photo} alt="FAQs" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
