import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AutoCTA = () => {
  const [carRegistrationVal, setCarRegistrationVal] = useState("");
  const [insuranceType, setInsuranceType] = useState("");

  return (
    <div className="autoCTACont HomepageCTAArea">
      <p className="HomepageCTAHeader">sõiduki number</p>
      <input
        className="autoCTAInput"
        value={carRegistrationVal}
        onChange={(e) => setCarRegistrationVal(e.target.value?.toUpperCase())}
      />
      <p>Väli ei ole kohustuslik</p>
      <div className="autoCTAs">
        <Button
          className="autoButton"
          active={insuranceType === "Liikluskindlustus"}
          onClick={() => setInsuranceType("Liikluskindlustus")}
        >
          Liikluskindlustus
        </Button>
        <Button
          className="autoButton"
          active={insuranceType === "Kaskokindlustus"}
          onClick={() => setInsuranceType("Kaskokindlustus")}
        >
          Kaskokindlustus
        </Button>
        <Button
          className="autoButton"
          active={insuranceType === "Liiklus + kaskokindlustus"}
          onClick={() => setInsuranceType("Liiklus + kaskokindlustus")}
        >
          Liiklus + kaskokindlustus
        </Button>
      </div>
      <Button className="lightSectionStartInsuringCTA">
        alusta kindlustamist
      </Button>
    </div>
  );
};

export default AutoCTA;
