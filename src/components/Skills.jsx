import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  // const mySkills = ["React", "Javascipt", "Git", "HTML5", "CSS3", "ChakraUI"];
  const mySkills = [
    { skill: "React", logoClass: "react" },
    { skill: "JavaScript", logoClass: "js" },
    { skill: "Git", logoClass: "git" },
    { skill: "HTML5", logoClass: "html" },
    { skill: "CSS3", logoClass: "css" },
    { skill: "ChakraUI", logoClass: "chakraui" },
  ];

  return (
    <div className="skills-div" id="skills-section">
      <h2 className="skill-title">
        What I'm <span className="highlight-text">familiar with</span>
      </h2>
      <div className="skill-grid">
        {mySkills.map((el) => (
          <SkillCard skill={el.skill} logo={el.logoClass} key={el.skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
