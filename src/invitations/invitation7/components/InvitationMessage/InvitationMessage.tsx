import "./InvitationMessage.css";

function InvitationMessage() {
  return (
    <section className="inv7-message">
      <div className="inv7-content" data-inv7-reveal>
        <p className="inv7-kicker">Pozivamo vas</p>
        <h2>Sa velikom radošću vas pozivamo<br />da budete deo dana<br />u kojem počinje naše zauvek.</h2>
        <span className="inv7-message__emboss" aria-hidden="true">A · N</span>
      </div>
    </section>
  );
}

export default InvitationMessage;
