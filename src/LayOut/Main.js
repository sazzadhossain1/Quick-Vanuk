import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Main.css";

const Main = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // 01884295409
  return (
    <div className="main_parent_div">
      <NavigationBar scrollToFooter={scrollToFooter} />
      <Outlet />
      <Footer ref={footerRef} />

      {/* WhatsApp Icon */}
      {/* <a
        href="https://wa.me/447352622216" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="whatsapp_icon" icon={faWhatsapp} />
      </a> */}
    </div>
  );
};

export default Main;
