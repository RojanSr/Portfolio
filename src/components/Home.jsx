import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanShow(true), 4200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="intro-div" id="home-section">
      <div className="dev-illustration">
        <div className="astronaut-illustration"></div>
      </div>
      <div className="introduction">
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            marginTop: "-20px",
            width: "200px",
            lineHeight: "1",
          }}
        >
          Hi there 👋! I'm <span className="highlight-text">Rojan Rai.</span>
        </h2>
        <TypeAnimation
          sequence={[
            "A front-end web developer who is passionate about producing interactive and engaging digital experiences. I work hard to make ideas come to life and provide seamless user experiences thanks to my sharp eye for design and passion  for coding.",
          ]}
          wrapper="p"
          speed={92}
          style={{
            fontSize: "20px",
            display: "inline-block",
            textAlign: "justify",
          }}
        />
        {canShow && (
          <a
            href="mailto:rairojan1116@gmail.com"
            className="hire-btn"
            style={{ opacity: 1 }}
          >
            <span>Hire me!</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;
