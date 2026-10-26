import { useRsvp } from "../../../rsvp/useRsvp";
import { useState } from "react";
import { invitation9Data as data } from "../invitation9Data";

function RSVPForm() {
  const { status, message, submit } = useRsvp("invitation9");
  const [attending, setAttending] = useState("yes");
  return (
    <section className="i9-section i9-rsvp">
      <div className="i9-heading" data-reveal><span>Répondez s'il vous plaît</span><h2>Radujemo se vašem dolasku</h2><p>Molimo vas da potvrdite svoj dolazak do {data.rsvp.deadline}</p></div>
      <form data-reveal onSubmit={submit}>
        <label>Ime i prezime *<input name="name" required autoComplete="name" /></label>
        <label>Email adresa <input name="email" type="email" autoComplete="email" /></label>
        <fieldset><legend>Da li dolazite? *</legend><label><input type="radio" name="attendance" value="yes" checked={attending === "yes"} onChange={() => setAttending("yes")} /> Sa zadovoljstvom dolazim</label><label><input type="radio" name="attendance" value="no" checked={attending === "no"} onChange={() => setAttending("no")} /> Nažalost, nisam u mogućnosti</label></fieldset>
        {attending === "yes" && <div className="i9-rsvp__conditional"><label>Broj gostiju<select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></label><label>Imena dodatnih gostiju<input name="additionalGuests" /></label><label>Preferencije za obrok<select name="meal"><option>Standardni meni</option><option>Vegetarijanski</option><option>Veganski</option></select></label><label>Alergije ili posebne napomene<textarea name="allergies" rows={2} /></label></div>}
        <label>Vaše želje, naše uspomene<textarea name="message" rows={4} maxLength={500} /></label>
        <button type="submit" disabled={status === "loading" || status === "success"}>{status === "loading" ? "Čuvamo odgovor…" : status === "success" ? "Odgovor je sačuvan" : "Pošaljite odgovor"}</button>
        {message && <p className={`i9-rsvp__status i9-rsvp__status--${status}`} role="status">{message}</p>}
      </form>
    </section>
  );
}

export default RSVPForm;
