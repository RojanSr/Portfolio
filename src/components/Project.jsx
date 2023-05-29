import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="project-main" id="project-section">
      <h2 className="project--title">My Projects</h2>
      <div className="project--container">
        <ProjectCard
          title="Odin Library"
          imageClass="library-cover"
          githubLink="https://github.com/RojanSr/Odin-library"
          liveLink="https://rojansr.github.io/Odin-library/"
          description="Fill out some of your favourite books. A library project inspired by The Odin Project Frontend Career path challenge. I have added some of my own changes"
        />
        <ProjectCard title="" imageClass="weather-cover" />
        <ProjectCard title="" imageClass="meme-cover" />
        <ProjectCard title="" imageClass="rating-cover" />
      </div>
    </div>
  );
};

export default Project;
