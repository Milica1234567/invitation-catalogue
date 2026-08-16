import { useState } from "react";
import type { FormEvent } from "react";

import "./RSVP.css";

function RSVP() {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="inv3-rsvp" aria-labelledby="inv3-rsvp-title">
      <div className="inv3-content">
        <header data-inv3-reveal>
          <p>Molimo vas da svoj dolazak potvrdite<br />do 20. maja 2027.</p>
          <h2 id="inv3-rsvp-title">Potvrda dolaska</h2>
        </header>
        {submitted ? (
          <div className="inv3-rsvp__success" role="status">
            <div className="inv3-leaf-mark" aria-hidden="true" />
            <h3>Hvala vam</h3>
            <p>Vaš odgovor je zabeležen.</p>
            <button type="button" onClick={() => setSubmitted(false)}>Izmeni odgovor</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-inv3-reveal>
            <label className="inv3-rsvp__field">
              <span>Ime i prezime</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <fieldset>
              <legend>Da li dolazite?</legend>
              <div className="inv3-rsvp__choices">
                <label className={attendance === "yes" ? "selected" : ""}>
                  <input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} />
                  <i aria-hidden="true" /><span>Dolazim</span>
                </label>
                <label className={attendance === "no" ? "selected" : ""}>
                  <input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} />
                  <i aria-hidden="true" /><span>Ne mogu da dođem</span>
                </label>
              </div>
            </fieldset>
            {attendance === "yes" && (
              <label className="inv3-rsvp__field">
                <span>Broj gostiju</span>
                <select name="guests" defaultValue="1">
                  <option value="1">1 gost</option><option value="2">2 gosta</option><option value="3">3 gosta</option><option value="4">4 gosta</option>
                </select>
              </label>
            )}
            <label className="inv3-rsvp__field">
              <span>Poruka mladencima</span>
              <textarea name="message" rows={3} />
            </label>
            <button className="inv3-rsvp__submit" type="submit">Potvrdi dolazak</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
