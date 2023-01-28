import React from "react";
import "./homeData.css";
import hand from "../../assets/hand.svg";
import { useSelector } from "react-redux";

const HomeData = () => {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <div className="home-data">
      <div className={`home-data-pic ${theme}`}></div>
      <div className="home-data-data">
        <div className="home-data-name">
          <h1 className={`data-name ${theme}`}>Hiếu Nguyễn</h1>
          <img src={hand} alt="hand" />
        </div>
        <div className={`home-data-career ${theme}`}>Intern JS Developer</div>
        <p className={`home-data-des ${theme}`}>
          Mình là một người vui vẻ hoà đồng với mọi người, tận tuỵ với công việc
          của mình...
        </p>
        <a href="#contact" className={`btn home-data-btn ${theme}`}>
          <span>Say hello</span>
          <i className="uil uil-message"></i>
        </a>
      </div>
    </div>
  );
};

export default HomeData;
