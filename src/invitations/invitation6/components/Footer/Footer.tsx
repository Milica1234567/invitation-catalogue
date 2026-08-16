import type { CSSProperties } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="inv6-footer">
      <div className="inv6-footer__content">
        <strong data-inv6-reveal>A · N</strong>
        <time data-inv6-reveal style={{ "--inv6-delay": "0.13s" } as CSSProperties} dateTime="2026-10-18">18 · 10 · 2026</time>
        <p data-inv6-reveal style={{ "--inv6-delay": "0.26s" } as CSSProperties}>Hvala što ste deo naše priče.</p>
      </div>
    </footer>
  );
}

export default Footer;
