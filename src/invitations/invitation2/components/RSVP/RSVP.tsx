import { useState } from "react";
import { useRsvp } from "../../../../rsvp/useRsvp";

import "./RSVP.css";

function RSVP() {
  const [attendance, setAttendance] = useState("yes");
  const { submitted, setSubmitted, status, message, submit } = useRsvp("invitation2");

  const handleSubmit = submit;

  return (
    <section className="watercolor-rsvp" aria-labelledby="rsvp-two-title">
      <header data-reveal><p>Molimo vas da odgovorite do 15. maja</p><h2 id="rsvp-two-title">Potvrdite dolazak</h2></header>
      {submitted ? (
        <div className="watercolor-rsvp__thanks" role="status">
          <span>J &amp; N</span><h3>Hvala vam</h3><p>Vaš odgovor je zabeležen.</p>
          <button type="button" onClick={() => setSubmitted()}>Izmeni odgovor</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} data-reveal>
          <label><span>Ime i prezime</span><input type="text" name="name" autoComplete="name" required /></label>
          <fieldset>
            <legend>Da li dolazite?</legend>
            <div>
              <label><input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} /><span>Dolazim</span></label>
              <label><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} /><span>Ne mogu da dođem</span></label>
            </div>
          </fieldset>
          {attendance === "yes" && (
            <label><span>Broj gostiju</span><select name="guests" defaultValue="1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></label>
          )}
          <label><span>Poruka mladencima</span><textarea name="message" rows={3} /></label>
          <button className="watercolor-rsvp__submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Šaljemo…" : "Potvrdi dolazak"}</button>
            {message && <p role={status === "error" ? "alert" : "status"}>{message}</p>}
        </form>
      )}
    </section>
  );
}

export default RSVP;
