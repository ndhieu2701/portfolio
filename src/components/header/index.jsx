import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { changeThemes } from "../../features/themes/themesSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const theme = useSelector((state) => state.themes.themes);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    if (window.scrollY > 440) {
      header.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.15)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu">
          <div
            className={`multi-themes ${theme}`}
            onClick={() => dispatch(changeThemes())}
          >
            <button className="multi-themes-icon">
              {theme === "light" ? (
                <i className="bx bx-brightness"></i>
              ) : (
                <i className="bx bxs-moon"></i>
              )}
            </button>
          </div>
          <ul className="navbar">
            <li className="navbar-item">
              <a href="#" className={`navbar-item-link ${theme}`}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className={`navbar-item-link ${theme}`}>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#skills" className={`navbar-item-link ${theme}`}>
                Skills
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className={`navbar-item-link ${theme}`}>
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className={`navbar-item-link ${theme}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
