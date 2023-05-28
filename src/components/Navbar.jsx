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
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>{" "}
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
