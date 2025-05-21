import React from "react";
import "./FirstSection.css";

import photoOne from "../../accets/FourthSectionPhoto/photoOne.webp";
import photoTwo from "../../accets/FourthSectionPhoto/photoTwo.gif";
import photoThree from "../../accets/FourthSectionPhoto/photoThree.gif";
import photoFour from "../../accets/FourthSectionPhoto/photoFour.gif";

const FirstSection = () => {
  return (
    <div className="fourth_section_grid_div">
      <div className="photoOne_div">
        <img className="fourth_section_photoOne" src={photoOne} alt="" />
      </div>
      <div className="fourth_section_text_parent_div">
        <h3>Why choose QuickvanUK?</h3>
        <h1 className="newsAndEvents">Your local delivery partner</h1>
        <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoTwo} alt="" />
          <div>
            <h4>View & Pick</h4>
            <p>Simply pick your future house from our product catalogue.</p>
          </div>
        </div>
        <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoThree} alt="" />
          <div>
            <h4>View & Pick</h4>
            <p>Simply pick your future house from our product catalogue.</p>
          </div>
        </div>
        <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoFour} alt="" />
          <div>
            <h4>View & Pick</h4>
            <p>Simply pick your future house from our product catalogue.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
