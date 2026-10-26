import { useRef } from "react";
import { useRsvp } from "../../rsvp/useRsvp";
import ScrollBloomSequence from "./components/ScrollBloomSequence/ScrollBloomSequence";
import "./Invitation8.css";

const schedule = [
  ["15:30", "Okupljanje", "Dobrodošlica u vrtu"],
  ["16:00", "Venčanje", "Ceremonija pod lipama"],
  ["17:30", "Večera", "Zajednička trpeza i zdravica"],
  ["20:00", "Slavlje", "Muzika, ples i ponoćne želje"],
];

function Invitation8() {
  const pageRef = useRef<HTMLElement>(null);
  const { submitted, setSubmitted, status, message, submit } = useRsvp("invitation8");

  const submitRsvp = submit;

  return (
    <main ref={pageRef} className="invitation-eight">
      <ScrollBloomSequence scrollContainer={pageRef} />

      <section className="invitation-eight__section invitation-eight__hero">
        <div className="invitation-eight__card invitation-eight__hero-card">
          <p className="invitation-eight__eyebrow">Sa radošću vas pozivamo</p>
          <h1>
            Mila <span>&amp;</span> Aleksa
          </h1>
          <div className="invitation-eight__rule" aria-hidden="true"><i /></div>
          <p className="invitation-eight__date">06 · 09 · 2027</p>
          <p className="invitation-eight__place">Vila Ruža · Beograd</p>
          <a className="invitation-eight__scroll" href="#nasa-prica">
            Otkrijte našu priču <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="nasa-prica" className="invitation-eight__section invitation-eight__story">
        <div className="invitation-eight__card">
          <p className="invitation-eight__eyebrow">Jedan dan, zauvek naš</p>
          <h2>Ljubav je procvetala</h2>
          <p className="invitation-eight__copy">
            Postoje susreti koji tiho promene sve. Naš je prerastao u život koji želimo
            da nastavimo zajedno, okruženi ljudima koje najviše volimo.
          </p>
          <p className="invitation-eight__signature">Radujemo se što ćete biti deo našeg dana.</p>
        </div>
      </section>

      <section className="invitation-eight__section invitation-eight__details">
        <div className="invitation-eight__card">
          <p className="invitation-eight__eyebrow">Nedelja · 6. septembar</p>
          <h2>Plan dana</h2>
          <ol className="invitation-eight__timeline">
            {schedule.map(([time, title, description]) => (
              <li key={time}>
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="invitation-eight__section invitation-eight__location">
        <div className="invitation-eight__card">
          <p className="invitation-eight__eyebrow">Mesto susreta</p>
          <h2>Vila Ruža</h2>
          <p className="invitation-eight__copy">Bulevar mira 24, Beograd</p>
          <a
            className="invitation-eight__button"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Pogledaj mapu
          </a>
        </div>
      </section>

      <section className="invitation-eight__section invitation-eight__rsvp">
        <div className="invitation-eight__card">
          <p className="invitation-eight__eyebrow">Molimo odgovorite do 1. avgusta</p>
          <h2>Dolazite li?</h2>
          {submitted ? (
            <div className="invitation-eight__thanks" role="status">
              <span aria-hidden="true">✦</span>
              <p>Hvala! Vaš odgovor je zabeležen.</p>
              <button type="button" onClick={() => setSubmitted()}>Izmeni odgovor</button>
            </div>
          ) : (
            <form onSubmit={submitRsvp}>
              <label>
                Ime i prezime
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>Da li dolazite?<select name="attendance" defaultValue="yes"><option value="yes">Dolazim</option><option value="no">Ne dolazim</option></select></label>
              <label>
                Broj gostiju
                <select name="guests" defaultValue="1">
                  <option value="1">1 gost</option>
                  <option value="2">2 gosta</option>
                  <option value="3">3 gosta</option>
                  <option value="4">4 gosta</option>
                </select>
              </label>
              <label>
                Poruka za mladence
                <textarea name="message" rows={3} />
              </label>
              <button className="invitation-eight__button" type="submit" disabled={status === "loading"}>{status === "loading" ? "Šaljemo…" : "Potvrdi dolazak"}</button>
            {message && <p role={status === "error" ? "alert" : "status"}>{message}</p>}
            </form>
          )}
        </div>
      </section>

      <footer className="invitation-eight__footer">
        <span>M &amp; A</span>
        <p>Jedva čekamo da slavimo sa vama.</p>
      </footer>
    </main>
  );
}

export default Invitation8;
