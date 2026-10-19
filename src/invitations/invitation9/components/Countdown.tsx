import { useEffect, useState } from "react";
import { invitation9Data as data } from "../invitation9Data";

const calculate = () => {
  const distance = new Date(data.wedding.dateTime).getTime() - Date.now();
  if (distance <= 0) return null;
  return {
    Dani: Math.floor(distance / 86400000),
    Sati: Math.floor((distance / 3600000) % 24),
    Minuti: Math.floor((distance / 60000) % 60),
    Sekunde: Math.floor((distance / 1000) % 60),
  };
};

function Countdown() {
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="i9-section i9-countdown">
      <div className="i9-heading" data-reveal><span>Odbrojavamo</span><h2>Do našeg posebnog dana</h2></div>
      {time ? <div className="i9-countdown__grid" data-reveal>{Object.entries(time).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}</div> : <p className="i9-countdown__passed">Naš poseban dan je stigao.</p>}
    </section>
  );
}

export default Countdown;
