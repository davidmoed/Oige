import React from "react";
import { Container } from "react-bootstrap";
import DarkSection from "../components/DarkSection";
import LightSection from "../components/LightSection";

/* CTA sections */
import SplashCTA from "../components/homepageCTAs/SplashCTA";
import AutoCTA from "../components/homepageCTAs/AutoCTA";
import TravelCTA from "../components/homepageCTAs/TravelCTA";

import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="HomepageCont">
      <Container className="HomepageSectionCont HomepageSplashCont">
        <DarkSection
          img={"https://placehold.co/444x444.png"}
          imgClass={"HomepageSplashImage"}
          header="Parimad kindlustuspakkumised kõik ühest kohast!"
          text="Võrdle pakkumisi ja leia enda jaoks sobivaim kindlustus."
          CTASection={<SplashCTA />}
        />
      </Container>
      <div className="HomepageSectionCont HomepageAutoCont">
        <LightSection
          img={"https://placehold.co/720x450.png"}
          header="Liikluskindlustus ja kasko"
          text="Liikluskindlustus on Eestis kohustuslik kindlustus, millega hüvitatakse sinu sõidukiga teistele isikutele või nende varale põhjustatud kahjud.
          Kaskokindlustus on autokindlustus, millega hüvitatakse Sinu sõidukile tekkinud kahju siis, kui põhjustad ise avarii või juhtub autoga mõni muu õnnetus."
          CTASection={<AutoCTA />}
        />
      </div>
      <div className="HomepageSectionCont HomepageTravelCont">
        <DarkSection
          img={"https://placehold.co/720x450.png"}
          imgClass={"HomepageEdgeImgCont"}
          header="Reisikindlustus"
          text="Reisikindlustus on vajalik nii puhkuse- kui ärireisile minejale.
          Reisi ostes soeta ka sobiva kehtivusaja, piisavate kindlustussummade ja kaitseulatusega reisikindlustus."
          CTASection={<TravelCTA />}
        />
      </div>
    </div>
  );
};

export default Homepage;
