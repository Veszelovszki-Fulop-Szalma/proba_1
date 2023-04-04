import React, { useEffect, useState } from "react";
import "./Rendeles.css";
import { useDispatch } from "react-redux";
import { feltolt } from "../../redux/cartSlice";
import Calendar from "react-calendar";

const Rendeles = () => {
  const username = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    const leker = async () => {
      try {
        const response = await fetch("http://localhost:3500/cart/rendelesek");

        if (response.ok) {
          const carts = await response.json();
          let szures = carts.filter((elem) => elem.username === username);
          console.log(szures);
          dispatch(feltolt(szures));
          setOrders(szures);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    leker();
  }, [username, dispatch]);

  const torol = (id) => {
    const elemtorol = async () => {
      try {
        const response = await fetch("http://localhost:3500/cart/torol", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: id }),
        });
        if (response.ok) {
          let torolt = orders.filter((elem) => elem._id !== id);
          console.log(torolt);
          setOrders(torolt);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    elemtorol();
  };



  localStorage.setItem("rendeles", false);

  return (
    <div className="rendeles-container">
      {orders.map((elem) => (
        <div className="rendeles" key={elem._id}>
          <h1>{elem.portfolio.title}</h1>
          <img src={elem.portfolio.image} alt="kép" />
          <p>{elem.agent.name}</p>
          <img src={elem.agent.image} alt="kép" />
          <button onClick={() => torol(elem._id)}>Törlés</button>
          <br />
          <br />
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
          <br />
          <button>Időpont foglalás</button>
        </div>
      ))}
    </div>
  );
};

export default Rendeles;
