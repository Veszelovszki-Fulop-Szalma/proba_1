import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData, valt } from '../../../redux/userSlice';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const adatleker = async () => {
            try {
                const response = await fetch('http://localhost:3500');
                const adat = await response.json();
                setData(adat.adatok);
                // console.log(adat);
            } catch (error) {
                console.log(error);
            }
        };

        adatleker();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert('A jelszavak nem egyeznek meg!');
            return;
        }

        if (username && email && password) {
            let vanE = false;
            data.forEach((elem) => {
                if (elem.username === username && elem.password === password) {
                    vanE = true;
                }
            });
            if (vanE) {
                window.alert('Ezekkel az infokkal már létezik felhasználó!');
                return;
            } else {
                console.log('Sikeres');
                dispatch(valt());
                dispatch(loginData({ username: username, password: password }));
                navigate('/');
            }
        }

        function feltolt() {
            const datab = async () => {
                const bodyParsed = {
                    username,
                    email,
                    password,
                    passwordConfirm,
                };
                const response = await fetch('http://localhost:3500', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bodyParsed),
                });

                console.log(response);
            };

            datab();
        }

        feltolt();

        console.log(
            `Felhasználónév: ${username}, E-mail: ${email}, Jelszó: ${password}`
        );
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
