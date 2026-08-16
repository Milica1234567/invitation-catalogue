import type { CSSProperties } from "react";

import "./InvitationIntro.css";

function InvitationIntro() {
  return (
    <section className="inv3-intro" id="inv3-intro">
      <div className="inv3-content">
        <p data-inv3-reveal>
          Sa velikom radošću vas pozivamo<br />
          da svojim prisustvom uveličate dan<br />
          kada ćemo jedno drugom reći „da“.
        </p>
        <div className="inv3-intro__berry" data-inv3-reveal style={{ "--inv3-delay": "0.18s" } as CSSProperties} aria-hidden="true">
          <i /><i /><i /><span />
        </div>
        <span className="inv3-bee" aria-hidden="true" />
      </div>
    </section>
  );
}

export default InvitationIntro;
