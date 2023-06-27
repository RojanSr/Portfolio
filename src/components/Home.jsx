import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="intro-div" id="home-section">
      <div className="dev-illustration">
        <div className="astronaut-illustration"></div>
      </div>
      <div className="introduction">
        <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>
          Hi there 👋! I'm <span className="highlight-text">Rojan Rai.</span>
        </h2>
        <TypeAnimation
          sequence={[
            "A front-end web developer who is passionate about producing interactive and engaging digital experiences. I work hard to make ideas come to life and provide seamless user experiences thanks to my sharp eye for design and passion  for coding.",
          ]}
          wrapper="p"
          speed={50}
          style={{ fontSize: "18px", display: "inline-block" }}
        />
      </div>
    </div>
  );
};

export default Home;
