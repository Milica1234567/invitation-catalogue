import { useRsvp } from "../../../rsvp/useRsvp";

function RSVP() {
  const { status, message, submit } = useRsvp("invitation10");
  return (
    <section className="i10-section i10-rsvp">
      <div className="i10-rsvp__panel">
        <span className="i10-label">Join the mission</span>
        <h2>Da li si spreman za našu avanturu?</h2>
        <form onSubmit={submit}>
          <label>
            Ime i prezime
            <input name="name" required />
          </label>
          <label>
            Broj gostiju
            <select name="guests" defaultValue="1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          <fieldset>
            <legend>Da li dolaziš?</legend>
            <label>
              <input type="radio" name="attendance" value="yes" required />{" "}
              Dolazim
            </label>
            <label>
              <input type="radio" name="attendance" value="no" /> Nažalost ne
              mogu
            </label>
          </fieldset>
          <label>
            Poruka za slavljenike
            <textarea name="message" rows={4} />
          </label>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Šaljemo energiju…" : "Potvrdi dolazak"}
          </button>
          {message && (
            <p
              className={`i10-rsvp__status i10-rsvp__status--${status}`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
export default RSVP;
