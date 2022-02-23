import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="navbar-content">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Academic Articles</span>
      </div>
      <div className="links">
        <ul className="link-list">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/articles">ARTICLES</a>
          </li>
          <li>
            <a href="/createarticle">CREATE ARTICLES</a>
          </li>
          <li>
            <a href="contact">CONTACT</a>
          </li>
          <li>
            <a href="/login">LOGIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
