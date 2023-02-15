import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";

const Footer = () => {
    const theme = useSelector(state => state.themes.themes)
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <h2 className="footer-title">Nguyễn Hiếu</h2>
        <p className="footer-copyright">© Nguyen Hieu. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
