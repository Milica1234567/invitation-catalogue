import { useRef, useState, type FormEvent } from "react";
import { rsvpConfig } from "./config";
import { createSubmissionId, submitRsvp, validateRsvp, type RsvpPayload } from "./submitRsvp";

export function useRsvp(invitation: string) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "unverified" | "error">("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);
  const attempts = useRef(new Map<string, RsvpPayload>());
  const confirmed = useRef(new Set<string>());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    busy.current = true;
    try {
      const fields = new FormData(form);
      const read = (key: string) => String(fields.get(key) ?? "").trim();
      const attendance = read("attendance");
      if (attendance !== "yes" && attendance !== "no") throw new Error("Izaberite da li dolazite.");
      const extras = [["email", "Email"], ["additionalGuests", "Dodatni gosti"], ["meal", "Obrok"], ["allergies", "Alergije"]]
        .filter(([key]) => read(key)).map(([key, label]) => `${label}: ${read(key)}`);
      const values = { fullName: read("name"), attending: attendance === "yes", attendeeCount: attendance === "yes" ? Number(read("guests")) : 0,
        note: [read("message"), ...extras].filter(Boolean).join("\n") };
      const key = JSON.stringify(values);
      let payload = attempts.current.get(key);
      if (!payload) {
        payload = validateRsvp({ ...values, submissionId: createSubmissionId() });
        attempts.current.set(key, payload);
      }
      if (confirmed.current.has(key)) {
        setStatus("success"); setMessage("Vaš odgovor je već sačuvan."); return;
      }
      setStatus("loading"); setMessage("Šaljemo odgovor…");
      const result = await submitRsvp(rsvpConfig[invitation], payload);
      if (result === "confirmed") {
        confirmed.current.add(key);
        setStatus("success"); setMessage("Hvala. Vaš odgovor je uspešno sačuvan.");
      } else {
        setStatus("unverified");
        setMessage(invitation === "invitation10"
          ? "Hvala na odgovoru."
          : "Zahtev je poslat, ali čuvanje nije moguće potvrditi. Proverite sa domaćinom pre ponovnog slanja.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof TypeError || (error instanceof Error && error.name === "AbortError")
        ? "Čuvanje nije potvrđeno zbog problema sa vezom. Proverite sa domaćinom ili pokušajte ponovo; koristiće se isti identifikator."
        : error instanceof Error ? error.message : "Čuvanje nije potvrđeno. Pokušajte ponovo.");
    } finally { busy.current = false; }
  }
  return { status, message, submit, submitted: status === "success", setSubmitted: () => { setStatus("idle"); setMessage(""); } };
}
