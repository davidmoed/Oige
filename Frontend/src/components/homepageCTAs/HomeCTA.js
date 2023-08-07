import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HomeCTA = () => {
  const [insuranceType, setInsuranceType] = useState("");

  return (
    <div className="homeCTACont HomepageCTAArea">
      <p className="HomepageCTAHeader">Hoone tüüp</p>
      <div className="homeCTAs">
        <Button
          className="homeButton"
          active={insuranceType === "Korter"}
          onClick={() => setInsuranceType("Korter")}
        >
          Korter
        </Button>
        <Button
          className="homeButton"
          active={insuranceType === "Suvila"}
          onClick={() => setInsuranceType("Suvila")}
        >
          Suvila
        </Button>
        <Button
          className="homeButton"
          active={insuranceType === "Elamu"}
          onClick={() => setInsuranceType("Elamu")}
        >
          Elamu
        </Button>
        <Button
          className="homeButton"
          active={insuranceType === "Ridaelamu / Paarismaja"}
          onClick={() => setInsuranceType("Ridaelamu / Paarismaja")}
        >
          Ridaelamu / Paarismaja
        </Button>
      </div>
      <Button className="lightSectionStartInsuringCTA">
        alusta kindlustamist
      </Button>
    </div>
  );
};

export default HomeCTA;
