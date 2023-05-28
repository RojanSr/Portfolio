import React from "react";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = React.useState(false);

  function changeMode() {
    setDark(!dark);
  }

  return (
    <div className={dark ? "container dark" : "container"}>
      <Navbar onModeClick={changeMode} />
      <main></main>
    </div>
  );
}

export default App;
