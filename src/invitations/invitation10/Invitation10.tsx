import { useEffect, useState } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Hero from "./components/Hero";
import {
  BirthdayDetails,
  BirthdayCountdown,
} from "./components/DetailsCountdown";
import TeamSelector from "./components/TeamSelector";
import RSVP from "./components/RSVP";
import FinalScene from "./components/FinalScene";
import "./Invitation10.css";

function Invitation10() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("i10-intro-open", showIntro);
    return () => document.body.classList.remove("i10-intro-open");
  }, [showIntro]);
  return (
    <main className="invitation-ten">
      <CinematicIntro
        visible={showIntro}
        onComplete={() => setShowIntro(false)}
      />
      <Hero />
      <BirthdayDetails />
      <BirthdayCountdown />
      <TeamSelector />
      <RSVP />
      <FinalScene />
    </main>
  );
}
export default Invitation10;
