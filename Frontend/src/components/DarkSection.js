import React from "react";
import { Col, Row } from "react-bootstrap";

const DarkSection = ({ img, imgClass, header, text, CTASection }) => {
  return (
    <Row className="DarkSectionCont">
      <Col md={8} sm={12} className="HomepageCTACont DarkSectionCTACont">
        <h2>{header}</h2>
        <p>{text}</p>
        {CTASection}
      </Col>
      <Col md={4} className={imgClass}>
        <img src={img} alt="splash section - something inspiring" />
      </Col>
    </Row>
  );
};

export default DarkSection;
