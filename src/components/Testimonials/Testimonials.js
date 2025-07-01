import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: `“QuickVanUK made our house move feel effortless. On time, friendly, and everything handled with care.”`,
    author: "— Sophie M.",
    source: "London | TrustPilot Review",
  },
  {
    text: `“Incredible service! The driver helped me move my elderly mum’s belongings safely across town. Would definitely use again.”
`,
    author: "— Daniel W.",
    source: "Birmingham | Google Review",
  },
  {
    text: `“Booking was simple, the van was clean, and the staff were very professional. A truly hassle-free experience.”`,
    author: "— Emma L.",
    source: "Manchester | Local Business Forum",
  },
  {
    text: `“Moved my studio equipment with zero damage. Efficient and polite from start to finish. Highly recommend!”`,
    author: "— Liam J",
    source: "Leeds | Facebook Recommendation",
  },
  {
    text: `“Fantastic customer support and smooth communication. They really live up to their slogan—hassle-free indeed.”`,
    author: "— Oliver K.",
    source: "Bristol | Google Review",
  },
  {
    text: `“Trustworthy and reliable, just as promised. The pricing was fair and the team went above and beyond.”`,
    author: "— Charlotte T.",
    source: "Edinburgh | Yelp Feedback",
  },
  {
    text: `“Used them for an office move. Everything arrived on time and intact. Couldn’t have asked for better.”
`,
    author: "— Raj P.",
    source: "Croydon | Company Internal Survey",
  },
  // {
  //   text: `"I learned a lot reviewing this code!"`,
  //   author: "Mason W.",
  //   source: "STACK FEEDBACK",
  // },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width <= 700) return 1;
    if (width <= 950) return 2;
    if (width <= 1056) return 3;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setCurrent(0); // Reset scroll position on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < testimonials.length - visibleCount) setCurrent(current + 1);
  };

  return (
    <section className="testimonials">
      <h2>What Our Clients Say About Us</h2>
      <div className="stars">★★★★★</div>

      <div className="carousel-wrapper">
        <button
          className="arrow left"
          onClick={handlePrev}
          disabled={current === 0}
        >
          &#10094;
        </button>

        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(100 / visibleCount) * current}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={i}
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <p className="text">{t.text}</p>
                <p className="author">{t.author}</p>
                <p className="source">{t.source}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={handleNext}
          disabled={current >= testimonials.length - visibleCount}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
