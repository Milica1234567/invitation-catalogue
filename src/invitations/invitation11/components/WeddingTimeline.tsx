import { motion } from "framer-motion";
import { timeline, invitation11Data as data } from "../invitation11Data";
import { WatercolorImage } from "./WatercolorImage";

export default function WeddingTimeline() {
  return <section className="i11-timeline i11-section">
    <WatercolorImage className="i11-botanical i11-botanical--left" src={data.assets.tree} alt="" />
    <div className="i11-heading"><span>20 • 08 • 2026</span><h2>Tok našeg dana</h2><p>Svaki trenutak lepši je kada ga delimo sa vama.</p></div>
    <div className="i11-timeline__list">{timeline.map(([time,title,text], index) => <motion.article key={time} initial={{ opacity:0, x:index%2 ? 24 : -24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, amount:.45 }} transition={{ duration:.85, delay:.05 }}><time>{time}</time><i /><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}</div>
  </section>;
}
