import React from "react";
import { Button } from "react-bootstrap";

const SplashCTA = () => {
  return (
    <div className="SplashButtonsCont">
      <Button className="SplashButton">Liikluskindlustus</Button>
      <Button className="SplashButton">Kasko</Button>
      <Button className="SplashButton">Kodukindlustus</Button>
      <Button className="SplashButton">Reisikindlustus</Button>
    </div>
  );
};

export default SplashCTA;
