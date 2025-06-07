import Speedy from "./Speedy";
import Data from "./Data";
import { useState } from "react";
function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [inpName, setInpName] = useState();
  const [inpAge, setInpAge] = useState();
  return (
    <>
    <Data/>
      {/* <input
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setInpName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter age"
        onChange={(e) => {
          setInpAge(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(inpName);
          setAge(inpAge);
        }}
      >
        click me
      </button>
      <h2>{name}{age}</h2>
      <Speedy name={name} age={age} />
      <Speedy name="manthan" age="17" />
      <Speedy name="vaibhav" age="22" /> */}
    </>
  );
}

export default App;

