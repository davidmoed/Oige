import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AutoCTA = () => {
  const [carRegistrationVal, setCarRegistrationVal] = useState("");
  const [insuranceType, setInsuranceType] = useState("");

  return (
    <div className="AutoCTACont">
      <p className="AutoCTAHeader">sõiduki number</p>
      <input
        className="AutoCTAInput"
        value={carRegistrationVal}
        onChange={(e) => setCarRegistrationVal(e.target.value)}
      />
      <p>Väli ei ole kohustuslik</p>
      <div className="AutoCTAs">
        <Button
          className="AutoButton"
          active={insuranceType === "Liikluskindlustus"}
          onClick={() => setInsuranceType("Liikluskindlustus")}
        >
          Liikluskindlustus
        </Button>
        <Button
          className="AutoButton"
          active={insuranceType === "Kaskokindlustus"}
          onClick={() => setInsuranceType("Kaskokindlustus")}
        >
          Kaskokindlustus
        </Button>
        <Button
          className="AutoButton"
          active={insuranceType === "Liiklus + kaskokindlustus"}
          onClick={() => setInsuranceType("Liiklus + kaskokindlustus")}
        >
          Liiklus + kaskokindlustus
        </Button>
      </div>
      <Button className="AutoClearButtonCTA">alusta kindlustamist</Button>
    </div>
  );
};

export default AutoCTA;

/*
<label>
          <input
            className="AutoButton"
            type="radio"
            value="Liikluskindlustus"
            checked={insuranceType === "Liikluskindlustus"}
            onChange={() => setInsuranceType("Liikluskindlustus")}
          />
          Liikluskindlustus
        </label>
        <label>
          <input
            className="AutoButton"
            type="radio"
            value="Kaskokindlustus"
            checked={insuranceType === "Kaskokindlustus"}
            onChange={() => setInsuranceType("Kaskokindlustus")}
          />
          Kaskokindlustus
        </label>
        <label>
          <input
            className="AutoButton"
            type="radio"
            value="Liiklus + kaskokindlustus"
            checked={insuranceType === "Liiklus + kaskokindlustus"}
            onChange={() => setInsuranceType("Liiklus + kaskokindlustus")}
          />
          Liiklus + kaskokindlustus
        </label>
*/
