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
            <p className="fifthSection_left_text">
              At{" "}
              <Link to="https://quickvanuk.com/" target="_blank">
                QuickVanUK.com
              </Link>
              , we believe in fair, upfront pricing — tailored to your exact
              needs. Whether you’re moving a single sofa or <span>a</span> full
              house, our flexible pricing options ensure you only pay for what
              you use.
            </p>
          </div>
          <div className="fifthSection_contact_us_today_div">
            <p>Contct Us Today</p>
            {/* <p>📞 Phone: +447421492922</p> */}
            <p>📞 Phone: +44 7352 622216</p>
            <p>📧 Email: info@quickvanuk.com</p>
          </div>
        </div>

        <div className="fifthSectionPhoto_div">
          <img className="fifthSectionPhoto" src={fifthSectionPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
