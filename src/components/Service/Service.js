import React from "react";
import "./Service.css";

import manAndVanService from "../../accets/service_photos/manAndVanService.png";
import sameDayDeliveryService from "../../accets/service_photos/sameDayDeliveryService.jpg";
import BusinessLogistics from "../../accets/service_photos/BusinessLogistics.jpeg";
import FurnitureAndAppliance from "../../accets/service_photos/FurnitureAndAppliance Transport.jpg";
import StorePickupAndDelivery from "../../accets/service_photos/storePickupDelivery.webp";
import singleItemsFinal from "../../accets/service_photos/single items final.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="service_parent_div">
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
          {/* <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link> */}
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
          {/* <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link> */}
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
          {/* <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link> */}
        </div>
        <div className="service_cart_div">
          <img className="service_photo" src={singleItemsFinal} alt="" />
          <div>
            <h2>Furniture & Appliance Transport</h2>
            <p>
              Bought new furniture from IKEA, B&Q, or Argos? We’ll pick it up
              and deliver it safely to your home.
              {/* For moving large household items */}
            </p>
          </div>
          {/* <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link> */}
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
          {/* <Link to="/serviceInnerPage" className="service_link">
            <button className="service_read_btn">Read More</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
