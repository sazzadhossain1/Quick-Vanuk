import React, { useState, useEffect } from "react";
import "./Banner.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import bannerOne from "../../accets/banner/a.png";
// import bannerTwo from "../../accets/banner/aa.png";
// import bannerThree from "../../accets/banner/aaa.png";
// import bannerOne from "../../accets/banner/o.jpg";
// import bannerTwo from "../../accets/banner/t.jpg";
// import bannerThree from "../../accets/banner/th.jpg";
import bannerOne from "../../accets/banner/bannerOne.jpg";
import bannerTwo from "../../accets/banner/bannerTwo.jpg";
import bannerThree from "../../accets/banner/bannerThree.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const [status, setStatus] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mandajvv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  // Auto-hide success/error message after 30 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 30000); // 30s
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo) => {
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
                  <form onSubmit={handleSubmit}>
                    <h2>QuickVanUK Quotes</h2>
                    <p>Get a Free Quote for QuickVanUK service</p>

                    <label>Name</label>
                    <br />
                    <input type="text" name="name" required />
                    <br />

                    <label>Contact number</label>
                    <br />
                    <input type="text" name="contact" required />
                    <br />

                    <label>Collection Address</label>
                    <br />
                    <input type="text" name="collection" required />
                    <br />

                    <label>Delivery Address</label>
                    <br />
                    <input type="text" name="delivery" required />
                    <br />

                    <button type="submit" className="banner_form_Submit_button">
                      Submit
                    </button>

                    {/* Success/Error Messages */}
                    {status === "SUCCESS" && (
                      <p style={{ color: "green", marginTop: "10px" }}>
                        ✅ Thank you for your submission. We will get back to
                        you shortly.
                      </p>
                    )}
                    {status === "ERROR" && (
                      <p style={{ color: "red", marginTop: "10px" }}>
                        ❌ Oops! Something went wrong. Try again.
                      </p>
                    )}
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
