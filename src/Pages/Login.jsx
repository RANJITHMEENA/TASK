import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const users = [
    { username: "ranjith", password: "123" },
    { username: "mntask", password: " 123" },
  ];
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
    } else {
      setError("Incorrect username and password");
    }
  };
  console.log(isLoggedIn, "is");
  return (
    <div>
      {isLoggedIn ? navigate("/home") : null}
      <div className="main">
        <p className="sign" align="center">
          LOG IN
        </p>
        <form onSubmit={handleSubmit} className="form1">
          <input
            className="un "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            align="center"
            placeholder="Username"
          />
          <input
            className="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            align="center"
            placeholder="Password"
          />
          <button className="submit" type="submit" align="center">
            Sign in
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};
export default Login;
