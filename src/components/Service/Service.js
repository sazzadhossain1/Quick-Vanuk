import React, { useEffect, useState } from "react";
import "./Service.css";

import houseRemovalFinal from "../../accets/secondSectionPhoto/House removal final.jpg";
import officeRemovalFinal from "../../accets/secondSectionPhoto/office removal final.jpg";
import singleRemovalFinal from "../../accets/secondSectionPhoto/single items final.jpg";

import { Link } from "react-router-dom";
import Banner from "./../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const openModal = () => {
    console.log("kjdjkfjdkjf");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ✅ Stop body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mandajvv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  // Auto-hide success/error message after 30 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000); // 30s
      return () => clearTimeout(timer);
    }
  }, [status]);

  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="service_parent_div">
      <div className="service_grid_div">
        <div className="service_cart_div">
          <img className="service_photo" src={houseRemovalFinal} alt="" />
          <div>
            <h2>House Removals</h2>

            <p>
              Moving house doesn’t have to be stressful. QuickVanUK makes
              household removals simple with trained movers, secure vans, and
              hassle-free booking. From small flats to family homes, we’ll
              transport your furniture, appliances, and personal belongings
              safely and on time—so you can settle into your new home without
              worry.
            </p>
          </div>
          <Link
            // to="/serviceInnerPage"
            className="service_link"
          >
            <button className="service_read_btn" onClick={openModal}>
              GET A FREE QUOTES
            </button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={officeRemovalFinal} alt="" />
          <div>
            <h2>Office Removals</h2>
            {/* <p>
              Urgent package or cargo? Our on-demand same-day service ensures
              fast, secure, and efficient delivery across the UK.
            </p> */}
            <p>
              Relocating your office? QuickVanUK provides a smooth transition
              with minimal downtime. We handle office furniture, electronics,
              and files with expert care, ensuring your business is up and
              running quickly. With flexible scheduling and professional movers,
              we make office removals efficient, secure, and stress-free for
              companies of all sizes.
            </p>
          </div>
          <Link
            // to="/serviceInnerPage"
            className="service_link"
          >
            <button className="service_read_btn" onClick={openModal}>
              GET A FREE QUOTES
            </button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={singleRemovalFinal} alt="" />
          <div>
            <h2>Single Items</h2>
            {/* <p>
              We partner with e-commerce, retailers, and corporate businesses to
              provide contract-based transportation services.
            </p> */}
            <p>
              Need just one thing moved? QuickVanUK is perfect for single-item
              deliveries. Whether it’s a sofa, fridge, or bulky furniture, our
              man-and-van service ensures safe pickup and drop-off. Ideal for
              online purchases, store collections, or gifts—no job is too small
              when it comes to reliable moving.
            </p>
          </div>
          <Link
            // to="/serviceInnerPage"
            className="service_link"
          >
            <button className="service_read_btn" onClick={openModal}>
              GET A FREE QUOTES
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="second_sectionmodal_overlay" onClick={closeModal}>
          <div
            className="second_sectionmodal_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="second_section_form_child_div">
              <form onSubmit={handleSubmit}>
                <div className="banner_modal_flex_div">
                  <h2>QuickVanUK Quotes</h2>

                  <FontAwesomeIcon
                    className="banner_modal_close_button"
                    onClick={closeModal}
                    icon={faXmark}
                  />
                </div>
                <p>Get a Free Quote for QuickVanUK service</p>

                <label>Name</label>
                <br />
                <input type="text" name="name" required />
                <br />

                <label>Contact number</label>
                <br />
                <input type="text" name="contact" required />
                <br />

                <label>Collection Address</label>
                <br />
                <input type="text" name="collection" required />
                <br />

                <label>Delivery Address</label>
                <br />
                <input type="text" name="delivery" required />
                <br />

                <button type="submit" className="banner_form_Submit_button">
                  Submit
                </button>

                {/* Success/Error Messages */}
                {status === "SUCCESS" && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    ✅ Thank you for your submission. We will get back to
                    you shortly.
                  </p>
                )}
                {status === "ERROR" && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    ❌ Oops! Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
            {/* <button
                    className="second_sectionmodal_close_button"
                    onClick={closeModal}
                  >
                    Close
                  </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
