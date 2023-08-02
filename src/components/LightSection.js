import React from "react";
import { Row, Col } from "react-bootstrap";

const LightSection = ({ img, header, text, CTASection }) => {
  return (
    <Row className="LightSectionCont">
      <Col md={3} sm={12} className="LightSectionImgCont">
        <img src={img} alt="Liikluskindlustus" />
      </Col>
      <Col md={9} sm={12} className="HomepageCTACont">
        <h2>{header}</h2>
        <p>{text}</p>
        {CTASection}
      </Col>
    </Row>
  );
};

export default LightSection;
