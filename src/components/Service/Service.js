import React from "react";
import "./Service.css";

import manAndVanService from "../../accets/service_photos/manAndVanService.jpg";
import sameDayDeliveryService from "../../accets/service_photos/sameDayDeliveryService.jpg";
import BusinessLogistics from "../../accets/service_photos/BusinessLogistics.jpeg";
import FurnitureAndAppliance from "../../accets/service_photos/FurnitureAndAppliance Transport.jpg";
import StorePickupAndDelivery from "../../accets/service_photos/storePickupDelivery.webp";
import { Link } from "react-router-dom";

const Service = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="service_parent_div">
      {/* <div className="service_cart_div">
        <h1>Man & Van Service</h1>
        <div className="service_flex_div">
          <img src={manAndVanService} alt="" />
          <p>
            Perfect for home and office relocations, student moves, and small
            deliveries. Get a professional driver and van for a hassle-free
            experience.
          </p>
        </div>
      </div>
      <div className="service_cart_div_color">
        <h1>Same-Day Delivery</h1>
        <div className="service_flex_div">
          <p>
            Urgent package or cargo? Our on-demand same-day service ensures
            fast, secure, and efficient delivery across the UK.
          </p>
          <img src={sameDayDeliveryService} alt="" />
        </div>
      </div>
      <div className="service_cart_div">
        <h1> Business Logistics</h1>
        <div className="service_flex_div">
          <img src={BusinessLogistics} alt="" />
          <p>
            We partner with e-commerce, retailers, and corporate businesses to
            provide contract-based transportation services.
          </p>
        </div>
      </div>
      <div className="service_cart_div_color">
        <h1>Furniture & Appliance Transport</h1>
        <div className="service_flex_div">
          <p>
            Bought new furniture from IKEA, B&Q, or Argos? We’ll pick it up and
            deliver it safely to your home.
          </p>
          <img src={FurnitureAndAppliance} alt="" />
        </div>
      </div>
      <div className="service_cart_div">
        <h1>Store Pickup & Delivery</h1>
        <div className="service_flex_div">
          <img src={StorePickupAndDelivery} alt="" />
          <p>
            Need groceries, electronics, or other items picked up? Let us handle
            it for you!
          </p>
        </div>
      </div> */}

      <div className="service_grid_div">
        <div className="service_cart_div">
          <img className="service_photo" src={manAndVanService} alt="" />
          <div>
            <h2>Man & Van Service</h2>
            <p>
              Perfect for home and office relocations, student moves, and small
              deliveries. Get a professional driver and van for a hassle-free
              experience.
              {/* For home/office moves, small deliveries */}
            </p>
          </div>
          <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={sameDayDeliveryService} alt="" />
          <div>
            <h2>Same-Day Delivery</h2>
            <p>
              Urgent package or cargo? Our on-demand same-day service ensures
              fast, secure, and efficient delivery across the UK.
              {/* For urgent parcel and cargo delivery */}
            </p>
          </div>
          <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={BusinessLogistics} alt="" />
          <div>
            <h2>Business Logistics</h2>
            <p>
              We partner with e-commerce, retailers, and corporate businesses to
              provide contract-based transportation services.
              {/* For companies needing regular transportation */}
            </p>
          </div>
          <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={FurnitureAndAppliance} alt="" />
          <div>
            <h2>Furniture & Appliance Transport</h2>
            <p>
              Bought new furniture from IKEA, B&Q, or Argos? We’ll pick it up
              and deliver it safely to your home.
              {/* For moving large household items */}
            </p>
          </div>
          <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link>
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={StorePickupAndDelivery} alt="" />
          <div>
            <h2>Store Pickup & Delivery</h2>
            <p>
              Need groceries, electronics, or other items picked up? Let us
              handle it for you!
              {/* For IKEA, B&Q, Argos, etc. */}
            </p>
          </div>
          <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
