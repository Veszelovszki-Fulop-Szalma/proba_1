import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
       <div className="wrapper">
       <div className="right">
      <Link to="/" className="logo">AssistedPro</Link>
      </div>
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/Kotveny">Kötveny</Link>
        <Link to="/Reszveny">Részvény</Link>
        <Link to="/Kripto">Kripto</Link>
        <Link to="/Portfolio">Portfoliók</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
