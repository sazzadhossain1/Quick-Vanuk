import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ForthSection from "../ForthSection/ForthSection";
import FifthSection from "../FifthSection/FifthSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="home_parent_div">
      <Banner></Banner>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      {/* <ForthSection></ForthSection> */}
      <FifthSection></FifthSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
