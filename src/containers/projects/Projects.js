import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { socialMediaLinks } from "../../portfolio";

export default function Projects() {
  const [repo] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <ProjectCard repo={v} key={v.node.id} />;
        })}
      </div>
      <a className="resume-btn" href={socialMediaLinks.github}>
        More Projects (Github)
      </a>
    </div>
  );
}
