import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayConfig as config } from "../birthdayConfig";
import CharacterVisual from "./CharacterVisual";

type Team = "huntrix" | "dragon" | null;
function TeamSelector() {
  const [team, setTeam] = useState<Team>(null);
  return <section className="i10-section i10-teams"><span className="i10-label">Choose your power</span><h2>Izaberi svoju energiju!</h2><div className="i10-teams__grid">
    <motion.button className={`i10-team i10-team--huntrix ${team === "huntrix" ? "is-selected" : ""}`} whileTap={{ scale: .97 }} onClick={() => setTeam("huntrix")}><img className="i10-team__frame" src={config.assets.frameLeft} alt="" /><CharacterVisual side="huntrix" src={config.assets.rumi} label="Rumi inspirisana junakinja" /><img className="i10-team__mascot" src={config.assets.huntrixCat} alt="" /><span>Team</span><strong>HUNTR/X</strong><small>Neonska magija · ritam · hrabrost</small></motion.button>
    <div className="i10-team-vs">VS</div>
    <motion.button className={`i10-team i10-team--dragon ${team === "dragon" ? "is-selected" : ""}`} whileTap={{ scale: .97 }} onClick={() => setTeam("dragon")}><img className="i10-team__frame" src={config.assets.frameRight} alt="" /><CharacterVisual side="dragon" src={config.assets.goku} label="Goku inspirisan junak" /><img className="i10-team__mascot" src={config.assets.dragonballSphere} alt="" /><span>Team</span><strong>Dragon Ball</strong><small>Zlatna aura · snaga · avantura</small></motion.button>
  </div>{team && <motion.p className={`i10-team-message i10-team-message--${team}`} initial={{ opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} key={team}>{team === "huntrix" ? "Magija je na tvojoj strani!" : "Tvoja energija je preko 9000!"}</motion.p>}</section>;
}
export default TeamSelector;
