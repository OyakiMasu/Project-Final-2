import React, { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          <a className="logbtn" href="/memepg">
            Login
          </a>
        </button>

        {/* <button type="submit">Sign up</button> */}
      </form>
    </div>
  );
}

export default Login;
