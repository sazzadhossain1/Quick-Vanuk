import React from "react";
import "./FifthSection.css";
import { Link } from "react-router-dom";
import fifthSectionPhoto from "../../accets/fifthSectionPhotos/fifthSectionPhoto.png";

const FifthSection = () => {
  return (
    <div className="fifthSection_main_div">
      <h1>How much does it cost?</h1>

      <div className="fifthSection_parent_div">
        <div className="fifthSection_text_div">
          {/* <h1>How much does it cost?</h1> */}
          <div>
            <h4>Affordable. Transparent. No Surprises</h4>
            <p>
              At
              <Link to="https://quickvanuk.com/" target="_blank">
                QuickVanUK.com
              </Link>
              , we believe in fair, upfront pricing — tailored to your exact
              needs. Whether you’re moving a single sofa or a full house, our
              flexible pricing options ensure you only pay for what you use.
            </p>
          </div>
          <Link>
            <button>Get a quote now</button>
          </Link>
        </div>

        <div className="fifthSectionPhoto_div">
          <img className="fifthSectionPhoto" src={fifthSectionPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
