import React from "react";
import faqs_photo from "../../accets/faqs/faqs_photo.png";
import "./Faqs.css";

const Faqs = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="faqs_parent_div">
      {/* <div className="faqs_customer_text_div">
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
      </div> */}

      <div className="faqs_grid_div">
        <div className="faqs_question_div">
          <div>
            <h2>Customers</h2>
            <div>
              <select name="" id="">
                <option value="">• How do I book a van?</option>
                <option value="">Simply use our website.</option>
              </select>

              <br />

              <select name="" id="">
                <option value="">• How is pricing calculated?</option>
                <option value="">Based on distance, time, and van size</option>
              </select>

              <br />

              <select name="" id="">
                <option value="">• What if my delivery is delayed?</option>
                <option value="">We notify you and provide updates.</option>
              </select>

              <br />

              <select name="" id="">
                <option value="">• Do I need to help load/unload?</option>
                <option value="">
                  Our drivers assist, but extra manpower can be added.
                </option>
              </select>
            </div>
          </div>
          <div>
            <h2>Drivers</h2>
            <div>
              <select name="" id="">
                <option value="">• What documents do I need?</option>
                <option value="">
                  Driving license, insurance, vehicle registration.
                </option>
              </select>

              <br />

              <select name="" id="">
                <option value="">• How do I get paid?</option>
                <option value="">
                  Weekly bank deposits based on completed trips.
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="faqs_photo_div">
          <img src={faqs_photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
