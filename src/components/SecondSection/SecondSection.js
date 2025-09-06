import React from "react";
import "./SecondSection.css";

import HouseRemovalFinal from "../../accets/secondSectionPhoto/House removal final.jpg";
import officeRemovalFinal from "../../accets/secondSectionPhoto/office removal final.jpg";

import singleItemsFinal from "../../accets/secondSectionPhoto/single items final.jpg";

import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div>
      <h1>QuickVanUK for every occasion</h1>
      {/* <div className="second_section_grid_div">
        <div>
          <img src={MovingService} alt="" />
          <h3>Moving service</h3>
        </div>
        <div>
          <img src={SmallItems} alt="" />
          <h3>Small Items</h3>
        </div>
        <div>
          <img src={LargeAndBulkyGoods} alt="" />
          <h3>Large and bulky goods</h3>
        </div>
        <div>
          <img src={ValuablesAndDelicateGoods} alt="" />
          <h3>Valuables and delicate goods</h3>
        </div>

        <div>
          <img src={FoodAndGroceryDelivery} alt="" />
          <h3>Food & grocery delivery</h3>
        </div>
      </div> */}

      <div>
        <div className="second_section_flex_div">
          <img src={HouseRemovalFinal} alt="" />
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
            <Link className="second_section_button_link">
              <button className="second_section_button">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
        <div className="second_section_flex_div">
          <img src={officeRemovalFinal} alt="" />
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
            <Link className="second_section_button_link">
              <button className="second_section_button">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
        <div className="second_section_flex_div">
          <img src={singleItemsFinal} alt="" />
          <div className="second_section_text_div">
            <h3>Single Items</h3>
            <p>
              Need just one thing moved? QuickVanUK is perfect for single-item
              deliveries. Whether it’s a sofa, fridge, or bulky furniture, our
              man-and-van service ensures safe pickup and drop-off. Ideal for
              online purchases, store collections, or gifts—no job is too small
              when it comes to reliable moving.
            </p>
            <Link className="second_section_button_link">
              <button className="second_section_button">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
