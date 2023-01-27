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
  <div className="log-container">
    <Navbar/>
    
  <div className="card" style={{width: "30%", margin: "0 auto"}}>
  <div className="card-body">
    <h4 className="card-title text-center">Login</h4>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="username" 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
        <button type="submit" className="btn btn-primary btn-block">Login
        <a className="logbtn" href="/memepg"> Login </a> 
        </button>
    </form>
  </div>
</div>
</div>

  )
}

export default Login;
