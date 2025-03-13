import React from "react";
import "./AboutUs.css";
import aboutUsPhoto from "../../accets/aboutUsPhoto/aboutUsPhoto.png";

const AboutUs = () => {
  return (
    <div className="about_us_parent_div">
      <h2>Why Choose QuickVanUK?</h2>
      <div className="about_us_flex_div">
        <div className="about_us_text_div">
          <p>
            We are a tech-driven, customer-focused van and logistics service
            offering reliable, affordable, and efficient transportation.
          </p>
          <p>🔹Mission & Values – Reliability, Affordability, Efficiency.</p>
          <p>
            🔹 Meet Our Team – Professional drivers, support staff, and
            logistics experts.
          </p>
        </div>
        <img className="aboutUsPhoto" src={aboutUsPhoto} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
