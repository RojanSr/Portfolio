import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";

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
      </main>
    </div>
  );
}

export default App;
