import React from "react";
import "./FifthSection.css";
import { Link } from "react-router-dom";
import fifthSectionPhoto from "../../accets/fifthSectionPhotos/fifthSectionPhoto.png";

const FifthSection = () => {
  return (
    <div className="fifthSection_parent_div">
      <div className="fifthSection_text_div">
        <h1>How much does it cost?</h1>
        <p>
          Open the QuickvanUK app to get instant pricing details before you
          place an order.
        </p>
        <Link>
          <button>Get a quote now</button>
        </Link>
      </div>

      <div>
        <img className="fifthSectionPhoto" src={fifthSectionPhoto} alt="" />
      </div>
    </div>
  );
};

export default FifthSection;
