import { useEffect } from "react";
import AnimatedHero from "./components/AnimatedHero";
import FloralSection from "./components/FloralSection";
import WeddingTimeline from "./components/WeddingTimeline";
import LocationSection from "./components/LocationSection";
import RSVPSection from "./components/RSVPSection";
import ClosingSection from "./components/ClosingSection";
import "./Invitation11.css";

export default function Invitation11() {
  useEffect(() => { document.title="Jelena & Aleksandar | Pozivnica"; window.scrollTo(0,0); }, []);
  return <main className="invitation-eleven"><AnimatedHero /><FloralSection /><WeddingTimeline /><LocationSection /><RSVPSection /><ClosingSection /></main>;
}
