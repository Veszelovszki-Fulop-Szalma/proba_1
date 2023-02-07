import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import kep from "../img/home-page-logo-03.png";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={kep} alt="" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
