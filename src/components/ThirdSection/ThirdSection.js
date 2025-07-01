import React from "react";
import "./ThirdSection.css";
import thirdSectionPhotoOne from "../../accets/thirdSectionPhotos/thirdSectionPhotoOne.png";
import { Link } from "react-router-dom";

const ThirdSection = () => {
  return (
    <div className="third_section_parent_div">
      <h1>How does it work?</h1>
      <h3>Moving made simple — in just a few easy steps:</h3>
      <div className="third_section_grid_div">
        <div className="third_section_img_div">
          <img
            className="thirdSectionPhotoOne"
            src={thirdSectionPhotoOne}
            alt=""
          />
        </div>
        <div className="third_section_text_div">
          <div className="third_number_flex_div">
            <div>
              <div className="third_number_text_flex_div">
                <div className="third_number_div">
                  <p>1</p>
                </div>
                <h2>Get a Quick Quote</h2>
              </div>
              <p>
                Enter your pickup and drop-off details, select your van size,
                and instantly get a transparent price — no hidden charges.
              </p>
            </div>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_text_flex_div">
              <div className="third_number_div">
                <p>2</p>
              </div>
              <h2>Book Online</h2>
            </div>
            <p>
              Choose your preferred date and time. Book your service in minutes
              through our secure platform — available 24/7.
            </p>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_text_flex_div">
              <div className="third_number_div">
                <p>3</p>
              </div>
              <h2>We Pick Up & Pack (If Needed)</h2>
            </div>
            <p>
              Our professional driver arrives on time, helps with loading,
              packing, or furniture assembly—whatever you need.
            </p>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_text_flex_div">
              <div className="third_number_div">
                <p>4</p>
              </div>
              <h2>Track Your Move</h2>
            </div>
            <p>
              Stay in control. Track your van live on the map, get
              notifications, and stay updated every step of the way.
            </p>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_text_flex_div">
              <div className="third_number_div">
                <p>5</p>
              </div>
              <h2>Safe & Secure Delivery</h2>
            </div>
            <p>
              We carefully deliver your items to the destination — home, office,
              storage, or shop — with care and efficiency.
            </p>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_text_flex_div">
              <div className="third_number_div">
                <p>6</p>
              </div>
              <h2>Rate & Relax</h2>
            </div>
            <p>
              Once your job is done, rate the experience. We strive for 5-star
              service — every time.
            </p>
          </div>
          <h4 className="thirdSection_website_live_link">
            🔐 Simple. Safe. Reliable. That's the{" "}
            <Link to="https://quickvanuk.com/" target="_blank">
              QuickVanUK.com 
            </Link>
            promise.
          </h4>
          {/* <Link>
            <button className="third_section_btn">Try it out now</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
