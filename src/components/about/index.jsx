import React from "react";
import SectionDes from "../sectionDes";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <SectionDes title={"About me"} des={"My introduction"} />
        <div className="about-data">
          <div className="about-avatar"></div>
          <div className="about-info">
            <div className="data-title">
              <div className="data-title-item">
                <i className="bx bx-award"></i>
                <h3 className="item-title">Kinh nghiệm</h3>
                <p className="title-des">6 tháng</p>
              </div>
              <div className="data-title-item">
                <i className="bx bx-award"></i>
                <h3 className="item-title">Kinh nghiệm</h3>
                <p className="title-des">6 tháng</p>
              </div>
              <div className="data-title-item">
                <i className="bx bx-award"></i>
                <h3 className="item-title">Kinh nghiệm</h3>
                <p className="title-des">6 tháng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
