import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginData, valt } from "../../../redux/userSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userValue = useSelector((state) => state.user.userValue);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    if (username && password) {
      dispatch(loginData({ username: username, password: password }));
      dispatch(valt());
      console.log("Felh" + userValue.username);
    }
  };

  return (
    <form>
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
      <button type="submit" onClick={handleSubmit}>
        Belépés
      </button>
      <br />
      <br />
      <Link to="/Regis">Regisztráció</Link>
    </form>
  );
};

export default LoginForm;
