import React from "react";

const ProjectCard = (props) => {
  return (
    <div className={`project-card ${props.imageClass}`}>
      <div className="card-detail">
        <h3 className="card--title">{props.title}</h3>
        <p className="description">{props.description}</p>
      </div>

      <div className="toggleCheckOut">
        <a href={props.githubLink} className="project-btn" target="_blank">
          Github
        </a>
        <a href={props.liveLink} target="_blank" className="project-btn">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
