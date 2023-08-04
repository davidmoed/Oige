import React from "react";
import { Row, Col } from "react-bootstrap";

const LightSection = ({ img, header, text, CTASection }) => {
  return (
    <Row className="LightSectionCont">
      <Col md={4} sm={12} className="HomepageEdgeImgCont">
        <img src={img} alt="Liikluskindlustus" />
      </Col>
      <Col md={8} sm={12} className="HomepageCTACont LightSectionCTACont">
        <h2>{header}</h2>
        <p>{text}</p>
        {CTASection}
      </Col>
    </Row>
  );
};

export default LightSection;
