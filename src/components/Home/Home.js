import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <Banner></Banner>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Home;
