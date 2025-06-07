import { useDispatch } from "react-redux";
import "./App.css";
import Nav from "./Nav";
import { byAmount, decrement, increment } from "../redux/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={() => dispatch(byAmount(amount))}>count by val</button>
    </>
  );
}

export default App;
