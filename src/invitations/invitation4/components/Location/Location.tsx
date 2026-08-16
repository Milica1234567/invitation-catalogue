import type { CSSProperties } from "react";
import "./Location.css";

function Location() {
  return (
    <section className="inv4-location" aria-labelledby="inv4-location-title">
      <div className="inv4-content">
        <p data-inv4-reveal>Mesto proslave</p>
        <h2 id="inv4-location-title" data-inv4-reveal style={{ "--inv4-delay": "0.1s" } as CSSProperties}>Vila Jelena</h2>
        <address data-inv4-reveal style={{ "--inv4-delay": "0.2s" } as CSSProperties}>Topola</address>
        <a data-inv4-reveal style={{ "--inv4-delay": "0.3s" } as CSSProperties} href="https://maps.google.com/?q=Vila+Jelena+Topola" target="_blank" rel="noreferrer"><i />Pogledaj lokaciju <span>→</span><i /></a>
      </div>
    </section>
  );
}

export default Location;
