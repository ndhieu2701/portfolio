import React from "react";
import "./projectCard.css"

const ProjectCard = ({ name, img, link, demo }) => {
  return (
    <div className="project-card">
      <img src={img} alt="project-img" className="project-img" />
      <h3 className="project-name">{name}</h3>
      {link && (
        <a href={link} className="project-link" target="_blank">
          Link Github
          <i className="bx bx-right-arrow-alt"></i>
        </a>
      )}
      {demo && (
        <a href={demo} className="project-link" target="_blank">
          Demo
          <i className="bx bx-right-arrow-alt"></i>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
