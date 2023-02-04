import React from "react";
import { useSelector } from "react-redux";
import SectionDes from "../sectionDes";
import "./about.css";
import CV from "../../assets/Nguyen_Duy_Hieu.pdf";

const About = () => {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <section id="about" className="about">
      <div className="about-container">
        <SectionDes title={"About me"} des={"My introduction"} />
        <div className="about-data">
          <div className="about-avatar"></div>
          <div className="about-info">
            <div className={`data-title ${theme}`}>
              <div className="data-title-item">
                <i className="bx bx-award"></i>
                <h3 className="item-title">Kinh nghiệm</h3>
                <p className="title-des">6 tháng</p>
              </div>
              <div className="data-title-item">
                <i className="bx bx-briefcase-alt"></i>
                <h3 className="item-title">Hoàn thành</h3>
                <p className="title-des">3+ projects</p>
              </div>
              <div className="data-title-item">
                <i className="bx bx-phone"></i>
                <h3 className="item-title">Liên hệ</h3>
                <p className="title-des">Online 8am - 21pm</p>
              </div>
            </div>
            <p className={`about-des ${theme}`}>
              Là một Frontend Developer, mình tạo ra những giao diện trang web
              phù hợp với người dùng. Mình cảm thấy rất vui khi tạo ra được điều
              mọi người mong muốn.
            </p>
            <a download="" href={CV} className={`btn my-cv ${theme}`}>
              <span>Tải CV</span>
              <i className="bx bx-file"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
