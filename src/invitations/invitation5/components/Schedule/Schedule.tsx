import type { CSSProperties } from "react";
import "./Schedule.css";

const events = [
  ["15:00", "Crkveno venčanje", "Crkva Svetog Marka"],
  ["17:00", "Građansko venčanje", "Vila Aleksandar"],
  ["18:00", "Svečana večera", "Vila Aleksandar"],
];

function Schedule() {
  return (
    <section className="inv5-schedule" aria-labelledby="inv5-schedule-title">
      <div className="inv5-content">
        <h2 id="inv5-schedule-title" data-inv5-reveal>Tok dana</h2>
        <div className="inv5-schedule__rows">
          {events.map(([time, title, place], index) => (
            <article data-inv5-reveal style={{ "--inv5-delay": `${index * 0.12}s` } as CSSProperties} key={time}>
              <time>{time}</time><div><h3>{title}</h3><p>{place}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
