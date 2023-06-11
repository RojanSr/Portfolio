import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

import libraryImg from "../../assets/library.jpg";
import memeImg from "../../assets/meme.png";
import weatherImg from "../../assets/weather.png";
import ratingImg from "../../assets/rating.png";

function getImg(id) {
  let img = libraryImg;
  switch (id) {
    case 1:
      img = libraryImg;
      break;
    case 2:
      img = weatherImg;
      break;
    case 3:
      img = memeImg;
      break;
    case 4:
      img = ratingImg;
      break;
    default:
      break;
  }
  return img;
}

console.log(getImg());

const Project = () => {
  const projectMap = projectData.map((obj) => {
    return (
      <ProjectCard
        key={obj.id}
        title={obj.title}
        imgUrl={getImg(obj.id)}
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
