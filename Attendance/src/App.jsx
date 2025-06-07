import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/rollSlice";
import emptyImage from "./assets/empty.svg";

function App() {
  const [inputRoll, setInputRoll] = useState("");
  const dispatch = useDispatch();
  const rolls = useSelector((roll) => roll.roll.roll);
  function handleClick() {
    if (inputRoll !== "") {
      const existing = rolls.some((roll) => roll == inputRoll);
      if (existing) {
        setInputRoll("");
        alert("already inserted");
      } else {
        setInputRoll("");
        dispatch(add(inputRoll));
      }
    } else alert("enter the roll");
  }
  return (
    <div className="main-div">
      <div className="input-row">
        <input
          className="input-roll"
          type="number"
          placeholder="ROLL"
          value={inputRoll}
          onChange={(e) => setInputRoll(e.target.value)}
        />
        <button className="btn-add" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="display-roll">
        {[...rolls].length != 0 ? (
          [...rolls]
            .sort((a, b) => a - b)
            .map((roll, idx) => (
              <p
                key={idx}
                className="roll"
                onDoubleClick={(e) => {
                  if (confirm(`want to remove ${e.target.innerText}`))
                    dispatch(remove(e.target.innerText));
                }}
              >
                {roll}
              </p>
            ))
        ) : (
          <img src={emptyImage} />
        )}
      </div>
    </div>
  );
}

export default App;
