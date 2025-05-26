import React from "react";
import "./ServicePriceInnerPage.css";
import photo from "../../accets/banner/bannerPhoto.jpg";
import servicePriceCartPhoto from "../../accets/servicePriceInnerPage/servicePriceCartPhoto.png";
import { Link } from "react-router-dom";
const ServicePriceInnerPage = () => {
  return (
    <div className="servicePrice_innerPage_parent_div">
      <div className="servicePrice_innterPage_flex_div">
        <img className="servicePrice_innerPage_img" src={photo} alt="" />
        <div className="servicePrice_innerPage_text_div">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, optio
            nulla consequuntur incidunt veritatis non doloribus eius possimus
            minima molestiae. Rem debitis natus eum ipsum corporis id beatae
            suscipit nobis, dolorem doloremque sunt voluptatibus laudantium unde
            obcaecati, eos voluptates fugit magnam nihil distinctio blanditiis
            accusamus nostrum. Alias aspernatur tenetur hic! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, optio nulla
            consequuntur incidunt veritatis non doloribus eius possimus minima
            molestiae. Rem debitis natus eum ipsum corporis id beatae suscipit
            nobis, dolorem doloremque sunt voluptatibus laudantium unde
            obcaecati, eos voluptates fugit magnam nihil distinctio blanditiis
            accusamus nostrum. Alias aspernatur tenetur hic!
          </p>
        </div>
      </div>

      {/* ------- CART SECTION -------- */}

      <div className="service_price_cart_div">
        <div className="service_price_grid_div">
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button className="servicePrice_btn">Book Now</button>
            </Link>
          </div>
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button className="servicePrice_btn">Book Now</button>
            </Link>
          </div>
          <div className="service_price_child_div">
            <div className="service_price_heading_div">
              <h4>SWB Transit(Small)</h4>
            </div>
            <img
              className="servicePriceCartPhoto"
              src={servicePriceCartPhoto}
              alt=""
            />
            <p>Mon - Fri - (7AM to 5PM)</p>
            <p>X1 Labour £45/hr min x2 hrs</p>
            <p>X2 Labour £55/hr min x2 hrs</p>
            <p>(After 5PM weekend rates apply)</p>
            <p>Sat - Sun - (7AM to 10PM)</p>
            <p>X1 Labour £50/h min x2 hrs</p>
            <p>X2 Labour £60/hr min x2 hrs</p>
            <p className="last_child">Additional labour £10/hr - 3hr Min</p>
            <Link>
              <button className="servicePrice_btn">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePriceInnerPage;
