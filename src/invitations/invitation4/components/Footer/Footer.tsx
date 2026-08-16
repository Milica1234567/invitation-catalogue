import type { CSSProperties } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="inv4-footer">
      <div className="inv4-footer__inner">
        <p data-inv4-reveal>Radujemo se što ćemo<br />ovaj dan podeliti sa vama.</p>
        <div className="inv4-ornament" data-inv4-reveal style={{ "--inv4-delay": "0.12s" } as CSSProperties} aria-hidden="true"><span>❦</span></div>
        <strong data-inv4-reveal style={{ "--inv4-delay": "0.22s" } as CSSProperties}>J <i>&amp;</i> N</strong>
        <time data-inv4-reveal style={{ "--inv4-delay": "0.32s" } as CSSProperties} dateTime="2027-06-06">06 · 06 · 2027.</time>
      </div>
    </footer>
  );
}

export default Footer;
