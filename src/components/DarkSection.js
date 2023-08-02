import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DarkSection = ({ img, imgClass, header, text, CTASection }) => {
  return (
    <Container className="DarkSectionCont">
      <Row className="DarkSectionCTACont">
        <Col md={7} sm={12} className="HomepageCTACont">
          <h2>{header}</h2>
          <p>{text}</p>
          {CTASection}
        </Col>
        <Col md={5} className={imgClass}>
          <img src={img} alt="splash section - something inspiring" />
        </Col>
      </Row>
    </Container>
  );
};

export default DarkSection;
