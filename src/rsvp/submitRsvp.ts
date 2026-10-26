export type RsvpPayload = {
  fullName: string;
  attending: boolean;
  attendeeCount: number;
  note: string;
  submissionId: string;
};
export type RsvpConfig = { endpoint: string; mode?: "no-cors" | "cors" };

export function createSubmissionId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 15) | 64;
  bytes[8] = (bytes[8] & 63) | 128;
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

export function validateRsvp(payload: RsvpPayload): RsvpPayload {
  if (typeof payload.fullName !== "string" || !payload.fullName.trim() || payload.fullName.trim().length > 120)
    throw new Error("Unesite ime i prezime (do 120 znakova).");
  if (typeof payload.attending !== "boolean") throw new Error("Izaberite da li dolazite.");
  if (payload.attending && (!Number.isInteger(payload.attendeeCount) || payload.attendeeCount < 1 || payload.attendeeCount > 5))
    throw new Error("Izaberite broj gostiju od 1 do 5.");
  if (typeof payload.note !== "string" || payload.note.length > 2000) throw new Error("Poruka može imati najviše 2000 znakova.");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(payload.submissionId))
    throw new Error("Neispravan identifikator odgovora.");
  return { ...payload, fullName: payload.fullName.trim(), note: payload.note.trim(), attendeeCount: payload.attending ? payload.attendeeCount : 0 };
}

export async function submitRsvp(config: RsvpConfig, input: RsvpPayload): Promise<"confirmed" | "unverified"> {
  const payload = validateRsvp(input);
  if (!config.endpoint.trim()) throw new Error("RSVP još nije povezan. Podesite adresu za ovu pozivnicu u src/rsvp/config.ts.");
  let url: URL;
  try { url = new URL(config.endpoint); } catch { throw new Error("RSVP adresa nije ispravna."); }
  if (url.protocol !== "https:" || url.username || url.password) throw new Error("RSVP adresa mora biti HTTPS adresa bez kredencijala.");
  const mode = config.mode ?? "no-cors";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(url.href, {
      method: "POST", mode, credentials: "omit", redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(payload), signal: controller.signal,
    });
    if (response.type === "opaque" || response.type === "opaqueredirect") return "unverified";
    if (!response.ok) throw new Error("Server nije potvrdio čuvanje odgovora.");
    const acknowledgement: unknown = await response.json();
    if (typeof acknowledgement !== "object" || acknowledgement === null ||
        !("ok" in acknowledgement) || acknowledgement.ok !== true ||
        !("submissionId" in acknowledgement) || acknowledgement.submissionId !== payload.submissionId)
      throw new Error("Server nije vratio proverljivu potvrdu odgovora.");
    return "confirmed";
  } finally { clearTimeout(timer); }
}
