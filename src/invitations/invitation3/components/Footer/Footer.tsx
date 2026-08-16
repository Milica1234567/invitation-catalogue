import type { CSSProperties } from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="inv3-footer">
      <div className="inv3-footer__inner">
        <p data-inv3-reveal>Radujemo se što ćemo<br />ovaj dan podeliti sa vama.</p>
        <div className="inv3-leaf-mark" data-inv3-reveal style={{ "--inv3-delay": "0.12s" } as CSSProperties} aria-hidden="true" />
        <strong data-inv3-reveal style={{ "--inv3-delay": "0.22s" } as CSSProperties}>J <i>&amp;</i> N</strong>
        <time data-inv3-reveal style={{ "--inv3-delay": "0.32s" } as CSSProperties} dateTime="2027-06-06">06 · 06 · 2027.</time>
      </div>
    </footer>
  );
}

export default Footer;
