import React from "react";
import "./Portfolio.css";
import kep from "../Portfolio/portre.jpg"

const Portfolio = () => {
   const portfolioItems = [
     {
       id: 1,
       title: "ÚJ TEKNOLOGIA ESZKÖZALAP",
       description: "100% Kripo alapok",
       result: "Várható hozam(éves): 7,47 %",
       image: kep,
       url: "",
     },
     {
       id: 2,
       title: "FEJLETT VILÁG RÉSZVÉNY ESZKÖZALAP",
       description: "100% Részvény alapok",
       result: "Várható hozam(éves): 4,22 %",
       image: kep,
       url: "",
     },
     {
       id: 3,
       title: "VILÁGJÁRÓ KÖTVÉNY ESZKÖZALAP",
       description: "100% kötvény alapok",
       result: "Várható hozam(éves): 4,98 %",
       image: kep,
       url: "",
     },
     {
       id: 4,
       title: "GLOBÁLIS ALAPOK ALAPJA",
       description: "40% Részvény, 30% Kripto, 30% Kötvény",
       result: "Várható hozam(éves): 9,22%",
       image: kep,
       url: "",
     },
     {
       id: 5,
       title: "FEJLETT VILÁG RÉSZVÉNY ESZKÖZALAP",
       description: "60% Kripto, 20% Részvény, 20% Kötvény",
       result: "Várható hozam(éves): 5,08%",
       image: kep,
       url: "",
     },
   ];

  return (
    <div className="portfolio">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-item">
          <img src={item.image} alt={item.title} />
          <div className="portfolio-item-info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.result}</p>
            <a href={item.url}>Ajánlat Kiválasztása</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
