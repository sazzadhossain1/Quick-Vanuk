// import React, { useRef } from "react";
// import "./BookAVan.css";
// import emailjs from "@emailjs/browser";

// const BookAVan = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_w9nb3ox", "template_iu9airp", form.current, {
//         publicKey: "rbtFiNanehGkaIDEZ",
//       })
//       .then(
//         () => {
//           alert("SUCCESS!");
//         },
//         (error) => {
//           alert("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div className="book_a_van_parent_div">
//       <div className="book_a_van_form_div">
//         <h1>Book A Van</h1>
//         <form ref={form} onSubmit={sendEmail} action="">
//           <div className="form_control">
//             <label className="label">
//               <span className="label-text">Your Name</span>
//             </label>
//             <label className="input_group">
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your Name"
//                 className="input_field"
//                 required
//               />
//             </label>
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Your Email</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="Enter Your Email"
//                 className="input_field"
//                 required
//               />
//             </label>
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Phone Number</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="number"
//                 name="from_number"
//                 placeholder="Enter Your Phone Number"
//                 className=" input_field"
//                 required
//               />
//             </label>
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Physical Address</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="from_address"
//                 placeholder="Enter Your Physical Address"
//                 className=" input_field"
//                 required
//               />
//             </label>
//           </div>
//           <textarea className="text_area" name="message"></textarea>
//           <div className="Submit_btn_div">
//             <button className="Submit_btn">Send</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookAVan;
import React, { useRef, useState } from "react";
import "./BookAVan.css";
import emailjs from "@emailjs/browser";

const BookAVan = () => {
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

  return (
    <div className="book_a_van_parent_div">
      <div className="book_a_van_form_div">
        <h1>Book A Van</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form_control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input_group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="input_field"
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
          <textarea className="text_area" name="message"></textarea>

          {/* Success Message Appears Here */}
          {successMessage && (
            <div className="success_message">{successMessage}</div>
          )}

          <div className="Submit_btn_div">
            <button type="submit" className="Submit_btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAVan;
