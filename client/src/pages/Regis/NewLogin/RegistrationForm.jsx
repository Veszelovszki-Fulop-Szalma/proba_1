import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData, valt } from '../../../redux/userSlice';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert('A jelszavak nem egyeznek meg!');
            return;
        }

        if ((username, email, password)) {
            function feltolt() {
                const datab = async () => {
                    const bodyParsed = {
                        username,
                        email,
                        password,
                        passwordConfirm,
                    };
                    const response = await fetch(
                        'http://localhost:3500/user/register',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(bodyParsed),
                        }
                    );
                    const adat = await response.json();

                    if (response.ok) {
                        window.alert('Sikeres regisztráció!');
                        localStorage.setItem('username', username);
                        localStorage.setItem('isLoggedIn', true);
                        dispatch(loginData({ username }));
                        dispatch(valt());
                        navigate('/');
                    } else {
                        window.alert(adat.msg);
                        navigate('/Regis');
                    }
                };

                datab();
            }

            feltolt();
        } else {
            window.alert('Minden mezőt ki kell tölteni!');
        }
    };

    return (
        <form>
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
            <button type="submit" onClick={handleSubmit}>
                Regisztráció
            </button>
            <br />
            <br />
            <Link to="/Belepes">Belépés</Link>
        </form>
    );
}

export default RegistrationForm;
