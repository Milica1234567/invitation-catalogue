import { useEffect } from "react";

import "./Invitation2.css";
import Hero from "./components/Hero/Hero";
import InvitationIntro from "./components/InvitationIntro/InvitationIntro";
import Timeline from "./components/Timeline/Timeline";
import Location from "./components/Location/Location";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer/Footer";

function Invitation2() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".invitation-two [data-reveal]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="invitation-two">
      <Hero />
      <InvitationIntro />
      <Timeline />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
}

export default Invitation2;
