import EnergyParticles from "./EnergyParticles";
import { birthdayConfig as config } from "../birthdayConfig";
function FinalScene() { return <footer className="i10-final"><EnergyParticles /><img className="i10-final__clouds" src={config.assets.cloudOverlay} alt="" /><img className="i10-final__energy" src={config.assets.lightning} alt="" /><img className="i10-final__stars" src={config.assets.stars} alt="" /><div className="i10-final__collision" /><div><span>Final episode</span><h2>Dve priče. Dva slavljenika.<br />Jedna nezaboravna avantura!</h2><p>Čekamo te da zajedno napravimo uspomene!</p></div></footer>; }
export default FinalScene;
