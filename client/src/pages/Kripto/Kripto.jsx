import React from "react";
import Header3 from "../../components/Header3";
import kepemkrip from "../Kripto/kripto.png";

const Kripto = () => {
  return (
    <div>
      <Header3 />
      <div className="container">
        <h1 className="szurke-hatter">A Kripto valuta</h1>
        <p>
          A kriptovaluták digitális pénzek, amelyek kódolás segítségével jönnek
          létre és átvitelre kerülnek a blockchain technológia révén. Az egyik
          legismertebb kriptovaluta a Bitcoin.
          <br />
          A kriptovalutákra való befektetés előnyei közé tartozik az alacsony
          költségek, a nagyobb anonimitás, valamint a hatékonyabb átutalások
          lehetősége. Emellett a kriptovaluták árfolyama nagymértékben
          ingadozhat, ami lehetővé teszi a magas hozam elérését, de ugyanakkor
          nagy kockázatot is jelent.
          <br />
          Az átlagos hozam a kriptovalutákra való befektetésnél nehéz
          megbecsülni, mivel az árak jelentős ingadozást mutathatnak az idő
          múlásával. Egyes kriptovaluták esetén nagyon magas hozamokat lehet
          elérni, míg mások esetén az árak esetleg csökkennek. A befektetőknek
          fontos megérteniük a technológia működését és a piacot, valamint
          folyamatosan figyelemmel kell kísérniük a kriptopiacon bekövetkező
          változásokat.
          <br />
          Összességében, a kriptovaluták nagymértékű hozamot kínálhatnak, de
          ezzel együtt nagymértékű kockázatot is jelentenek. A befektetőknek
          alaposan meg kell fontolniuk, hogy a kriptovaluták megfelelnek-e a
          saját pénzügyi céljaiknak és risk tolerance-juknak, mielőtt
          befektetnek.
        </p>
        <div style={{textAlign:"center", margin:"50px"}}>
          <img  src={kepemkrip} alt="Kriptovaluta" />
        </div>
      </div>
    </div>
  );
};

export default Kripto;
