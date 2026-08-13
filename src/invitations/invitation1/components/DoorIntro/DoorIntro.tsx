import { useState } from "react";
import "./DoorIntro.css";

import waxseal from "../../assets/waxsealAM.png";
import backgroundDoor from "../../assets/backgroundDoor.png";

function DoorIntro() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className={`door-intro ${opened ? "opened" : ""}`}>
      <div className="door door-left">
        <img
          className="door-background"
          src={backgroundDoor}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="door door-right">
        <img
          className="door-background"
          src={backgroundDoor}
          alt=""
          aria-hidden="true"
        />
      </div>

      <button
        className="seal"
        type="button"
        onClick={handleOpen}
        aria-label="Otvori pozivnicu"
      >
        <img
          className="seal-image"
          src={waxseal}
          alt=""
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className="open-button"
        onClick={handleOpen}
      >
        Otvori pozivnicu
      </button>
    </div>
  );
}

export default DoorIntro;