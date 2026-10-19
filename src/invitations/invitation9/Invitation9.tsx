import { useEffect, useState } from "react";
import EnvelopeIntro from "./components/EnvelopeIntro";
import WeddingHero from "./components/WeddingHero";
import { RomanticQuote, LoveStory, FamilySection } from "./components/StorySections";
import Countdown from "./components/Countdown";
import { WeddingTimeline, VenueSection, DressCode } from "./components/EventSections";
import PhotoGallery from "./components/PhotoGallery";
import RSVPForm from "./components/RSVPForm";
import FinalMessage from "./components/FinalMessage";
import "./Invitation9.css";

function Invitation9() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>(".invitation-nine [data-reveal]");
    if (reduced) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.16, rootMargin: "0px 0px -8%" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  return (
    <main className="invitation-nine">
      {!opened && <EnvelopeIntro onComplete={() => setOpened(true)} />}
      <WeddingHero />
      <RomanticQuote />
      <LoveStory />
      <FamilySection />
      <Countdown />
      <WeddingTimeline />
      <VenueSection />
      <DressCode />
      <PhotoGallery />
      <RSVPForm />
      <FinalMessage />
    </main>
  );
}

export default Invitation9;
