import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { invitation11Data as data } from "../invitation11Data";

type Status = "idle" | "loading" | "success" | "error";

async function submitRSVP(form: HTMLFormElement) {
  if (!data.rsvp.endpoint) throw new Error("RSVP još nije povezan. Dodajte endpoint u invitation11Data.ts.");
  const response = await fetch(data.rsvp.endpoint, { method:"POST", body:new FormData(form) });
  if (!response.ok) throw new Error("Odgovor trenutno nije moguće sačuvati. Pokušajte ponovo.");
}

export default function RSVPSection() {
  const [status,setStatus] = useState<Status>("idle");
  const [message,setMessage] = useState("");
  const [attending,setAttending] = useState("yes");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form=event.currentTarget; setStatus("loading"); setMessage("");
    try { await submitRSVP(form); setStatus("success"); setMessage("Hvala. Vaš odgovor je uspešno sačuvan."); form.reset(); }
    catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Došlo je do greške."); }
  };
  return <section className="i11-rsvp i11-section"><motion.div className="i11-rsvp__inner" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.15 }} transition={{ duration:1 }}>
    <div className="i11-heading"><span>Répondez s'il vous plaît</span><h2>Radujemo se vašem odgovoru</h2><p>Molimo vas da potvrdite dolazak do {data.rsvp.deadline}</p></div>
    <form onSubmit={submit}><label>Ime i prezime<input name="name" autoComplete="name" required /></label><fieldset><legend>Da li dolazite?</legend><label><input type="radio" name="attendance" value="yes" checked={attending==="yes"} onChange={()=>setAttending("yes")} /> Sa zadovoljstvom dolazim</label><label><input type="radio" name="attendance" value="no" checked={attending==="no"} onChange={()=>setAttending("no")} /> Nažalost, nisam u mogućnosti</label></fieldset>{attending==="yes" && <label>Broj gostiju<select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label>}<label>Poruka mladencima <span>(opciono)</span><textarea name="message" rows={4} maxLength={500} /></label><button disabled={status==="loading" || status==="success"}>{status==="loading" ? "Šaljemo…" : status==="success" ? "Odgovor je sačuvan" : "Pošalji odgovor"}</button>{message && <p className={`i11-form-status i11-form-status--${status}`} role="status">{message}</p>}</form>
  </motion.div></section>;
}
