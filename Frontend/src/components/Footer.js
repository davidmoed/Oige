import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../styles/footer.scss";

const Footer = () => {
  //TODO: replace with array of logo imgs from db
  const logoRepeat = () => {
    const LogoEls = [];

    for (let i = 0; i < 5; i++) {
      LogoEls.push(
        <p className="footerLogo" key={i}>
          Logo
        </p>
      );
    }

    return LogoEls;
  };

  return (
    <Container className="footerCont">
      <div className="footerLogoCont">{logoRepeat()}</div>
      <Row className="footerBottomCont">
        <Col md={6} sm={12} className="footerLinkCont">
          <div className="footerLinkArea">
            <p className="footerLinkHeader">Kontakt</p>
            <p className="footerLink">
              <a href="#">Telefon</a>
            </p>
            <p className="footerLink">
              <a href="#">Web</a>
            </p>
          </div>
          <div className="footerLinkArea">
            <p className="footerLinkHeader">Ettevõttest</p>
            <p className="footerLink">
              <a href="#">Telefon</a>
            </p>
            <p className="footerLink">
              <a href="#">Web</a>
            </p>
          </div>
          <div className="footerLinkArea">
            <p className="footerLinkHeader">Kindlustus</p>
            <p className="footerLink">
              <a href="#">Liikluskindlustus</a>
            </p>
            <p className="footerLink">
              <a href="#">Reisikindlustus</a>
            </p>
            <p className="footerLink">
              <a href="#">Kodukindlustus</a>
            </p>
          </div>
        </Col>
        <Col className="footerBottomLogo">
          <p className="footerLogo">Logo</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
