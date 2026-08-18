import { useEffect } from "react";

import "./Invitation6.css";
import Hero from "./components/Hero/Hero";
import PhotoIntro from "./components/PhotoIntro/PhotoIntro";
import InvitationMessage from "./components/InvitationMessage/InvitationMessage";
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
import Countdown from "./components/Countdown/Countdown";
import PhotoStory from "./components/PhotoStory/PhotoStory";
import Location from "./components/Location/Location";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer/Footer";

function Invitation6() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".invitation-six [data-inv6-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("inv6-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="invitation-six">
      <Hero />
      <PhotoIntro />
      <InvitationMessage />
      <WeddingDetails />
      <Countdown />
      <PhotoStory />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
}

export default Invitation6;
