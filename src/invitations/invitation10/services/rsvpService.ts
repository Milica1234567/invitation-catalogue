import { rsvpConfig } from "../../../rsvp/config";
import { submitRsvp, type RsvpPayload } from "../../../rsvp/submitRsvp";

export function submitBirthdayRsvp(payload: RsvpPayload) {
  return submitRsvp(rsvpConfig.invitation10, payload);
}
