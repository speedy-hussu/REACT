import { useState } from "react";
import "./App.css";
import Card from "./Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">
        HELLO SPEEDY
      </h1>
      <Card title="Kemcho" text="MINIONS" />
      <Card num="dnj" />
    </>
  );
}

export default App;
