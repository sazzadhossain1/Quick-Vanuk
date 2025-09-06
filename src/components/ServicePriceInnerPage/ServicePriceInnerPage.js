import React, { useRef, useState } from "react";
import "./ServicePriceInnerPage.css";
// import photo from "../../accets/banner/bannerPhoto.jpg";
import servicePriceCartPhoto from "../../accets/servicePriceInnerPage/servicePriceCartPhoto.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ServicePriceInnerPage = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w9nb3ox", "template_iu9airp", form.current, {
        publicKey: "rbtFiNanehGkaIDEZ",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!"); // Set success message
          form.current.reset(); // Reset the form
          setTimeout(() => setSuccessMessage(""), 5000); // Hide after 5s
        },
        (error) => {
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  const modalOpen = () => {
    const modalOpenDiv = document.getElementById("modal_open_div");
    const blurWrapper = document.getElementById("blur-wrapper");

    modalOpenDiv.removeAttribute("hidden");
    blurWrapper.classList.add("blur-background");

    // Disable background scroll
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    const modalOpenDiv = document.getElementById("modal_open_div");
    const blurWrapper = document.getElementById("blur-wrapper");

    blurWrapper.classList.remove("blur-background");
    modalOpenDiv.setAttribute("hidden", "hidden");

    // Enable background scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div className="servicePrice_innerPage_parent_div" id="blur-wrapper">
      <div className="servicePrice_innterPage_flex_div">
        {/* <img className="servicePrice_innerPage_img" src={photo} alt="" /> */}
        <div className="servicePrice_innerPage_text_div">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, optio
            nulla consequuntur incidunt veritatis non doloribus eius possimus
            minima molestiae. Rem debitis natus eum ipsum corporis id beatae
            suscipit nobis, dolorem doloremque sunt voluptatibus laudantium unde
            obcaecati, eos voluptates fugit magnam nihil distinctio blanditiis
            accusamus nostrum. Alias aspernatur tenetur hic! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, optio nulla
            consequuntur incidunt veritatis non doloribus eius possimus minima
            molestiae. Rem debitis natus eum ipsum corporis id beatae suscipit
            nobis, dolorem doloremque sunt voluptatibus laudantium unde
            obcaecati, eos voluptates fugit magnam nihil distinctio blanditiis
            accusamus nostrum. Alias aspernatur tenetur hic!
          </p>
        </div>
      </div>

      {/* ------- CART SECTION -------- */}

      <div className="service_price_cart_div">
        <div className="service_price_grid_div">
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button onClick={modalOpen} className="servicePrice_btn">
                Book Now
              </button>
            </Link>
          </div>
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button onClick={modalOpen} className="servicePrice_btn">
                Book Now
              </button>
            </Link>
          </div>
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button onClick={modalOpen} className="servicePrice_btn">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* MODAL START */}
        <div id="modal_open_div" hidden>
          <div className="servicePriceInnPage_modal_div">
            <div className="servicePriceInnPage_form_div">
              <div className="servicePriceInnPage_bookNow_div">
                <h1>Book Now</h1>
                <FontAwesomeIcon
                  onClick={closeModal}
                  className="faXmark"
                  icon={faXmark}
                />
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form_control">
                  <label className="servicePriceInnPage_label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <label className="input_group">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="servicePriceInnPage_input_field"
                      required
                    />
                  </label>
                </div>
                <div className="form_control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <label className="input_group">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Enter Your Email"
                      className="input_field"
                      required
                    />
                  </label>
                </div>
                <div className="form_control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <label className="input_group">
                    <input
                      type="number"
                      name="from_number"
                      placeholder="Enter Your Phone Number"
                      className="input_field"
                      required
                    />
                  </label>
                </div>
                <div className="form_control">
                  <label className="label">
                    <span className="label-text">Physical Address</span>
                  </label>
                  <label className="input_group">
                    <input
                      type="text"
                      name="from_address"
                      placeholder="Enter Your Physical Address"
                      className="input_field"
                      required
                    />
                  </label>
                </div>
                <textarea
                  className="servicePriceInnPage_text_area"
                  name="message"
                ></textarea>

                {/* Success Message Appears Here */}
                {successMessage && (
                  <div className="servicePriceInnPage_success_message">
                    {successMessage}
                  </div>
                )}

                <div className="Submit_btn_div">
                  <button
                    type="submit"
                    className="servicePriceInnPage_Submit_btn"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePriceInnerPage;
