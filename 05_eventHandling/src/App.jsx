import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", num: "" });
  const changeName = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form);
  };
  return (
    <>
      <input
        placeholder="enter the name"
        type="text"
        name="name"
        value={form.name}
        onChange={changeName}
      />
      <input
        placeholder="enter the numer"
        type="text"
        name="num"
        value={form.num}
        onChange={changeName}
      />
    </>
  );
}

export default App;
