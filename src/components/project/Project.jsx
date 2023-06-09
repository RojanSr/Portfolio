import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData.json";

const Project = () => {
  const projectMap = projectData.map((obj) => {
    return (
      <ProjectCard
        key={obj.id}
        title={obj.title}
        imgUrl={obj.imgUrl}
        githubLink={obj.githubLink}
        liveLink={obj.liveLink}
        description={obj.description}
      />
    );
  });

  return (
    <div className="project-main" id="project-section">
      <h2 className="project--title">
        My <span className="highlight-text"> Projects </span>
      </h2>
      <div className="project--container">{projectMap}</div>
    </div>
  );
};

export default Project;
