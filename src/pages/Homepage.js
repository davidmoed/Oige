import React from "react";
import { Container } from "react-bootstrap";
import DarkSection from "../components/DarkSection";

/* CTA sections */
import SplashCTA from "../components/homepageCTAs/SplashCTA";

import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <Container className="HomepageCont">
      <div className="HomepageSectionCont HomepageSplashCont">
        <DarkSection
          img={"https://placehold.co/444x444.png"}
          imgClass={"HomepageSplashImage"}
          header="Parimad kindlustuspakkumised kõik ühest kohast!"
          text="Võrdle pakkumisi ja leia enda jaoks sobivaim kindlustus."
          CTASection={<SplashCTA />}
        />
      </div>
    </Container>
  );
};

export default Homepage;
