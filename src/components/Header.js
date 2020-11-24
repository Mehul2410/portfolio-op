import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__Left">
        <h3>Mehul</h3>
      </div>
      <div className="header__Right">
        <Link to="/">About</Link>

        <Link to="/Work">Work</Link>
      </div>
    </div>
  );
};

export default Header;
