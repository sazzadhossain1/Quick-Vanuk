import React from "react";
import "./Banner.css";
import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
import bannerPhotoOne from "../../accets/banner/bannerPhotoOne.jpg";

const Banner = () => {
  return (
    <div>
      <img className="bannerPhoto" src={bannerPhoto} alt="" />
    </div>
  );
};

export default Banner;
