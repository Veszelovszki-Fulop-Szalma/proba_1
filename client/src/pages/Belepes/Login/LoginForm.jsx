import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData, valt } from '../../../redux/userSlice';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const userValue = useSelector((state) => state.user.userValue);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username && password) {
            function feltolt() {
                const datab = async () => {
                    const bodyParsed = {
                        username,
                        password,
                    };
                    const response = await fetch(
                        'http://localhost:3500/user/login',
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
                        window.alert('Sikeresen bejelentkeztél!');
                        if (username === 'admin') {
                            localStorage.setItem('username', username);
                            localStorage.setItem('isLoggedIn', true);
                            dispatch(loginData({ username }));
                            dispatch(valt());
                            window.location.replace('http://localhost:3500/');
                        } else {
                            localStorage.setItem('username', username);
                            localStorage.setItem('isLoggedIn', true);
                            dispatch(loginData({ username }));
                            dispatch(valt());
                            navigate('/');
                        }
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
