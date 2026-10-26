import { motion } from "framer-motion";
import { invitation11Data as data } from "../invitation11Data";
import { WatercolorImage } from "./WatercolorImage";

export default function ClosingSection() {
  return <footer className="i11-closing"><motion.div className="i11-closing__flowers" initial={{ opacity:0, y:30, scale:.95 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true }} transition={{ duration:1.5 }}><WatercolorImage src={data.assets.topFlowers} alt="" /></motion.div><motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1.2 }}><p>Jedva čekamo da zajedno stvaramo uspomene.</p><h2>{data.couple.bride} <i>&amp;</i> {data.couple.groom}</h2><span>{data.event.shortDate}</span></motion.div></footer>;
}
