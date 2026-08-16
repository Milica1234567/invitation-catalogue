import { useEffect } from "react";

import "./Invitation4.css";
import Hero from "./components/Hero/Hero";
import InvitationIntro from "./components/InvitationIntro/InvitationIntro";
import DateSection from "./components/DateSection/DateSection";
import Timeline from "./components/Timeline/Timeline";
import Location from "./components/Location/Location";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer/Footer";

function Invitation4() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".invitation-four [data-inv4-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("inv4-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -7%" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="invitation-four">
      <Hero />
      <InvitationIntro />
      <DateSection />
      <Timeline />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
}

export default Invitation4;
