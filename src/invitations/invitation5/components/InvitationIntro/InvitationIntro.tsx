import "./InvitationIntro.css";

function InvitationIntro() {
  return (
    <section className="inv5-intro" id="inv5-intro">
      <div className="inv5-petal-crop inv5-intro__petal" aria-hidden="true" />
      <div className="inv5-content" data-inv5-reveal>
        <p className="inv5-kicker">Sa velikom radošću</p>
        <h2>pozivamo vas da budete deo<br />dana kada počinje naše zauvek.</h2>
      </div>
    </section>
  );
}

export default InvitationIntro;
