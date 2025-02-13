import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import Destinations from "../pages/Destinations";

const SideNav = () => {
  return (
    <div className="sidenav" style={{ width: "200px", height: "600px" }}>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/services" className="nav-link">
        Services
      </Link>
      <Link to='/destinations' className="nav-link">
        Destinations
      </Link>
      <Link to="/feeds" className="nav-link">
        Feeds
      </Link>
    </div>
  );
};

export default SideNav;
