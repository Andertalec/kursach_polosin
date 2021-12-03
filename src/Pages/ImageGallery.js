import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../assets/photo7.jpg";
import image2 from "../assets/photo8.jpg";
import image3 from "../assets/photo2.jpg";
import image4 from "../assets/photo6.jpg";
import image5 from "../assets/photo4.jpeg";
import image6 from "../assets/photo1.jpg";

export function ImageGallery(){
  return (
    <Container>
      <Row>
        <Col>
          <Image
            className="m-2"
            src={image1}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image2}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image3}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image4}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image5}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image6}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
