import "./App.css";
import { useState } from "react";
function App() {
  let [i, setCounter] = useState(0);
  function add() {
    setCounter(++i);
  }
  function remove() {
    if (i > 0) {
      setCounter(--i);
    }
  }
  return (
    <>
      <h1>Speedy and React</h1>
      <h3>COUNTER : {i}</h3>
      <div className="btns">
        <button onClick={add}>INCREMENT</button>
        <button onClick={remove}>DECREMENT</button>
      </div>
    </>
  );
}

export default App;
