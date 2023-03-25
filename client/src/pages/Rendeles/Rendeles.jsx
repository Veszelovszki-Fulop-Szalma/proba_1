import React, { useEffect, useState } from 'react';
import './Rendeles.css';

const Rendeles = () => {
    const username = localStorage.getItem('username');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/cart/rendelesek'
                );

                if (response.ok) {
                    const carts = await response.json();
                    let szures = carts.filter(
                        (elem) => elem.username === username
                    );
                    console.log(szures);
                    setOrders(szures);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, []);

    localStorage.setItem('rendeles', false);

    return (
        <div className="rendeles-container">
            {orders.map((elem) => (
                <div className="rendeles" key={elem._id}>
                    <h1>{elem.portfolio.title}</h1>
                    <img src={elem.portfolio.image} alt="kép" />
                    <p>{elem.agent.name}</p>
                    <img src={elem.agent.image} alt="kép" />
                </div>
            ))}
        </div>
    );
};

export default Rendeles;
