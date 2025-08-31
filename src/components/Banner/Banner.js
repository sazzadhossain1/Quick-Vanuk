// import React, { useState, useEffect, useRef } from "react";
// import "./Banner.css";

// import HeaderBanner from "../../accets/banner/Header banner.png";
// import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
// import bannerScreenShort from "../../accets/banner/Screenshot_33.png";

// import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
// import bannerPhotoOne from "../../accets/banner/bannerPhotoOne.jpg";
// import bannerPhotoTwo from "../../accets/banner/bannerPhotoTwo.jpg";

// const Banner = () => {
//   const images = [bannerPhoto, bannerPhotoOne, bannerPhotoTwo];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Start autoplay
//   const startAutoPlay = () => {
//     stopAutoPlay(); // clear previous interval before starting a new one
//     slideInterval.current = setInterval(nextSlide, 2000);
//   };

//   // Stop autoplay
//   const stopAutoPlay = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//     }
//   };

//   // Handle next/prev button click
//   const handleNext = () => {
//     nextSlide();
//     startAutoPlay(); // reset timer
//   };

//   const handlePrev = () => {
//     prevSlide();
//     startAutoPlay(); // reset timer
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay(); // cleanup on unmount
//   }, []);

//   return (
//     <div className="carousel-container">
//       <button className="carousel-btn left" onClick={handlePrev}>
//         &#10094;
//       </button>

//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className="carousel-image"
//       />

//       <button className="carousel-btn right" onClick={handleNext}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Banner;

// import React, { useState, useEffect, useRef } from "react";
// import "./Banner.css";

// import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
// import bannerPhotoOne from "../../accets/banner/bannerPhotoOne.jpg";
// import bannerPhotoTwo from "../../accets/banner/bannerPhotoTwo.jpg";

// const Banner = () => {
//   const images = [bannerPhoto, bannerPhotoOne, bannerPhotoTwo];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = useRef(null);
//   const delay = 2000; // 2 seconds

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const startAutoPlay = () => {
//     stopAutoPlay();
//     slideInterval.current = setInterval(() => {
//       nextSlide();
//     }, delay);
//   };

//   const stopAutoPlay = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//       slideInterval.current = null;
//     }
//   };

//   const handleNext = () => {
//     stopAutoPlay(); // stop first
//     nextSlide(); // change immediately
//     startAutoPlay(); // restart timer
//   };

//   const handlePrev = () => {
//     stopAutoPlay();
//     prevSlide();
//     startAutoPlay();
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, []);

//   return (
//     <div className="carousel-container">
//       <button className="carousel-btn left" onClick={handlePrev}>
//         &#10094;
//       </button>

//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className="carousel-image"
//       />

//       <button className="carousel-btn right" onClick={handleNext}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import "./Banner.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerOne from "../../accets/banner/bannerOne.jpg";
import bannerTwo from "../../accets/banner/bannerTwo.jpg";
import bannerThree from "../../accets/banner/bannerThree.jpg";
const Banner = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Auto-play interval in ms
    nextArrow: <SampleNextArrow />, // Custom right arrow
    prevArrow: <SamplePrevArrow />, // Custom left arrow
  };

  const photos = [
    { id: 1, url: bannerOne },
    { id: 2, url: bannerTwo },
    { id: 3, url: bannerThree },
  ];
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              alt={`Slide ${photo.id}`}
              className="carousel-image"
            />
          </div>
        ))}
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
