import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import "./project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    {
      axios
        .get("./projects/project.json")
        .then((res) => setProjects(res.data))
        .catch((err) => console.log(err));
    }
  });
  return (
    <section id="projects" className="container">
      <h2>
        Projects<span className="red_text">.</span>
      </h2>
      <div className="projects_container">
        {/* dynamic data coming from json file */}
        {projects &&
          projects.map((project) => {
            return (
              <div className="project_card">
                <img src={"./" + project.image} alt={project.title} />
                <h4 className="red_text">{project.title}</h4>
                <p>{project.content}</p>
                <a href={project.url} className="project_link"><BiLinkAlt/></a>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Project;
