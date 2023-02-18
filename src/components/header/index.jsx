import React, { useEffect, useState } from "react";
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

  //show menu in mobile
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className={!showMenu ? "logo" : "logo-disable"}>
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className={!showMenu ? "menu show-menu" : "menu"}>
          <ul className="navbar">
            <li className="navbar-item">
              <a href="#" className={`navbar-item-link ${theme}`}>
                <i className="bx bx-home-alt"></i>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className={`navbar-item-link ${theme}`}>
                <i className="bx bx-user"></i>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#skills" className={`navbar-item-link ${theme}`}>
                <i className="bx bx-file"></i>
                Skills
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className={`navbar-item-link ${theme}`}>
                <i className="bx bx-briefcase-alt"></i>
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className={`navbar-item-link ${theme}`}>
                <i className="uil uil-message"></i>
                Contact
              </a>
            </li>
            <div
              className={`navbar-item multi-themes ${theme}`}
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
          </ul>
          <div className={`menu-icon ${theme}`} onClick={toggleMenu}>
            {showMenu ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="uil uil-apps"></i>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
