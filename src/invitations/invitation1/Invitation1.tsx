import "./Invitation1.css";
import DoorIntro from "./components/DoorIntro/DoorIntro";

function Invitation1() {
  return (
  <>
    <DoorIntro />
     <div
        style={{
          minHeight: "100vh",
          background: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        POZIVNICA JE ISPOD
      </div>
  </> );
}

export default Invitation1;
