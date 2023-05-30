import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="project-main" id="project-section">
      <h2 className="project--title">
        My <span className="highlight-text"> Projects </span>
      </h2>
      <div className="project--container">
        <ProjectCard
          title="Odin Library"
          imageClass="library-cover"
          githubLink="https://github.com/RojanSr/Odin-library"
          liveLink="https://rojansr.github.io/Odin-library/"
          description="Fill out some of your favourite books. A library project inspired by The Odin Project Frontend Career path challenge. I have added some of my own changes"
        />
        <ProjectCard
          title="Weather App"
          imageClass="weather-cover"
          githubLink="https://github.com/RojanSr/React-weather-app"
          liveLink="https://rojansr.github.io/React-weather-app/"
          description="Check out weather from all around the world."
        />
        <ProjectCard
          title="Meme Generator"
          imageClass="meme-cover"
          githubLink="https://github.com/RojanSr/Meme-generator"
          liveLink="https://sprightly-sherbet-934649.netlify.app/"
          description="As a meme enthusiast, this project was delight to work with. It was insipired by the React course on Scrimba."
        />
        <ProjectCard
          title="Interactive rating"
          imageClass="rating-cover"
          githubLink="https://github.com/RojanSr/interactive-rating-component-main"
          liveLink="https://rojansr.github.io/interactive-rating-component-main/"
          description="A user rating website which records the rating provided in local storage for further use."
        />
      </div>
    </div>
  );
};

export default Project;
