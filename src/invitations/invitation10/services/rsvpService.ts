import { birthdayConfig } from "../birthdayConfig";

export type BirthdayRsvp = {
  name: string;
  guests: string;
  attendance: string;
  message: string;
};

export async function submitBirthdayRsvp(payload: BirthdayRsvp) {
  if (!birthdayConfig.rsvpEndpoint) {
    throw new Error("RSVP servis još nije povezan. Dodajte endpoint u birthdayConfig.ts.");
  }

  const response = await fetch(birthdayConfig.rsvpEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Odgovor nije sačuvan. Pokušajte ponovo.");
  return response;
}
