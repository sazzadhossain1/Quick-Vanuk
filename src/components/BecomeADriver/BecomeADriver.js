import React, { useState } from "react";
import "./BecomeADriver.css";
import becomeAdriverPhoto from "../../accets/becomeADriver/becomeAdriverPhoto.png";

const BecomeADriver = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    // licenseFile: null,
    // passportFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, [name]: files[0] });
  // };

  // const handleSubmit = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // alert("Form Submitted Successfully!");

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("licenseFile", formData.licenseFile);
    formDataToSend.append("passportFile", formData.passportFile);

    const response = await fetch("https://formspree.io/f/meoajvqe", {
      method: "POST",
      body: formDataToSend,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        // licenseFile: null,
        // passportFile: null,
      });
    } else {
      alert("Failed to submit the form. Try again.");
    }
  };
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="become_a_driver_main_parent_div">
      <div className="become_a_driver_parent_div">
        <div className="becomeAdriverPhoto_div">
          <img className="becomeAdriverPhoto" src={becomeAdriverPhoto} alt="" />
        </div>
        <div className="form_container">
          <h1>Driver Registration Form</h1>
          <form className="become_a_driver_form" onSubmit={handleSubmit}>
            <div className="form_group">
              {/* <label>First Name</label> */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              {/* <label>Last Name</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              {/* <label>Address</label> */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              {/* <label>Phone Number</label> */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeADriver;
