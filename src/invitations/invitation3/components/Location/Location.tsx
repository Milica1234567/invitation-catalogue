import type { CSSProperties } from "react";

import "./Location.css";

function Location() {
  return (
    <section className="inv3-location" aria-labelledby="inv3-location-title">
      <div className="inv3-content">
        <div className="inv3-leaf-mark" data-inv3-reveal aria-hidden="true" />
        <p data-inv3-reveal style={{ "--inv3-delay": "0.08s" } as CSSProperties}>Mesto proslave</p>
        <h2 id="inv3-location-title" data-inv3-reveal style={{ "--inv3-delay": "0.16s" } as CSSProperties}>Vila Jelena</h2>
        <address data-inv3-reveal style={{ "--inv3-delay": "0.24s" } as CSSProperties}>Topola</address>
        <a data-inv3-reveal style={{ "--inv3-delay": "0.32s" } as CSSProperties} href="https://maps.google.com/?q=Vila+Jelena+Topola" target="_blank" rel="noreferrer">
          Pogledaj lokaciju <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Location;
