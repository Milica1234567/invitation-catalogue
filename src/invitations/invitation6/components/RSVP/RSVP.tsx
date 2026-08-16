import { useState } from "react";
import type { FormEvent } from "react";
import "./RSVP.css";

function RSVP() {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return (
    <section className="inv6-rsvp" aria-labelledby="inv6-rsvp-title">
      <div className="inv6-content">
        <header data-inv6-reveal><p className="inv6-kicker">Vaš odgovor</p><h2 id="inv6-rsvp-title">Potvrda dolaska</h2></header>
        {submitted ? (
          <div className="inv6-rsvp__success" role="status"><span>A · N</span><h3>Hvala vam</h3><p>Vaš odgovor je zabeležen.</p><button type="button" onClick={() => setSubmitted(false)}>Izmeni odgovor</button></div>
        ) : (
          <form onSubmit={handleSubmit} data-inv6-reveal>
            <label className="inv6-rsvp__field"><span>Ime i prezime</span><input name="name" type="text" autoComplete="name" required /></label>
            <fieldset><legend>Dolazak</legend><div className="inv6-rsvp__choices">
              <label><input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} /><i /><span>Dolazim</span></label>
              <label><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} /><i /><span>Ne dolazim</span></label>
            </div></fieldset>
            {attendance === "yes" && <label className="inv6-rsvp__field"><span>Broj gostiju</span><select name="guests" defaultValue="1"><option value="1">1 gost</option><option value="2">2 gosta</option><option value="3">3 gosta</option><option value="4">4 gosta</option></select></label>}
            <label className="inv6-rsvp__field"><span>Poruka mladencima</span><textarea name="message" rows={3} /></label>
            <button className="inv6-rsvp__submit" type="submit">Potvrdi dolazak</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
