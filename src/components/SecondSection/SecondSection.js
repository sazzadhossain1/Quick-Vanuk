// import React from "react";
// import "./SecondSection.css";

// import HouseRemovalFinal from "../../accets/secondSectionPhoto/House removal final.jpg";
// import officeRemovalFinal from "../../accets/secondSectionPhoto/office removal final.jpg";

// import singleItemsFinal from "../../accets/secondSectionPhoto/single items final.jpg";

// import { Link } from "react-router-dom";

// const SecondSection = () => {
//   return (
//     <div>
//       <h1>QuickVanUK for every occasion</h1>

//       <div>
//         <div className="second_section_flex_div">
//           <img src={HouseRemovalFinal} alt="" />
//           <div className="second_section_text_div">
//             <h3>House Removals</h3>
//             <p>
//               Moving house doesn’t have to be stressful. QuickVanUK makes
//               household removals simple with trained movers, secure vans, and
//               hassle-free booking. From small flats to family homes, we’ll
//               transport your furniture, appliances, and personal belongings
//               safely and on time—so you can settle into your new home without
//               worry.
//             </p>
//             <Link className="second_section_button_link">
//               <button className="second_section_button">
//                 Get a Free Quote
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="second_section_flex_div">
//           <img src={officeRemovalFinal} alt="" />
//           <div className="second_section_text_div">
//             <h3>Office Removals</h3>
//             <p>
//               Relocating your office? QuickVanUK provides a smooth transition
//               with minimal downtime. We handle office furniture, electronics,
//               and files with expert care, ensuring your business is up and
//               running quickly. With flexible scheduling and professional movers,
//               we make office removals efficient, secure, and stress-free for
//               companies of all sizes.
//             </p>
//             <Link className="second_section_button_link">
//               <button className="second_section_button">
//                 Get a Free Quote
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="second_section_flex_div">
//           <img src={singleItemsFinal} alt="" />
//           <div className="second_section_text_div">
//             <h3>Single Items</h3>
//             <p>
//               Need just one thing moved? QuickVanUK is perfect for single-item
//               deliveries. Whether it’s a sofa, fridge, or bulky furniture, our
//               man-and-van service ensures safe pickup and drop-off. Ideal for
//               online purchases, store collections, or gifts—no job is too small
//               when it comes to reliable moving.
//             </p>
//             <Link className="second_section_button_link">
//               <button className="second_section_button">
//                 Get a Free Quote
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondSection;

import React, { useState, useEffect } from "react";
import "./SecondSection.css";

import HouseRemovalFinal from "../../accets/secondSectionPhoto/House removal final.jpg";
import officeRemovalFinal from "../../accets/secondSectionPhoto/office removal final.jpg";
import singleItemsFinal from "../../accets/secondSectionPhoto/single items final.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SecondSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  return (
    <div className="second_section_main_div">
      <h1>QuickVanUK for every occasion</h1>

      <div>
        {/* House Removals */}
        <div className="second_section_flex_div">
          <img src={HouseRemovalFinal} alt="House Removal" />
          <div className="second_section_text_div">
            <h3>House Removals</h3>
            <p>
              Moving house doesn’t have to be stressful. QuickVanUK makes
              household removals simple with trained movers, secure vans, and
              hassle-free booking. From small flats to family homes, we’ll
              transport your furniture, appliances, and personal belongings
              safely and on time—so you can settle into your new home without
              worry.
            </p>
            <button onClick={openModal} className="second_section_button">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Office Removals */}
        <div className="second_section_flex_div">
          <img src={officeRemovalFinal} alt="Office Removal" />
          <div className="second_section_text_div">
            <h3>Office Removals</h3>
            <p>
              Relocating your office? QuickVanUK provides a smooth transition
              with minimal downtime. We handle office furniture, electronics,
              and files with expert care, ensuring your business is up and
              running quickly. With flexible scheduling and professional movers,
              we make office removals efficient, secure, and stress-free for
              companies of all sizes.
            </p>
            <button onClick={openModal} className="second_section_button">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Single Items */}
        <div className="second_section_flex_div">
          <img src={singleItemsFinal} alt="Single Item" />
          <div className="second_section_text_div">
            <h3>Single Items</h3>
            <p>
              Need just one thing moved? QuickVanUK is perfect for single-item
              deliveries. Whether it’s a sofa, fridge, or bulky furniture, our
              man-and-van service ensures safe pickup and drop-off. Ideal for
              online purchases, store collections, or gifts—no job is too small
              when it comes to reliable moving.
            </p>
            <button onClick={openModal} className="second_section_button">
              Get a Free Quote
            </button>
          </div>
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

export default SecondSection;
