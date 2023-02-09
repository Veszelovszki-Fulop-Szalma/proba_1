import React from 'react';
import { Card } from 'react-bootstrap';
import "./MyCards.css"

import myImage from '../img/pics1.png';
import myImage1 from '../img/pics2.png'
import myImage2 from '../img/pics3.png'
import myImage3 from '../img/pics4.png'


const MyCards = () => (
  <div className="row">
    <Card className="col-sm-12 col-md-6">
      <Card.Img src={myImage} />
    </Card>
    <Card className="col-sm-12 col-md-6">
      <Card.Img src={myImage1} />
    </Card>
    <Card className="col-sm-12 col-md-6">
      <Card.Img src={myImage2} />
    </Card>
    <Card className="col-sm-12 col-md-6">
      <Card.Img src={myImage3} />
    </Card>
  </div>
);

export default MyCards;
