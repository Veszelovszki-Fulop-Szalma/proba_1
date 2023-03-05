import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData, valt } from '../../../redux/userSlice';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

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

    // const userValue = useSelector((state) => state.user.userValue);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username, password);
        if (username && password) {
            let vanE = false;
            data.forEach((elem) => {
                if (elem.username === username && elem.password === password) {
                    vanE = true;
                }
            });
            if (vanE) {
                console.log('Sikeres');
                dispatch(valt());
                dispatch(loginData({ username: username, password: password }));
                navigate('/');
            } else {
                console.log('Sikertelen');
                navigate('/Belepes');
            }
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
