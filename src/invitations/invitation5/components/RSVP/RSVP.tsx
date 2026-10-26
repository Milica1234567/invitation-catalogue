import { useState } from "react";
import { useRsvp } from "../../../../rsvp/useRsvp";
import "./RSVP.css";

function RSVP() {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const { submitted, setSubmitted, status, message, submit } = useRsvp("invitation5");

  const handleSubmit = submit;

  return (
    <section className="inv5-rsvp" aria-labelledby="inv5-rsvp-title">
      <div className="inv5-content">
        <header data-inv5-reveal>
          <h2 id="inv5-rsvp-title">Da li ćete nam se<br />pridružiti?</h2>
          <p>Molimo vas da svoj dolazak<br />potvrdite do 20. juna 2027.</p>
        </header>
        {submitted ? (
          <div className="inv5-rsvp__success" role="status"><span>S &amp; A</span><h3>Hvala vam.</h3><p>Vaš odgovor je zabeležen.</p><button type="button" onClick={() => setSubmitted()}>Izmeni odgovor</button></div>
        ) : (
          <form onSubmit={handleSubmit} data-inv5-reveal>
            <label className="inv5-rsvp__field"><span>Ime i prezime</span><input name="name" type="text" autoComplete="name" required /></label>
            <fieldset><legend>Dolazak</legend><div className="inv5-rsvp__choices">
              <label><input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} /><i /><span>Sa zadovoljstvom dolazim</span></label>
              <label><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} /><i /><span>Nažalost, ne mogu da dođem</span></label>
            </div></fieldset>
            {attendance === "yes" && <label className="inv5-rsvp__field"><span>Broj gostiju</span><select name="guests" defaultValue="1"><option value="1">1 gost</option><option value="2">2 gosta</option><option value="3">3 gosta</option><option value="4">4 gosta</option></select></label>}
            <label className="inv5-rsvp__field"><span>Poruka mladencima</span><textarea name="message" rows={3} /></label>
            <button className="inv5-rsvp__submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Šaljemo…" : "Potvrdi dolazak"}</button>
            {message && <p role={status === "error" ? "alert" : "status"}>{message}</p>}
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
