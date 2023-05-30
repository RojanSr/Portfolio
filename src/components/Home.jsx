import React from "react";

const Home = () => {
  return (
    <div className="intro-div" id="home-section">
      <div className="dev-illustration">
        <div className="astronaut-illustration"></div>
      </div>
      <div className="introduction">
        <h1>
          Hi. I'm <span className="highlight-text">Rojan Rai.</span>
        </h1>
        <p>
          I'm a front-end web developer who is
          <span className="highlight-text"> passionate </span>about producing
          interactive and engaging digital experiences. I
          <span className="highlight-text"> work hard </span> to make ideas come
          to life and provide seamless user experiences thanks to my sharp eye
          for <span className="highlight-text"> design and passion </span> for
          coding.
        </p>
        <a href="mailto:rairojan1116@gmail.com" className="hire-btn">
          <span>Hire me!</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
