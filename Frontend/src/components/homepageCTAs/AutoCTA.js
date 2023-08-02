import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AutoCTA = () => {
  const [CTAval, setCTAval] = useState("");

  return (
    <div className="AutoCTACont">
      <p className="AutoCTAHeader">sõiduki number</p>
      <input
        className="AutoCTAInput"
        value={CTAval}
        onChange={(e) => setCTAval(e.target.value)}
      />
      <p>*Väli ei ole kohustuslik</p>
      <div className="AutoCTAs">
        <Button className="AutoButton">Liikluskindlustus</Button>
        <Button className="AutoButton">Kaskokindlustus</Button>
        <Button className="AutoButton">Liiklus + kaskokindlustus</Button>
      </div>
      <Button className="AutoClearButtonCTA">alusta kindlustamist</Button>
    </div>
  );
};

export default AutoCTA;
