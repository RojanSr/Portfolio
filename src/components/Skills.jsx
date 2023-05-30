import React from "react";

const Skills = () => {
  return (
    <div className="skills-div" id="skills-section">
      <h2 className="skill-title">
        What I'm <span className="highlight-text">familiar with</span>
      </h2>
      <div className="skill-grid">
        <div className="skill-box react">
          <span>React</span>{" "}
        </div>
        <div className="skill-box js">
          <span>Javascript</span>
        </div>
        <div className="skill-box git">
          <span>Git</span>
        </div>
        <div className="skill-box html">
          <span>HTML5</span>
        </div>
        <div className="skill-box css">
          <span>CSS</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
