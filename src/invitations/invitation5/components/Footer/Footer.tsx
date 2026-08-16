import type { CSSProperties } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="inv5-footer">
      <div className="inv5-footer__texture" aria-hidden="true" />
      <div className="inv5-footer__veil" aria-hidden="true" />
      <div className="inv5-footer__content">
        <p data-inv5-reveal>Jedva čekamo da ovaj dan<br />podelimo sa vama.</p>
        <strong data-inv5-reveal style={{ "--inv5-delay": "0.14s" } as CSSProperties}>S <i>&amp;</i> A</strong>
        <time data-inv5-reveal style={{ "--inv5-delay": "0.26s" } as CSSProperties} dateTime="2027-07-18">18 · 07 · 2027</time>
      </div>
    </footer>
  );
}

export default Footer;
