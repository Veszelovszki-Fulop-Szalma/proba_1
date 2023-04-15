import React, { useState } from "react";
import "./foglalas.css";

const Foglalas = ({ closeModal }) => {
const [selectedDate, setSelectedDate] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected date: ", selectedDate);
    closeModal();
};

return (
    <div className="modal">
    <div className="modal-content">
        <span className="close" onClick={closeModal}>
        &times;
        </span>
        <h2>Időpont foglalása</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="date">Válassza ki az időpontot:</label>
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
        <button type="submit">Foglalás</button>
        </form>
    </div>
    </div>
);
};

export default Foglalas;
