import { useState } from "react";
import "./App.css";
function App() {
  const [color, setcolor] = useState('#fff');
  return (
    <>
      <div className="main-page" style={{ backgroundColor: color }}></div>
      <div className="btns">
        <button
          onClick={() => setcolor("red")}
          style={{ backgroundColor: "red" }}
        >
          RED
        </button>
        <button
          onClick={() => setcolor("blue")}
          style={{ backgroundColor: "blue" }}
        >
          BLUE
        </button>
        <button
          onClick={() => setcolor("green")}
          style={{ backgroundColor: "green" }}
        >
          GREEN
        </button>
        <button
          onClick={() => setcolor("orange")}
          style={{ backgroundColor: "orange" }}
        >
          ORANGE
        </button>
      </div>
    </>
  );
}
export default App;
