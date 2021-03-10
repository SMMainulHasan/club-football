import React from "react";
import "./Header.css";
import logo from "../../images/football logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/league">League</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
