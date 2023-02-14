import React from "react";
import Header from "../../components/Header";
import { Card } from "react-bootstrap";
import "./Home.css";

import myImage from "../../img/pics1.png";
import myImage1 from "../../img/pics2.png";
import myImage2 from "../../img/pics3.png";
import myImage3 from "../../img/pics4.png";

const Home = () => {
  const CardStyle = {
    position: "static",
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Rólunk</h1>
        <div className="sorki">
          <p>
            Az AssistedPro az első német vagyoni tanácsadó vállalatok egyike,
            1970-ben Kölnben alapították. Azóta törekszünk arra, hogy ügyfeleink
            számára magas színvonalú pénzügyi tanácsadást nyújtsunk. Az
            AssistedPro több mint 45 év alatt Európa egyik vezető pénzügyi
            szolgáltató cégévé vált. Jelenleg 15 országban vagyunk jelen.
            Magyarország 1992 óta része a vállalatcsoportnak, megbízhatóan,
            stabilan és kiszámítható módon végezzük munkánkat, amelynek
            középpontjában a pénzügyileg tervezhető jövő biztosítása, és ez
            által az európai biztosítási kultúra magyar piacon történő
            elterjesztése áll. Múltunk a garancia arra, hogy a jövőben is
            számíthat ránk pénzügyi kérdésekben.
            <br />
            Tanácsadásunk ügyfeleink pénzügyi helyzetének gondos elemzésén
            alapul – egyénre szabottan. A személyes megbeszélés során főként a
            célokra vagyunk kíváncsiak, és ezekből alakítunk ki egyéni pénzügyi
            megoldásokat. Pénzügyi szakembereink általában éveken keresztül
            kísérik figyelemmel ügyfeleik pénzügyi döntéseit, és azokat mindig
            az adott élethelyzethez igazítják. Az eredmény mindig az egyén
            szükségleteinek megfelelő biztosítási, befektetési koncepciója.
          </p>
        </div>

        <div className="kep1" />

        <div className="szurke-hatter">
          <h2>Motivációnk</h2>
        </div>

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
    </div>
  );
};

export default Home;
