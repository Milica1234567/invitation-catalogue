import type { CSSProperties } from "react";

import "./InvitationIntro.css";

function InvitationIntro() {
  return (
    <section className="inv4-intro" id="inv4-intro">
      <div className="inv4-content">
        <p data-inv4-reveal>Sa velikom radošću vas pozivamo<br />da svojim prisustvom uveličate dan<br />kada ćemo jedno drugom reći „da“.</p>
        <div className="inv4-ornament" data-inv4-reveal style={{ "--inv4-delay": "0.16s" } as CSSProperties} aria-hidden="true"><span>❦</span></div>
      </div>
    </section>
  );
}

export default InvitationIntro;
