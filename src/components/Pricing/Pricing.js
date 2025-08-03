import React from "react";
import "./Pricing.css";

import pricingPhoto from "../../accets/pricing/pricingPhoto.jpg";

const Pricing = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="pricing_parent_div">
      <h2>Transparent & Competitive Rates</h2>
      <div className="pricing_flex_div">
        <img src={pricingPhoto} alt="" />
        <div className="pricing_text_div">
          <p>Hourly Rates – Flexible pricing based on service duration.</p>
          <p>Fixed Rates – Pre-determined pricing for specific routes.</p>
          <p>Extra Charges – Stairs, wait time, or long-distance fees apply.</p>
          <p>
            Discounts & Promotions – Special rates for returning customers and
            bulk bookings.
          </p>
          <div className="fifthSection_contact_us_today_div pricint_contact_us_div">
            <p>Contct Us Today</p>
            <p>📞 Phone: +447421492922</p>
            <p>📧 Email: info@quickvanuk.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
