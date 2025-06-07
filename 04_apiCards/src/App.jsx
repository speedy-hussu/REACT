import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [card, setCard] = useState([]);
  const [mode, setMode] = useState("light");
  function toggle() {
    setMode(() => {
      if (mode == "dark") {
        setMode("light");
      } else {
        setMode("dark");
      }
    });
  }

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    console.log(data);
    setCard(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={toggle} />
        <span className="slider"></span>
      </label>
      <span>{mode == "dark" ? "Dark Mode" : "Light Mode"}</span>

      <div className={`container ${mode == "light" ? "dark" : "light"}`}>
        {card.map((card) => {
          return (
            <div
              key={card.id}
              className={`card ${mode == "dark" ? "dark" : "light"}`}
            >
              <p>{card.id}</p>
              <h1 className="title">{card.title}</h1>
              <h3 className="body">{card.body}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
