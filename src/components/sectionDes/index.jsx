import React from "react";
import { useSelector } from "react-redux";
import "./sectionDes.css";

const SectionDes = ({ title, des }) => {
  const theme = useSelector((state) => state.themes.themes);

  return (
    <div className={`section-container ${theme}`}>
      <h1 className="section-title">{title}</h1>
      <p className="section-des">{des}</p>
    </div>
  );
};

export default SectionDes;
