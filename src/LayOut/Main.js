import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavigationBar scrollToFooter={scrollToFooter} />
      <Outlet />
      <Footer ref={footerRef} />
    </div>
  );
};

export default Main;
