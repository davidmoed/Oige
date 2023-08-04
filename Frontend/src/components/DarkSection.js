import React from "react";
import { Col, Row } from "react-bootstrap";

const DarkSection = ({ img, imgClass, header, text, CTASection }) => {
  return (
    <div className="DarkSectionCont">
      <Row className="DarkSectionCTACont">
        <Col md={8} sm={12} className="HomepageCTACont">
          <h2>{header}</h2>
          <p>{text}</p>
          {CTASection}
        </Col>
        <Col md={4} className={imgClass}>
          <img src={img} alt="splash section - something inspiring" />
        </Col>
      </Row>
    </div>
  );
};

export default DarkSection;
