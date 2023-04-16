import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './foglalas.css';

const Foglalas = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [show, setShow] = useState(true);
    const param = useParams();
    const portfolioId = localStorage.getItem('portfolioId');
    const username = localStorage.getItem('username');
    // console.log(JSON.parse(portfolio)._id);

    const handleShow = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected date: ', selectedDate);
        window.alert('Sikeres időpontfoglalás!');

        const elkuld = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/appointment',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username,
                            selectedDate,
                            id: param.id,
                            portfolioId: portfolioId,
                        }),
                    }
                );

                if (response.ok) {
                    localStorage.setItem('sikeresFoglalas', true);
                    localStorage.setItem('idopont', selectedDate);
                    window.location.href = '/Rendeles';
                } else {
                    const res = await response.json();
                    console.log(res.msg);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        elkuld();
    };

    return (
    <div className='oldalam'>
        <Modal show={show}>
            <span className="close" onClick={handleShow}>
                &times;
            </span>
            <h2>Időpont foglalása</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='labelel' htmlFor="date">Válassza ki az időpontot:  </label>
                    <input
                        type="datetime-local"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                </div>
                <button type="submit" onClick={handleShow}>
                    Foglalás
                </button>
            </form>
        </Modal>
    </div>
    );
};

export default Foglalas;
