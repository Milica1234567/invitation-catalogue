import { motion } from "framer-motion";
import { birthdayConfig as config, displayValue } from "../birthdayConfig";
import CharacterVisual from "./CharacterVisual";
import EnergyParticles from "./EnergyParticles";

function Hero() {
  return <header className="i10-hero">
    <EnergyParticles />
    <div className="i10-hero__half i10-hero__half--left" />
    <div className="i10-hero__half i10-hero__half--right" />
    <img className="i10-hero__world i10-hero__world--left" src={config.assets.huntrixBackground} alt="" />
    <img className="i10-hero__world i10-hero__world--right" src={config.assets.dragonballBackground} alt="" />
    <img className="i10-hero__clouds" src={config.assets.cloudOverlay} alt="" />
    <img className="i10-hero__dragon" src={config.assets.dragon} alt="" />
    <div className="i10-hero__character i10-hero__character--left"><CharacterVisual side="huntrix" src={config.assets.rumi} label="Rumi inspirisana junakinja" /></div>
    <div className="i10-hero__character i10-hero__character--right"><CharacterVisual side="dragon" src={config.assets.goku} label="Goku inspirisan junak" /></div>
    <motion.div className="i10-hero__content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .9 }}>
      <p>Two worlds · one celebration</p>
      <img className="i10-hero__logo" src={config.assets.huntrixLogo} alt="Huntrix" />
      <h1>Dva sveta.<br /><span>Jedna epska proslava!</span></h1>
      <h2>{displayValue(config.daughterName, "Ime ćerke")} <i>&amp;</i> {displayValue(config.fatherName, "Ime tate")}</h2>
      <strong>Slavimo zajedno!</strong>
      <a href="#i10-details">Otkrij detalje proslave <b>↓</b></a>
    </motion.div>
  </header>;
}
export default Hero;
