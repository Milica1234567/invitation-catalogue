import { motion } from "framer-motion";
import { invitation11Data as data } from "../invitation11Data";
import { WatercolorImage } from "./WatercolorImage";

export default function FloralSection() {
  return <section className="i11-floral i11-section">
    <motion.div className="i11-floral__top" initial={{ opacity:0, y:-28, scale:.96 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true, amount:.15 }} transition={{ duration:1.5 }}><WatercolorImage src={data.assets.topFlowers} alt="" /></motion.div>
    <motion.div className="i11-floral__copy i11-reveal" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.35 }} transition={{ duration:1.2 }}>
      <span className="i11-monogram">J <i>&amp;</i> A</span><div className="i11-flourish" />
      <h2>„Ljubav je početak svih najlepših priča.“</h2>
      <p>Sa velikom radošću pozivamo vas da budete deo našeg posebnog dana i zajedno sa nama proslavite početak jednog novog poglavlja.</p>
    </motion.div>
    <motion.div className="i11-floral__bottom" initial={{ opacity:0, y:35, scale:.96 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true, amount:.15 }} transition={{ duration:1.5 }}><WatercolorImage src={data.assets.topFlowers} alt="" /></motion.div>
  </section>;
}
