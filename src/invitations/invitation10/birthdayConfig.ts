import cloudOverlay from "./assets/transparent/cloud-overlay.png";
import clouds from "./assets/transparent/clouds.png";
import divider from "./assets/transparent/divider.png";
import dragon from "./assets/transparent/dragon.png";
import dragonballBackground from "./assets/transparent/dragonball-background.png";
import dragonballSphere from "./assets/transparent/dragonball-sphere.png";
import energyGold from "./assets/transparent/energy-gold.png";
import energyPurple from "./assets/transparent/energy-purple.png";
import frameLeft from "./assets/transparent/frame-left.png";
import frameRight from "./assets/transparent/frame-right.png";
import goku from "./assets/transparent/goku.png";
import huntrixBackground from "./assets/transparent/huntrix-background.png";
import huntrixCat from "./assets/transparent/huntrix-cat.png";
import huntrixLogo from "./assets/transparent/huntrix-logo.png";
import icons from "./assets/transparent/icons.png";
import lightning from "./assets/transparent/lightning.png";
import neonElements from "./assets/transparent/neon-elements.png";
import rumi from "./assets/transparent/rumi.png";
import sakuraPetals from "./assets/transparent/sakura-petals.png";
import stars from "./assets/transparent/stars.png";
import titleBackground from "./assets/transparent/title-bg.png";

export const birthdayConfig = {
  daughterName: "Lenka",
  daughterAge: 4,
  fatherName: "Milan",
  fatherAge: 40,
  dateTime: "2027-06-20T17:00:00+02:00",
  displayDate: "20. JUN 2027.",
  time: "17:00",
  location: "Igraonica Tom i Džeri",
  address: "Obrenovački put 117, Barič",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Igraonica%20Tom%20i%20D%C5%BEeri%2C%20Obrenova%C4%8Dki%20put%20117%2C%20Bari%C4%8D",
  mapEmbedUrl: "https://www.google.com/maps?q=Igraonica%20Tom%20i%20D%C5%BEeri%2C%20Obrenova%C4%8Dki%20put%20117%2C%20Bari%C4%8D&output=embed",
  rsvpDeadline: "10. jun 2027.",
  rsvpEndpoint: "",
  assets: {
    mainBackground: titleBackground,
    rumi,
    goku,
    huntrixBackground,
    dragonballBackground,
    dragon,
    cloudOverlay,
    clouds,
    divider,
    dragonballSphere,
    energyGold,
    energyPurple,
    frameLeft,
    frameRight,
    huntrixCat,
    huntrixLogo,
    icons,
    lightning,
    neonElements,
    sakuraPetals,
    stars,
  },
} as const;

export const displayValue = (value: string, fallback: string) => value.trim() || fallback;
export const displayAge = (age: number) => age > 0 ? `${age} godina` : "godine uskoro otkrivamo";
