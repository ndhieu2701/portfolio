import React from "react";
import { useSelector } from "react-redux";
import SectionDes from "../sectionDes";
import "./skills.css";

const Skills = () => {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <section id="skills" className={`skills ${theme}`}>
      <div className="skills-container">
        <SectionDes title="Skills" des="My frontend technical level" />
        <div className="skills-data">
          <div className="skills-data-item">
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>HTML</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>CSS</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>Javascript</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>Reactjs</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>Redux-toolkit</h3>
                <p>Basic</p>
              </div>
            </div>
            <div className={`skill ${theme}`}>
              <i className="bx bxs-badge-check"></i>
              <div className="skill-item">
                <h3>Git</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
