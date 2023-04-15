import React, { useEffect, useState } from 'react';
import './Rendeles.css';
import { useDispatch } from 'react-redux';
import { feltolt } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

const Rendeles = () => {
    const username = localStorage.getItem('username');
    const [orders, setOrders] = useState([]);
    const [appoints, setAppoints] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const lekerRendeles = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/cart/rendelesek'
                );

                if (response.ok) {
                    const carts = await response.json();
                    let szures = carts.filter(
                        (elem) => elem.username === username
                    );
                    // console.log(szures);
                    dispatch(feltolt(szures));
                    setOrders(szures);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        const lekerIdopont = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/appointment/rendelesek'
                );

                if (response.ok) {
                    const foglalasok = await response.json();
                    // console.log(foglalasok);
                    setAppoints(foglalasok);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        lekerRendeles();
        lekerIdopont();
    }, [username, dispatch]);

    const torol = (id) => {
        const elemtorol = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/cart/torol',
                    {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ id: id }),
                    }
                );
                if (response.ok) {
                    let torolt = orders.filter((elem) => elem._id !== id);
                    // console.log(torolt);
                    setOrders(torolt);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        elemtorol();

        const foglaltorol = async () => {
            try {
                const rendelesek = await fetch(
                    'http://localhost:3500/cart/rendelesek'
                );

                const data = await rendelesek.json();

                const foglalasok = await fetch(
                    'http://localhost:3500/appointment/rendelesek'
                );

                const adat = await foglalasok.json();

                const talalat = data.filter(
                    (item) => item._id === id && item.username === username
                );

                const rendTal = adat.filter(
                    (item) =>
                        item.agent._id === talalat[0].agent._id &&
                        item.portfolio._id === talalat[0].portfolio._id
                );

                console.log(rendTal);

                const response = await fetch(
                    'http://localhost:3500/appointment/torol',
                    {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ id: rendTal[0]._id }),
                    }
                );

                if (response.ok) {
                    console.log('Sikeres törlés!');
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        foglaltorol();
    };

    localStorage.setItem('rendeles', false);

    return (
        <div className="rendeles-container">
            {orders.map((elem) => (
                <div className="rendeles" key={elem._id}>
                    <h1>{elem.portfolio.title}</h1>
                    <img src={elem.portfolio.image} alt="kép" />
                    <p>{elem.agent.name}</p>
                    <img src={elem.agent.image} alt="kép" />
                    <button className="igenn" onClick={() => torol(elem._id)}>
                        Törlés
                    </button>
                    <br />
                    <br />
                    {appoints.filter(
                        (item) =>
                            elem.portfolio._id === item.portfolio._id &&
                            item.username === username
                    ).length === 0 ? (
                        <Link
                            className="igenn"
                            to={{
                                pathname: '/Foglalas/' + elem.agent._id,
                            }}
                            onClick={() =>
                                localStorage.setItem(
                                    'portfolioId',
                                    elem.portfolio._id
                                )
                            }
                        >
                            Időpontfoglaló
                        </Link>
                    ) : (
                        appoints.map((item) => (
                            <div key={item._id}>
                                {elem.portfolio._id === item.portfolio._id &&
                                item.username === username ? (
                                    <>
                                        <p>Időpont: {item.time}</p>
                                    </>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>
    );
};

export default Rendeles;
