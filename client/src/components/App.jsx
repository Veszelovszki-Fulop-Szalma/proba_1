import React from 'react';
import kep from "../img/pics1.png"
import kep1 from "../img/pics2.png"
import kep2 from "../img/pics3.png"
import kep3 from "../img/pics4.png"


function Card({ imageSrc }) {
  return (
    <div className="card col-sm-12 col-md-6">
      <img className="card-img-top card" src={imageSrc} />
    </div>
  );
}

function App() {
  return (
    
    <div className="row">
      <Card imageSrc={kep} />
      <Card imageSrc={kep1} />
      <Card imageSrc={kep2} />
      <Card imageSrc={kep3} />
    </div>
  );
}

export default App;