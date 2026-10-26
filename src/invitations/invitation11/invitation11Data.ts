import sky from "./assets/nebo.webp";
import castle from "./assets/zamak-clean.png";
import tree from "./assets/drvo-clean.png";
import couple from "./assets/mladenci-clean.png";
import meadow from "./assets/trava-clean.png";
import flowers from "./assets/cvece-clean.png";
import topFlowers from "./assets/cvece-wide-transparent.png";

export const invitation11Data = {
  couple: { bride: "Jelena", groom: "Aleksandar" },
  event: {
    date: "20. avgust 2026.",
    shortDate: "20.08.2026.",
    time: "17:00",
    venue: "Dvorac Ravnica",
    address: "Ravnički put 12, Beograd",
    mapsUrl: "",
  },
  rsvp: { deadline: "1. avgusta 2026.", endpoint: "" },
  assets: { sky, castle, tree, couple, meadow, flowers, topFlowers },
} as const;

export const timeline = [
  ["16:30", "Dolazak gostiju", "Dobrodošlica u vrtovima dvorca"],
  ["17:00", "Ceremonija venčanja", "Trenutak kada izgovaramo naše da"],
  ["18:00", "Koktel dobrodošlice", "Zdravica uz muziku i letnje sutone"],
  ["19:00", "Svečana večera", "Za stolom sa ljudima koje volimo"],
  ["21:00", "Prvi ples", "Početak naše najlepše melodije"],
  ["21:30", "Proslava", "Ples, osmesi i uspomene do kasno"],
] as const;
