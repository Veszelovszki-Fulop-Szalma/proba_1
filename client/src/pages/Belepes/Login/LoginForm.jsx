import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    if (username && password) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", isLoggedIn);
    }
    console.log(localStorage.getItem("isLoggedIn"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Belépés</h1>
      <div>
        <label htmlFor="username">Felhasználónév:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Belépés</button>
      <br />
      <br />
      <Link to="/Regis">Regisztráció</Link>
    </form>
  );
};

export default LoginForm;
