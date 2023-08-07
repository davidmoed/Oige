import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TravelCTA = () => {
  const [insuranceType, setInsuranceType] = useState("");

  return (
    <div className="travelCTACont HomepageCTAArea">
      <p className="HomepageCTAHeader">Reisi sihtkoht</p>
      <div className="travelCTAs">
        <div className="travelButtonGroup">
          <p className="travelButtonText">Põhjamaad, Läti, Leedu</p>
          <Button
            className="travelButton"
            active={insuranceType === "Põhjamaad, Läti, Leedu"}
            onClick={() => setInsuranceType("Põhjamaad, Läti, Leedu")}
          >
            Select
          </Button>
        </div>

        <div className="travelButtonGroup">
          <p className="travelButtonText">Euroopa</p>
          <Button
            className="travelButton"
            active={insuranceType === "Euroopa"}
            onClick={() => setInsuranceType("Euroopa")}
          >
            Select
          </Button>
        </div>
        <div className="travelButtonGroup">
          <p className="travelButtonText">Euroopa, Türgi, Egiptus, Tuneesia</p>
          <Button
            className="travelButton"
            active={insuranceType === "Euroopa, Türgi, Egiptus, Tuneesia"}
            onClick={() =>
              setInsuranceType("Euroopa, Türgi, Egiptus, Tuneesia")
            }
          >
            Select
          </Button>
        </div>
        <div className="travelButtonGroup">
          <p className="travelButtonText">
            Kogu maailm v.a USA, Kanada, Austraalia, Venemaa ja Valgevene
          </p>
          <Button
            className="travelButton"
            active={
              insuranceType ===
              "Kogu maailm v.a USA, Kanada, Austraalia, Venemaa ja Valgevene"
            }
            onClick={() =>
              setInsuranceType(
                "Kogu maailm v.a USA, Kanada, Austraalia, Venemaa ja Valgevene"
              )
            }
          >
            Select
          </Button>
        </div>
        <div className="travelButtonGroup">
          <p className="travelButtonText">Kogu maailm</p>
          <Button
            className="travelButton"
            active={insuranceType === "Kogu maailm"}
            onClick={() => setInsuranceType("Kogu maailm")}
          >
            Select
          </Button>
        </div>
      </div>
      <Button className="darkSectionStartInsuringCTA">
        alusta kindlustamist
      </Button>
    </div>
  );
};

export default TravelCTA;
