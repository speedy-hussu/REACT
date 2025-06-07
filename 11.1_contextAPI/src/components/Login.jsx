import React, { useState } from "react";
import { userContext, UserContext } from "../context/UserContextProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = userContext();
  function submit(e) {
    setUser({ username, password });
    console.log("login", username, password);
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Login;
