import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [pass, setPass] = useState("");
  useEffect(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNum) str += "0123456789";
    if (isChar) str += "!@#$%^&*()_+[]{}";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, isNum, isChar]);
  return (
    <>
      <div className="container">
        <div className="input-field">
          <input type="text" id="display" readOnly value={pass} />
          <button id="copy">COPY</button>
        </div>
        <div className="operators">
          <div className="range">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length ({length})</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              defaultChecked={isNum}
              onChange={() => {
                setIsNum((prev) => !prev);
              }}
            />
            <label>NUMBER</label>
          </div>
          <div className="character">
            <input
              type="checkbox"
              defaultChecked={isChar}
              onChange={() => {
                setIsChar((prev) => !prev);
              }}
            />
            <label>CHARACTER</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
