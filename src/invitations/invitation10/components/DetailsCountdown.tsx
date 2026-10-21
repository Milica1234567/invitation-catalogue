import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { birthdayConfig as config, displayValue } from "../birthdayConfig";

export function BirthdayDetails() {
  return <section id="i10-details" className="i10-section i10-details"><motion.div className="i10-glass" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }}>
    <img className="i10-details__icons" src={config.assets.icons} alt="" />
    <span className="i10-label">Mission briefing</span><h2>Detalji epske proslave</h2>
    <div className="i10-details__grid"><div><small>Datum</small><strong>{displayValue(config.displayDate, "Datum uskoro")}</strong></div><div><small>Vreme</small><strong>{displayValue(config.time, "Vreme uskoro")}</strong></div><div><small>Lokacija</small><strong>{displayValue(config.location, "Lokacija uskoro")}</strong></div><div><small>Adresa</small><strong>{displayValue(config.address, "Adresa uskoro")}</strong></div></div>
    <div className="i10-map">
      <iframe
        src={config.mapEmbedUrl}
        title="Mapa do igraonice Tom i Džeri"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <a href={config.mapsUrl} target="_blank" rel="noreferrer">Otvori mapu i navigaciju</a>
  </motion.div></section>;
}

const getRemaining = () => {
  const distance = new Date(config.dateTime).getTime() - Date.now();
  if (distance <= 0) return null;
  return [Math.floor(distance / 86400000), Math.floor(distance / 3600000 % 24), Math.floor(distance / 60000 % 60), Math.floor(distance / 1000 % 60)];
};

export function BirthdayCountdown() {
  const [time, setTime] = useState(getRemaining);
  useEffect(() => { const timer = window.setInterval(() => setTime(getRemaining()), 1000); return () => clearInterval(timer); }, []);
  return <section className="i10-section i10-countdown"><img className="i10-countdown__lightning" src={config.assets.lightning} alt="" /><img className="i10-countdown__stars" src={config.assets.stars} alt="" /><span className="i10-label">Powering up</span><h2>Od brojavanja do avanture!</h2>{time ? <div className="i10-countdown__grid">{time.map((value, index) => <motion.div key={index} whileInView={{ scale: [0.85, 1] }} viewport={{ once: true }}><strong>{String(value).padStart(2, "0")}</strong><span>{["Dana", "Sati", "Minuta", "Sekundi"][index]}</span></motion.div>)}</div> : <p className="i10-countdown__started">Avantura je počela!</p>}</section>;
}
