import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: `"This React project exceeded expectations..."`,
    author: "Emily R.",
    source: "GITHUB FEEDBACK",
  },
  {
    text: `"Maintainable and scalable code..."`,
    author: "James D.",
    source: "DEV REVIEW",
  },
  {
    text: `"Impressed with the animations and styling..."`,
    author: "Ava L.",
    source: "CODEPEN REVIEW",
  },
  {
    text: `"CSS transitions were on point..."`,
    author: "Liam K.",
    source: "CODE REVIEW",
  },
  {
    text: `"Elegant use of reusable components..."`,
    author: "Sophia T.",
    source: "DEV HUB",
  },
  {
    text: `"Smooth transitions and fast loading..."`,
    author: "Ethan B.",
    source: "REACT WEEKLY",
  },
  {
    text: `"Beautiful CSS animations..."`,
    author: "Chloe M.",
    source: "CSS GALLERY",
  },
  {
    text: `"I learned a lot reviewing this code!"`,
    author: "Mason W.",
    source: "STACK FEEDBACK",
  },
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
      <h2>Hear from Our Users</h2>
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
