import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SectionDes from "../sectionDes";
import "./projects.css";
import datas from "./data.json";
import ProjectCard from "../projectCard";

const Projects = () => {
  const [data, setData] = useState(datas.projects);
  const [btnActive, setBtnActive] = useState(0);
  const theme = useSelector((state) => state.themes.themes);

  const changeActive = (e) => {
    let btnActive = document.querySelector(".projects-btn.active");
    btnActive.classList.remove("active");
    e.target.classList.add("active");
    setBtnActive(Number(e.target.id));
  };

  const changeData = () => {
    if (btnActive === 0) setData(datas.projects);
    else setData(datas.projects.filter((project) => project.id === btnActive));
  };

  useEffect(() => {
    changeData();
  }, [btnActive]);

  return (
    <section id="projects" className={`projects ${theme}`}>
      <div className="projects-container">
        <SectionDes title="Projects" des="My projects" />
        <ul className="projects-controller">
          <li
            id="0"
            className={`projects-btn active ${theme}`}
            onClick={(e) => changeActive(e)}
          >
            All
          </li>
          <li
            id="1"
            className={`projects-btn ${theme}`}
            onClick={(e) => changeActive(e)}
          >
            Project 1
          </li>
          <li
            id="2"
            className={`projects-btn ${theme}`}
            onClick={(e) => changeActive(e)}
          >
            Project 2
          </li>
          <li
            id="3"
            className={`projects-btn ${theme}`}
            onClick={(e) => changeActive(e)}
          >
            Project 3
          </li>
        </ul>
        <div className="project-cards">
          {data.map((project, index) => (
            <ProjectCard key={index} img={project.imgSrc} name={project.name} link={project.linkGit} demo={project.demo}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
