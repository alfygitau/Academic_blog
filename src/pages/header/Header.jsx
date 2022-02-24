import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import { useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    dispatch(logoutInitiate());
    navigate('/login')

  };

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
            <a href="/create">CREATE ARTICLES</a>
          </li>
          <li>
            <a href="contact">CONTACT</a>
          </li>
          {!user ? (
            <li>
              <a href="/login">LOGIN</a>
            </li>
          ) : (
            <>
              <li>
                <img src={user.image} alt="avatar" />
                <span>{user.username}</span>
              </li>
              <button
                type="button"
                className="btn btn-light"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
