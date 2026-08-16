import type { CSSProperties } from "react";

import "./Location.css";

function Location() {
  return (
    <section className="wedding-location" aria-labelledby="location-title">
      <div className="wedding-location__illustration" data-reveal aria-hidden="true">
        <span className="wedding-location__roof" /><span className="wedding-location__house" /><i /><i /><i />
      </div>
      <p data-reveal>Proslava</p>
      <h2 id="location-title" data-reveal style={{ "--reveal-delay": "0.1s" } as CSSProperties}>Vila Jelena</h2>
      <address data-reveal style={{ "--reveal-delay": "0.2s" } as CSSProperties}>Topola</address>
      <a data-reveal style={{ "--reveal-delay": "0.3s" } as CSSProperties} href="https://maps.google.com/?q=Vila+Jelena+Topola" target="_blank" rel="noreferrer">
        Pogledaj lokaciju
      </a>
    </section>
  );
}

export default Location;
