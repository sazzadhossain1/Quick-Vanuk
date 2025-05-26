import React from "react";
import "./ServiceInnerPage.css";
import bannerPhoto from "../../accets/banner/bannerPhoto.jpg";
import { Link } from "react-router-dom";

const ServiceInnerPage = () => {
  return (
    <div className="serviceInnerPage_parent_div">
      <div className="serviceInnerPage_content_div">
        <img className="service_inner_page_photo" src={bannerPhoto} alt="" />
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          numquam atque voluptatibus itaque deleniti temporibus sit earum
          perspiciatis nemo at! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sequi numquam atque voluptatibus itaque deleniti
          temporibus sit earum perspiciatis nemo at! perspiciatis nemo at! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam
          atque voluptatibus itaque deleniti temporibus sit earum perspiciatis
          nemo at!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          numquam atque voluptatibus itaque deleniti temporibus sit earum
          perspiciatis nemo at! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sequi numquam atque voluptatibus itaque deleniti
          temporibus sit earum perspiciatis nemo at! perspiciatis nemo at! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam
          atque voluptatibus itaque deleniti temporibus sit earum perspiciatis
          nemo at!
        </p>
        <h3>dolor sit amet, consectetur adipisicing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui
          animi optio veritatis quo voluptatibus iure sequi quod, voluptates,
          enim harum corporis non ab labore consectetur officiis soluta,
          perspiciatis inventore. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Placeat qui animi optio veritatis quo voluptatibus
          iure sequi quod, voluptates, enim harum corporis non ab labore
          consectetur officiis soluta, perspiciatis inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aperiam nam commodi obcaecati! Ratione vero odit accusamus facilis
          quam molestiae consectetur tenetur voluptate. Cupiditate blanditiis
          dolorem doloremque natus corporis eligendi dolor impedit at
          voluptates. Quae, incidunt? Cupiditate rerum cumque unde inventore
          praesentium? Qui quidem quam, aliquam asperiores, sed exercitationem
          rem nobis eaque a saepe eum, est incidunt quos animi harum?
        </p>
      </div>
      <div className="service_innner_btn_div">
        <h3>Price</h3>
        <Link to="/servicePriceInnerPage">
          <button className="service_inner_btn">PRICE</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceInnerPage;
