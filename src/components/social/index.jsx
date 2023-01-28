import React from "react";
import { useSelector } from "react-redux";
import "./social.css";

const Social = () => {
  const theme = useSelector((state) => state.themes.themes);

  return (
    <ul className="social">
      <li className="social-item">
        <a
          href="https://www.facebook.com/gintoki2701"
          className={`social-item-link ${theme}`}
        >
          <i className="bx bxl-facebook"></i>
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://github.com/ndhieu2701"
          className={`social-item-link ${theme}`}
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </li>
    </ul>
  );
};

export default Social;
