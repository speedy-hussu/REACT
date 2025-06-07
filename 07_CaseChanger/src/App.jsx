import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [darkMode, setDarkMode] = useState("true");

  function toggle() {
    setDarkMode((mode) => !mode);
  }
  useEffect(() => {
    setChangedText(inputText);
  }, [inputText, darkMode]);

  return (
    <body className={darkMode ? "dark" : "light"}>
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="Enter the text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <div className="changedtext">
          <p>{changedText.toUpperCase()}</p>
        </div>
        <button className="btn" onClick={toggle}>
          {darkMode ? "light Mode" : "dark Mode"}
        </button>
      </div>
    </body>
  );
}

export default App;
