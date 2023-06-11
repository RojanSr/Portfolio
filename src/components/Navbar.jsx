import React from "react";

export default function Navbar(props) {
  const [hamDiv, setHamDiv] = React.useState(false);

  const hamStyle = hamDiv
    ? {
        display: "block",
      }
    : {
        display: "none",
      };

  function handleHam() {
    setHamDiv(!hamDiv);
  }

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
          <a href="#project-section">Projects</a>{" "}
        </li>
        <li className="nav--item">
          <a href="#contact-section">Contact</a>
        </li>
        <div className="toggleHamburger" onClick={handleHam}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </ul>

      <div className="hamburger-div" id="hamburger-menu" style={hamStyle}>
        <i className="fa-solid fa-xmark" onClick={handleHam}></i>
        <ul>
          <li className="hamnav--item">
            <a href="#home-section">Home</a>
          </li>
          <li className="hamnav--item">
            <a href="#skills-section">Skills</a>
          </li>
          <li className="hamnav--item">
            <a href="#project-section">Projects</a>
          </li>
          <li className="hamnav--item">
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
