import React from "react";
import { Col, Row } from "react-bootstrap";

const DarkSection = ({ img, imgClass, header, text, CTASection }) => {
  return (
    <Row className="DarkSectionCont">
      <Col
        md={{ span: 8, order: 1 }}
        xs={{ span: 12, order: 2 }}
        className="HomepageCTACont DarkSectionCTACont"
      >
        <h2 className="HomepageSplashCTAHeader">{header}</h2>
        <p className="HomepageSplashCTASubheader">{text}</p>
        {CTASection}
      </Col>
      <Col
        md={{ span: 4, order: 2 }}
        xs={{ span: 12, order: 1 }}
        className={imgClass}
      >
        <img src={img} alt="splash section - something inspiring" />
      </Col>
    </Row>
  );
};

export default DarkSection;
