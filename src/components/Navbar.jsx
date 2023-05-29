import React from "react";

export default function Navbar(props) {
  return (
    <nav>
      <h1 className="nav--header">
        <a href="/App">Rojan.</a>
      </h1>

      <ul className="nav--items">
        <div className="toggle-mode" onClick={props.onModeClick}>
          <i className="fa-regular fa-moon"></i>
        </div>
        <li className="nav--item">
          <a href="#home-section">Home</a>
        </li>
        <li className="nav--item">
          <a href="#skills-section">Skills</a>
        </li>
        <li className="nav--item">
          <a href="#">Projects</a>{" "}
        </li>
        <li className="nav--item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
