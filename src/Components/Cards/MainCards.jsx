import React from "react";
import { Card } from "react-bootstrap";
import { CardData } from '../Cards/CardData';
import './maincards.css';

function MainCards() {
  return (
    <>
      <div className="container" style={{ marginTop:"50px" }}>
        <h1 className="Heading_3">Best Sellers</h1>
        <div className="row">
          {CardData.map((val, index) => {
            return (
              <>
                <div className="col-md-4" key={index}>
                  <Card style={{ width: "18rem", height:"560px", fontWeight:"bold", fontSize:"13px"}}>
                  <img src={val.imgsrc} alt="Random Pics" style={{ height:"200px" }}/>
                    <Card.Body>
                      <Card.Title className="Card_Title">{val.title}</Card.Title>
                      <Card.Text>{val.text1}</Card.Text>
                      <Card.Text>{val.text2}</Card.Text>
                      <Card.Text>{val.text3}</Card.Text>
                      <Card.Text>{val.text4}</Card.Text>
                      <Card.Text>{val.text5}</Card.Text>
                      <Card.Text>{val.text6}</Card.Text>
                      <Card.Text>{val.text7}</Card.Text>
                      <button className="button_4">{val.btnText}</button>
                    </Card.Body>
                  </Card>
                  <br />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainCards;