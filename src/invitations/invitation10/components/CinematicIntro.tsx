import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { birthdayConfig as config } from "../birthdayConfig";
import CharacterVisual from "./CharacterVisual";
import EnergyParticles from "./EnergyParticles";

type CinematicIntroProps = { visible: boolean; onComplete: () => void };

function CinematicIntro({ visible, onComplete }: CinematicIntroProps) {
  const reduced = useReducedMotion();
  return <AnimatePresence>{visible && <motion.div className="i10-intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .7 }}>
    <EnergyParticles />
    <motion.div className="i10-intro__world i10-intro__world--left" initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 1.1, ease: [0.2, .8, .2, 1] }} />
    <motion.div className="i10-intro__world i10-intro__world--right" initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 1.1, ease: [0.2, .8, .2, 1] }} />
    <img className="i10-intro__scene i10-intro__scene--left" src={config.assets.huntrixBackground} alt="" />
    <img className="i10-intro__scene i10-intro__scene--right" src={config.assets.dragonballBackground} alt="" />
    <motion.img className="i10-intro__energy i10-intro__energy--left" src={config.assets.energyPurple} alt="" animate={{ x: [0, 32, 0], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.1 }} />
    <motion.img className="i10-intro__energy i10-intro__energy--right" src={config.assets.energyGold} alt="" animate={{ x: [0, -32, 0], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} />
    <motion.div className="i10-intro__character i10-intro__character--left" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : .65, duration: .8 }}><CharacterVisual side="huntrix" src={config.assets.rumi} label="Rumi inspirisana junakinja" /></motion.div>
    <motion.div className="i10-intro__character i10-intro__character--right" initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : .65, duration: .8 }}><CharacterVisual side="dragon" src={config.assets.goku} label="Goku inspirisan junak" /></motion.div>
    <motion.div className="i10-collision" initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.3, .85], opacity: [0, 1, .75] }} transition={{ delay: reduced ? 0 : 1.25, duration: 1.25 }} />
    <img className="i10-intro__divider" src={config.assets.divider} alt="" />
    <motion.div className="i10-intro__copy" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduced ? 0 : 1.75 }}><span>TWO WORLDS</span><strong>ONE EPIC BIRTHDAY</strong><button type="button" onClick={onComplete}>Uđi u avanturu</button></motion.div>
    <button className="i10-intro__skip" type="button" onClick={onComplete}>Skip intro</button>
  </motion.div>}</AnimatePresence>;
}
export default CinematicIntro;
