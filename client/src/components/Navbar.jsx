import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/kotveny">Kotveny</Link>
    </div>
  );
};

export default Navbar;
