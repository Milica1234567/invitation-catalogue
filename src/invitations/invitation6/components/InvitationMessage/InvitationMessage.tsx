import "./InvitationMessage.css";

function InvitationMessage() {
  return (
    <section className="inv6-message">
      <div className="inv6-content" data-inv6-reveal>
        <p className="inv6-kicker">Pozivamo vas</p>
        <h2>Sa velikom radošću vas pozivamo<br />da budete deo dana<br />u kojem počinje naše zauvek.</h2>
        <span className="inv6-message__emboss" aria-hidden="true">A · N</span>
      </div>
    </section>
  );
}

export default InvitationMessage;
