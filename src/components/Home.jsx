import React from "react";

const Home = () => {
  return (
    <div className="intro-div" id="home-section">
      <div className="dev-illustration"></div>
      <div className="introduction">
        <h1>
          Hi. I'm <span className="highlight-text">Rojan Rai.</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          accusamus labore ut libero quam nemo.
        </p>
        <button className="hire-btn">
          <span>Hire me!</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
