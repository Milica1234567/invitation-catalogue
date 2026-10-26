import type { RsvpConfig } from "./submitRsvp";

// Paste the public deployed /exec URL for each invitation here.
// Never put Google credentials or a private Sheet URL in client code.
export const rsvpConfig: Record<string, RsvpConfig> = {
  invitation1: { endpoint: "", mode: "no-cors" },
  invitation2: { endpoint: "", mode: "no-cors" },
  invitation3: { endpoint: "", mode: "no-cors" },
  invitation4: { endpoint: "", mode: "no-cors" },
  invitation5: { endpoint: "", mode: "no-cors" },
  invitation6: { endpoint: "", mode: "no-cors" },
  invitation7: { endpoint: "", mode: "no-cors" },
  invitation8: { endpoint: "", mode: "no-cors" },
  invitation9: { endpoint: "", mode: "no-cors" },
  invitation10: { endpoint: "https://script.google.com/macros/s/AKfycbxGtPLCbujZL9a2tnucyCaPP3-4cWmQBQc48jyDNScC6ftZ1iNexZLPwL-_BpU7LIJQ8A/exec", mode: "no-cors" },
  invitation11: { endpoint: "", mode: "no-cors" },
};
