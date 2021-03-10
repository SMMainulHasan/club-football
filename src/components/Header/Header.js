import React from "react";
import "./Header.css";
import Logo from "../../images/foootball logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
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
