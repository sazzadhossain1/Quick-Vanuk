import React, { useState } from "react";
import "./BecomeADriver.css";

const BecomeADriver = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    licenseFile: null,
    passportFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="become_a_driver_parent_div">
      <div className="form_container">
        <h1>Driver Registration Form</h1>
        <form className="become_a_driver_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Upload License</label>
            <input
              type="file"
              name="licenseFile"
              accept="image/*,.pdf"
              required
              onChange={handleFileChange}
            />
          </div>
          <div className="form_group">
            <label>Upload Passport</label>
            <input
              type="file"
              name="passportFile"
              accept="image/*,.pdf"
              required
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeADriver;
