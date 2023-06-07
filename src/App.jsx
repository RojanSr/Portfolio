import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/project/Project";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = React.useState(false);

  function changeMode() {
    setDark(!dark);
  }

  return (
    <div className={dark ? "container dark" : "container"}>
      <Navbar onModeClick={changeMode} />
      <main>
        <Home />
        <Skills />
        <Project />
        <Footer />
      </main>
    </div>
  );
}

export default App;
