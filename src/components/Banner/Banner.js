import React from "react";
import "./Banner.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerOne from "../../accets/banner/bannerOne.jpg";
import bannerTwo from "../../accets/banner/bannerTwo.jpg";
import bannerThree from "../../accets/banner/bannerThree.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const photos = [
    { id: 1, url: bannerOne },
    { id: 2, url: bannerTwo },
    { id: 3, url: bannerThree },
  ];

  const bannerText = [
    {
      id: 1,
      text: "Professional, Friendly Staff Trained movers and drivers.",
      btn: "Get a Free Quote",
    },
    {
      id: 2,
      text: "Complete Moving & Delivery Solution from household moves to business deliveries.",
      btn: "Get a Free Quote",
    },
    {
      id: 3,
      text: "Making Every Move Hassle-Free Trustworthy & Reliable.",
      btn: "Get a Free Quote",
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo) => {
          // Match text for this slide
          const matchedText = bannerText.find((item) => item.id === photo.id);

          return (
            <div className="banner_carousel_div" key={photo.id}>
              {/* Image with dark overlay */}
              <div className="banner_image_wrapper">
                <img
                  src={photo.url}
                  alt={`Slide ${photo.id}`}
                  className="carousel-image"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="banner_form_grid_div">
                {/* Text & button */}
                <div className="banner_frorm_text_child_div">
                  <h2>{matchedText?.text}</h2>
                  <p>Our trusted Man and Van Drivers cover the Entire UK.</p>
                  <Link>
                    <button className="banner_form_button">
                      {matchedText?.btn}
                    </button>
                  </Link>
                </div>

                {/* Form */}
                <div className="banner_form_child_div">
                  <form action="">
                    <h2>QuickVanUK Quotes</h2>
                    <p>Get a Free Quote for QuickVanUK service</p>
                    <label>Name</label>
                    <br />
                    <input type="text" />
                    <br />

                    <label>Contact number</label>
                    <br />
                    <input type="text" />
                    <label>Delivery address</label>
                    <br />
                    <input type="text" />
                    <label>Delivery address</label>
                    <br />
                    <input type="text" />
                    <br />
                    <Link>
                      <button className="banner_form_Submit_button">
                        Submit
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Custom Right Arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="banner_arrow next" onClick={onClick}>
      ❯
    </div>
  );
};

// Custom Left Arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="banner_arrow prev" onClick={onClick}>
      ❮
    </div>
  );
};

export default Banner;
