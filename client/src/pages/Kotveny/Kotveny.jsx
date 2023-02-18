import React from "react";
import Header2 from "../../components/Header2";
import "./Kotveny.css";

const Kotveny = () => {
  return <div>
    <Header2/>
    <div className="container">
    <div className="sorkikot">
      <div className="kek-hatter">
        <h1>Kötvények</h1>
      </div>
        <p>
        A kötvények olyan pénzügyi eszközök, amelyek segítségével a befektetők kis mértékű, általában biztonságos hozamot érhetnek el. Az átlagos hozam 4-5% körül mozog, ami alacsonyabb lehet a részvényekkel szemben, de nincs annyi kockázat. Ugyanakkor, ha a kibocsátó vállalat anyagi nehézségekbe kerül, akkor a kötvények értéke csökkenhet, és a befektetőknek kockázatot jelenthetnek. Ezenkívül, a kamatok változása miatt a hozam is változhat.

        Összességében, a kötvények biztonságosabb befektetési lehetőséget jelentenek, de alacsonyabb hozamot biztosítanak, mint a részvények. A befektetőknek fontolóra kell venniük a saját risk tolerance-jukat és a pénzügyi céljaikat ahhoz, hogy eldöntsék, a kötvények megfelelőek-e  számukra.
        </p>
    </div>
    <div className="kepkot"/>

    <div className="kek-hatter">
        <h2>
          Kötvenyek fajtái
        </h2>
    </div>
    <div className="kepkotfaj"/>
    </div>
  </div>;
};

export default Kotveny;
