import React from "react";
import "./SecondSection.css";

// import photoOne from "../../accets/secondSectionPhoto/secondPhotoOne.webp";
// import photoTwo from "../../accets/secondSectionPhoto/secondPhotoTwo.webp";
// import photoThree from "../../accets/secondSectionPhoto/secondPhotoThird.webp";
// import photoFour from "../../accets/secondSectionPhoto/secondPhotoFour.webp";
// import photoFive from "../../accets/secondSectionPhoto/secondPhotoFive.webp";

import SmallItems from "../../accets/secondSectionPhoto/SmallItems-removebg-preview.png";
import LargeAndBulkyGoods from "../../accets/secondSectionPhoto/Large and bulky goods.png";
import ValuablesAndDelicateGoods from "../../accets/secondSectionPhoto/Valuables and delicate goods.png";
import MovingService from "../../accets/secondSectionPhoto/Moving service.png";
import FoodAndGroceryDelivery from "../../accets/secondSectionPhoto/Food & grocery delivery.png";
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
          <img src={MovingService} alt="" />
          <div className="second_section_text_div">
            <h3>Moving service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              cupiditate molestias recusandae, tempore ipsum adipisci voluptatum
              repudiandae atque officia iusto odit alias eum amet corporis
              laudantium nihil porro ex, vitae perferendis doloremque! Aut, vero
              culpa. Fugiat voluptatem, minus facere ea consectetur expedita
              iusto sed, nam voluptates quasi neque libero inventore?
            </p>
            <Link className="second_section_button_link">
              <button className="second_section_button">GET FREE QUOTES</button>
            </Link>
          </div>
        </div>
        <div className="second_section_flex_div">
          <img src={SmallItems} alt="" />
          <div className="second_section_text_div">
            <h3>Small Items</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              cupiditate molestias recusandae, tempore ipsum adipisci voluptatum
              repudiandae atque officia iusto odit alias eum amet corporis
              laudantium nihil porro ex, vitae perferendis doloremque! Aut, vero
              culpa. Fugiat voluptatem, minus facere ea consectetur expedita
              iusto sed, nam voluptates quasi neque libero inventore?
            </p>
            <Link className="second_section_button_link">
              <button className="second_section_button">GET FREE QUOTES</button>
            </Link>
          </div>
        </div>
        <div className="second_section_flex_div">
          <img src={LargeAndBulkyGoods} alt="" />
          <div className="second_section_text_div">
            <h3>Large and bulky goods</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              cupiditate molestias recusandae, tempore ipsum adipisci voluptatum
              repudiandae atque officia iusto odit alias eum amet corporis
              laudantium nihil porro ex, vitae perferendis doloremque! Aut, vero
              culpa. Fugiat voluptatem, minus facere ea consectetur expedita
              iusto sed, nam voluptates quasi neque libero inventore?
            </p>
            <Link className="second_section_button_link">
              <button className="second_section_button">GET FREE QUOTES</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
