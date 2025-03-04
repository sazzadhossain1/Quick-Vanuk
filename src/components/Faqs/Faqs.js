import React from "react";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faqs_parent_div">
      <div className="faqs_customer_text_div">
        <h2>Customers</h2>
        <p>• How do I book a van? Simply use our website.</p>
        <p>
          • How is pricing calculated? Based on distance, time, and van size.
        </p>
        <p>
          • What if my delivery is delayed? We notify you and provide updates.
        </p>
        <p>
          • Do I need to help load/unload? Our drivers assist, but extra
          manpower can be added.
        </p>
      </div>
      <div className="faqs_drivers_text_div">
        <h2>Drivers</h2>
        <p>
          • What documents do I need? Driving license, insurance, vehicle
          registration.
        </p>
        <p>
          • How do I get paid? Weekly bank deposits based on completed trips.
        </p>
      </div>
    </div>
  );
};

export default Faqs;
