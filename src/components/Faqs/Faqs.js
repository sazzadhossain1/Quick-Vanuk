import React from "react";
import "./Faqs.css";

const Faqs = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="faqs_parent_div">
      <div className="faqs_customer_text_div">
        <h2>Customers</h2>
        <div>
          <p>• How do I book a van? </p>
          <p>Simply use our website.</p>
        </div>

        <div>
          <p>• How is pricing calculated?</p>
          <p>Based on distance, time, and van size.</p>
        </div>

        <div>
          <p>• What if my delivery is delayed?</p>
          <p> We notify you and provide updates.</p>
        </div>

        <div>
          <p>• Do I need to help load/unload?</p>
          <p> Our drivers assist, but extra manpower can be added.</p>
        </div>
      </div>
      <div className="faqs_drivers_text_div">
        <h2>Drivers</h2>
        <div>
          <p>• What documents do I need?</p>
          <p> Driving license, insurance, vehicle registration.</p>
        </div>
        <div>
          <p>• How do I get paid?</p>
          <p>Weekly bank deposits based on completed trips.</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
