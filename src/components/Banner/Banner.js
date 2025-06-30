import React from "react";
import "./Banner.css";

import HeaderBanner from "../../accets/banner/Header banner.png";
import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
import bannerScreenShort from "../../accets/banner/Screenshot_33.png";
const Banner = () => {
  return (
    <div>
      <img className="bannerPhoto" src={bannerScreenShort} alt="" />
    </div>
  );
};

export default Banner;
