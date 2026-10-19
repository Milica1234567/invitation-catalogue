import envelopeVideo from "./assets/video.mp4";
import floralCrest from "./assets/elements/kolekcija_2/ornament_01.png";
import goldCorner from "./assets/elements/kolekcija_2/ornament_07.png";
import goldBranch from "./assets/elements/kolekcija_2/ornament_13.png";
import ivoryBranch from "./assets/elements/kolekcija_1/ornament_01.png";
import ivoryWreath from "./assets/elements/kolekcija_1/ornament_02.png";
import berryBranch from "./assets/elements/kolekcija_2/ornament_05.png";
import floralSpray from "./assets/elements/kolekcija_2/ornament_11.png";
import royalFlourish from "./assets/elements/kolekcija_1/ornament_20.png";
import finalBranch from "./assets/elements/kolekcija_2/ornament_23.png";

export const invitation9Data = {
  couple: {
    bride: "Anastasija",
    groom: "Aleksandar",
    monogram: "A & A",
  },
  wedding: {
    dateTime: "2027-09-19T13:00:00+02:00",
    timezone: "Europe/Belgrade",
    displayDate: "19. SEPTEMBAR 2027.",
    location: "BEOGRAD, SRBIJA",
  },
  quote: {
    text: "Ljubav nije samo gledati jedno drugo, već zajedno gledati u istom pravcu.",
    author: "Antoine de Saint-Exupéry",
  },
  story: [
    {
      label: "I",
      title: "Prvi susret",
      text: "Jedno obično popodne postalo je početak priče kojoj se i danas najviše radujemo.",
    },
    {
      label: "II",
      title: "Naš najlepši trenutak",
      text: "U svim malim putovanjima, tihim razgovorima i zajedničkim snovima pronašli smo dom.",
    },
    {
      label: "III",
      title: "Početak zauvek",
      text: "Sada želimo da pred vama obećamo jedno drugom ljubav kroz sva godišnja doba.",
    },
  ],
  families: {
    bride: { surname: "Porodica Petrović", parents: "Milena i Dragan Petrović" },
    groom: { surname: "Porodica Jovanović", parents: "Jelena i Vladimir Jovanović" },
  },
  timeline: [
    ["13:00", "Okupljanje gostiju"],
    ["14:00", "Crkveno venčanje"],
    ["15:30", "Građansko venčanje"],
    ["16:00", "Koktel dobrodošlice"],
    ["17:00", "Svečana večera"],
    ["19:00", "Prvi ples"],
    ["20:00", "Sečenje torte"],
    ["21:00", "Proslava pod zvezdama"],
  ],
  venues: [
    {
      type: "Ceremonija",
      name: "Hram Svetog Save",
      address: "Krušedolska 2a, Beograd",
      time: "14:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hram+Svetog+Save+Kru%C5%A1edolska+2a+Beograd",
    },
    {
      type: "Svečani prijem",
      name: "Hotel Moskva",
      address: "Terazije 20, Beograd",
      time: "17:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Moskva+Terazije+20+Beograd",
    },
  ],
  dressCode: {
    title: "Black Tie Optional",
    text: "Vaše prisustvo je naš najlepši poklon. Ukoliko želite da doprinesete svečanoj atmosferi, radovaćemo se elegantnim i sofisticiranim kombinacijama.",
    colors: [
      ["Champagne", "#d6c19a"],
      ["Sage green", "#8f9a7e"],
      ["Dusty rose", "#b98e8c"],
      ["Warm taupe", "#aa9b88"],
      ["Deep brown", "#514333"],
    ],
  },
  rsvp: {
    deadline: "1. septembra 2027.",
    endpoint: "",
  },
  assets: {
    envelopeVideo,
    floralCrest,
    goldCorner,
    goldBranch,
    ivoryBranch,
    ivoryWreath,
    berryBranch,
    floralSpray,
    royalFlourish,
    finalBranch,
  },
} as const;

export type Invitation9Data = typeof invitation9Data;
