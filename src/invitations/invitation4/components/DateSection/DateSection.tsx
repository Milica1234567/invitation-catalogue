import type { CSSProperties } from "react";

import "./DateSection.css";

function DateSection() {
  return (
    <section className="inv4-date" aria-labelledby="inv4-date-title">
      <div className="inv4-content">
        <p data-inv4-reveal>Sačuvajte datum</p>
        <div className="inv4-date__layout" id="inv4-date-title">
          <span data-inv4-reveal style={{ "--inv4-delay": "0.08s" } as CSSProperties}>Subota</span>
          <div className="inv4-date__number" data-inv4-reveal style={{ "--inv4-delay": "0.16s" } as CSSProperties}><i /><strong>06</strong><i /></div>
          <span data-inv4-reveal style={{ "--inv4-delay": "0.24s" } as CSSProperties}>Jun</span>
          <time data-inv4-reveal style={{ "--inv4-delay": "0.32s" } as CSSProperties} dateTime="2027-06-06">2027.</time>
        </div>
      </div>
    </section>
  );
}

export default DateSection;
