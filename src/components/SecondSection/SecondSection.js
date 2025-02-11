import React from "react";
import "./SecondSection.css";

import photoOne from "../../accets/secondSectionPhoto/secondPhotoOne.webp";
import photoTwo from "../../accets/secondSectionPhoto/secondPhotoTwo.webp";
import photoThree from "../../accets/secondSectionPhoto/secondPhotoThird.webp";
import photoFour from "../../accets/secondSectionPhoto/secondPhotoFour.webp";
import photoFive from "../../accets/secondSectionPhoto/secondPhotoFive.webp";

const SecondSection = () => {
  return (
    <div>
      <h1>Quick Vanuk for every occasion</h1>
      <div className="second_section_grid_div">
        <div>
          <img src={photoOne} alt="" />
          <h3>Small Items</h3>
        </div>
        <div>
          <img src={photoTwo} alt="" />
          <h3>Large and bulky goods</h3>
        </div>
        <div>
          <img src={photoThree} alt="" />
          <h3>Valuables and delicate goods</h3>
        </div>
        <div>
          <img src={photoFour} alt="" />
          <h3>Moving service</h3>
        </div>
        <div>
          <img src={photoFive} alt="" />
          <h3>Food & grocery delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
