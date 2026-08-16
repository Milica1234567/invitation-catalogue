import type { CSSProperties } from "react";

import "./DateSection.css";

function DateSection() {
  return (
    <section className="inv3-date" aria-labelledby="inv3-date-title">
      <div className="inv3-content">
        <p data-inv3-reveal>Sačuvajte datum</p>
        <div className="inv3-date__composition" id="inv3-date-title">
          <span data-inv3-reveal style={{ "--inv3-delay": "0.08s" } as CSSProperties}>Subota</span>
          <strong data-inv3-reveal style={{ "--inv3-delay": "0.17s" } as CSSProperties}>06</strong>
          <span data-inv3-reveal style={{ "--inv3-delay": "0.26s" } as CSSProperties}>Jun</span>
          <time data-inv3-reveal style={{ "--inv3-delay": "0.35s" } as CSSProperties} dateTime="2027-06-06">2027.</time>
        </div>
        <div className="inv3-leaf-mark" data-inv3-reveal aria-hidden="true" />
      </div>
    </section>
  );
}

export default DateSection;
