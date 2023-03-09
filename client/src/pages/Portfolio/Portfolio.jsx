import React from "react";
import "./Portfolio.css"

const Portfolio = () => {
   const portfolioItems = [
     {
       id: 1,
       title: "Portfolió 1",
       description: "Leírás 1",
       image: "https://picsum.photos/200",
       url: "",
     },
     {
       id: 2,
       title: "Portfolió 2",
       description: "Leírás 2",
       image: "https://picsum.photos/200",
       url: "",
     },
     {
       id: 3,
       title: "Portfolió 3",
       description: "Leírás 3",
       image: "https://picsum.photos/200",
       url: "",
     },
     {
       id: 4,
       title: "Portfolió 4",
       description: "Leírás 4",
       image: "https://picsum.photos/200",
       url: "",
     },
     {
       id: 5,
       title: "Portfolió 5",
       description: "Leírás 5",
       image: "https://picsum.photos/200",
       url: "",
     },
     {
       id: 6,
       title: "Portfolió 6",
       description: "Leírás 6",
       image: "https://picsum.photos/200",
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
            <a href={item.url}>További információ</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
