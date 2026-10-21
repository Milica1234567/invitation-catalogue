import { useState } from "react";
import type { FormEvent } from "react";
import { submitBirthdayRsvp } from "../services/rsvpService";

function RSVP() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (status === "loading") return;
    const form = event.currentTarget; const fields = new FormData(form); setStatus("loading"); setMessage("");
    try { await submitBirthdayRsvp({ name: String(fields.get("name")), guests: String(fields.get("guests")), attendance: String(fields.get("attendance")), message: String(fields.get("message")) }); setStatus("success"); setMessage("Tvoj odgovor je sačuvan. Vidimo se u avanturi!"); form.reset(); }
    catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Odgovor nije sačuvan."); }
  };
  return <section className="i10-section i10-rsvp"><div className="i10-rsvp__panel"><span className="i10-label">Join the mission</span><h2>Da li si spreman za našu avanturu?</h2><form onSubmit={submit}><label>Ime i prezime<input name="name" required /></label><label>Broj gostiju<select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></label><fieldset><legend>Da li dolaziš?</legend><label><input type="radio" name="attendance" value="yes" required /> Dolazim</label><label><input type="radio" name="attendance" value="no" /> Nažalost ne mogu</label></fieldset><label>Poruka za slavljenike<textarea name="message" rows={4} /></label><button type="submit" disabled={status === "loading" || status === "success"}>{status === "loading" ? "Šaljemo energiju…" : "Potvrdi dolazak"}</button>{message && <p className={`i10-rsvp__status i10-rsvp__status--${status}`} role="status">{message}</p>}</form></div></section>;
}
export default RSVP;
