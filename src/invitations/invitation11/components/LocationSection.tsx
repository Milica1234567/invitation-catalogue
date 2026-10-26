import { motion } from "framer-motion";
import { invitation11Data as data } from "../invitation11Data";
import { WatercolorImage } from "./WatercolorImage";

export default function LocationSection() {
  const configured = Boolean(data.event.mapsUrl);
  return <section className="i11-location i11-section">
    <motion.div className="i11-location__art" initial={{ opacity:0, scale:.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:1.4 }}><WatercolorImage src={data.assets.castle} alt="Akvarel ilustracija dvorca" /></motion.div>
    <motion.div className="i11-location__copy" initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:1 }}><span className="i11-kicker">Mesto slavlja</span><div className="i11-pin" aria-hidden="true">⌖</div><h2>{data.event.venue}</h2><p>{data.event.address}</p>{configured ? <a href={data.event.mapsUrl} target="_blank" rel="noreferrer">Otvori u Google mapama</a> : <span className="i11-map-note">Link ka mapi biće dodat nakon potvrde lokacije</span>}</motion.div>
  </section>;
}
