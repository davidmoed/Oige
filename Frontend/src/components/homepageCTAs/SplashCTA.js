import React from "react";
import { Button } from "react-bootstrap";

const SplashCTA = () => {
  return (
    <div className="SplashButtonsCont">
      <div className="SplashButtonRow">
        <Button className="SplashButton">Liikluskindlustus</Button>
        <Button className="SplashButton">Kasko</Button>
      </div>
      <div className="SplashButtonRow">
        <Button className="SplashButton">Kodukindlustus</Button>
        <Button className="SplashButton">Reisikindlustus</Button>
      </div>
    </div>
  );
};

export default SplashCTA;
