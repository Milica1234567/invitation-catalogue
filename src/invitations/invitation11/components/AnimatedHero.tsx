import { motion, useReducedMotion } from "framer-motion";
import { invitation11Data as data } from "../invitation11Data";
import { WatercolorImage } from "./WatercolorImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AnimatedHero() {
  const reduced = useReducedMotion();
  const enter = (delay: number, x = 0, y = 0) => ({
    initial: reduced ? false : { opacity: 0, x, y, scale: .98 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    transition: { duration: 2.1, delay: reduced ? 0 : delay, ease },
  });

  return <section className="i11-hero" aria-label="Pozivnica za venčanje Jelene i Aleksandra">
    <div className="i11-scene" aria-hidden="true">
      <motion.div className="i11-scene__sky" {...enter(0)}><WatercolorImage src={data.assets.sky} alt="" /></motion.div>
      <motion.div className="i11-scene__castle" {...enter(.6, 0, 34)}><WatercolorImage src={data.assets.castle} alt="" /></motion.div>
      <motion.div className="i11-scene__tree i11-scene__tree--left" {...enter(.9, -110)}><WatercolorImage src={data.assets.tree} alt="" /></motion.div>
      <motion.div className="i11-scene__tree i11-scene__tree--right" {...enter(1, 110)}><WatercolorImage src={data.assets.tree} alt="" /></motion.div>
      <motion.div className="i11-scene__meadow" {...enter(1.2, 0, 70)}><WatercolorImage src={data.assets.meadow} alt="" /></motion.div>
      <motion.div className="i11-scene__couple" {...enter(1.55, 0, 65)}><WatercolorImage src={data.assets.couple} alt="" /></motion.div>
    </div>
    <motion.div className="i11-hero__copy" initial={reduced ? false : "hidden"} animate="visible" variants={{ visible:{ transition:{ staggerChildren:.24, delayChildren:reduced ? 0 : 2.05 } } }}>
      <motion.p variants={{ hidden:{ opacity:0, y:-18 }, visible:{ opacity:1, y:0, transition:{ duration:1.25, ease } } }}>Sa velikim zadovoljstvom</motion.p>
      <motion.p className="i11-hero__invite" variants={{ hidden:{ opacity:0, y:-16 }, visible:{ opacity:1, y:0, transition:{ duration:1.25, ease } } }}>pozivamo vas na naše venčanje</motion.p>
      <motion.h1 variants={{ hidden:{ opacity:0, x:-35 }, visible:{ opacity:1, x:0, transition:{ duration:1.5, ease } } }}><span>{data.couple.bride}</span><i>i</i><span>{data.couple.groom}</span></motion.h1>
      <motion.div className="i11-hero__details" variants={{ hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ duration:1 } } }}><strong>{data.event.date} <b>•</b> u {data.event.time} časova</strong><span>{data.event.venue}</span><small>{data.event.address}</small></motion.div>
      <motion.em variants={{ hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ duration:1 } } }}>radujemo se vašem dolasku</motion.em>
    </motion.div>
  </section>;
}
