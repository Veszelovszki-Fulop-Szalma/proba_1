import React from "react";
import Header from "../../components/Header";
import { Card } from "react-bootstrap";

import "./Home.css";

import myImage from "../../img/pics1.png";
import myImage1 from "../../img/pics2.png";
import myImage2 from "../../img/pics3.png";
import myImage3 from "../../img/pics4.png";
import myImage4 from "../../img/handshake.png";
import myImage5 from "../../img/agreement.png";
import myImage6 from "../../img/like.png";
import myImage7 from "../../img/twitter.png";
import myImage10 from "../../img/twitter2.png";
import myImage11 from "../../img/twitter3.png";






const Home = () => {
   const CardStyle = {
     position: "static",
     
   };

  return (
    <div className>
      <Header />
      <div className="container">
        <div>
          {" "}
          <h2 className="title">
            Az AssistedPro az ön pénzügyi iránytűje
          </h2>{" "}
          <p className="title2">
            Az AssistedPro az első német vagyoni tanácsadó vállalatok egyike,
            1970-ben Kölnben alapították. Azóta törekszünk arra, hogy ügyfeleink
            számára magas színvonalú pénzügyi tanácsadást nyújtsunk. Az
            AssistedPro több mint 45 év alatt Európa egyik vezető pénzügyi
            szolgáltató cégévé vált.
          </p>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-sm-4">
            <img src={myImage4} className="kep2" alt="handshake"></img>
          </div>
          <div className="col-sm-4 ">
            <img src={myImage5} className="kep2" alt="donedeal"></img>
          </div>
          <div className="col-sm-4 ">
            <img src={myImage6} className="kep2" alt="like"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <p className="kiemeles">9000 +</p>
            <p className="tik">Megkötött szerződés</p>
          </div>
          <div className="col-sm-4 ">
            <p className="kiemeles">2500 +</p>
            <p className="tik">Élő szerződés</p>
          </div>
          <div className="col-sm-4 ">
            <p className="kiemeles">6000 +</p>
            <p className="tik">Elégedett ügyfél</p>
          </div>
        </div>
        <div className="idezet">
          <h4 className="lol">Motivációnk</h4>

          <div className="row">
            <Card className="col-sm-12 col-md-6" style={CardStyle}>
              <Card.Img src={myImage} />
            </Card>
            <Card className="col-sm-12 col-md-6 card" style={CardStyle}>
              <Card.Img src={myImage1} />
            </Card>
            <Card className="col-sm-12 col-md-6 card" style={CardStyle}>
              <Card.Img src={myImage2} />
            </Card>
            <Card className="col-sm-12 col-md-6 card" style={CardStyle}>
              <Card.Img src={myImage3} />
            </Card>
          </div>
        </div>
        <h4 className="lol">Ügyfeleink visszajelzései</h4>
        <div className="scroll">
          <img src={myImage7} className="kep4" alt="asd"></img>
          <img src={myImage10} className="kep4" alt="asd"></img>
          <img src={myImage11} className="kep4" alt="asd"></img>
        </div>
        <div className="idezet2">
          <p>"Jobb a pénzről egy órát beszélni, mint egy hónapot dolgozni érte"</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
