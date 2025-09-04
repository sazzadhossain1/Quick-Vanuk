import React from "react";
import "./Service.css";

import houseRemovalFinal from "../../accets/secondSectionPhoto/House removal final.jpg";
import officeRemovalFinal from "../../accets/secondSectionPhoto/office removal final.jpg";
import singleRemovalFinal from "../../accets/secondSectionPhoto/single items final.jpg";

import { Link } from "react-router-dom";
import Banner from "./../Banner/Banner";

const Service = () => {
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
            {/* <p>
              Perfect for home and office relocations, student moves, and small
              deliveries. Get a professional driver and van for a hassle-free
              experience.
            </p> */}
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
            <button className="service_read_btn">GET A FREE QUOTES</button>
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
            <button className="service_read_btn">GET A FREE QUOTES</button>
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
            <button className="service_read_btn">GET A FREE QUOTES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
