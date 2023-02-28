import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("A jelszavak nem egyeznek meg!");
      return;
    }
    console.log(
      `Felhasználónév: ${username}, E-mail: ${email}, Jelszó: ${password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Regisztráció</h1>
        <label htmlFor="username">Felhasználónév:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail cím:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Jelszó ismét:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
      </div>
      <button type="submit">Regisztráció</button>
      <br />
      <br />
      <Link to="/Belepes">Belépés</Link>
    </form>
  );
}

export default RegistrationForm;
