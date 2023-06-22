import React from "react";

export default function SkillCard({ skill, logo }) {
  return (
    <div className={"skill-box " + logo}>
      <span>{skill}</span>
    </div>
  );
}
