import React from "react";
import "./ThirdSection.css";
import thirdSectionPhotoOne from "../../accets/thirdSectionPhotos/thirdSectionPhotoOne.webp";
import { Link } from "react-router-dom";

const ThirdSection = () => {
  return (
    <div className="third_section_parent_div">
      <h1>How does it work?</h1>
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
            <div className="third_number_div">
              <p>1</p>
            </div>
            <h2>Download the QuickVanuk</h2>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_div">
              <p>2</p>
            </div>
            <h2>Download the QuickVanuk</h2>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_div">
              <p>3</p>
            </div>
            <h2>Download the QuickVanuk</h2>
          </div>
          <div className="third_number_flex_div">
            <div className="third_number_div">
              <p>4</p>
            </div>
            <h2>Download the QuickVanuk</h2>
          </div>
          <Link>
            <button className="third_section_btn">Try it out now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
