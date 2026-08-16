import type { CSSProperties } from "react";
import "./Timeline.css";

const events = [
  ["15:00", "Crkveno venčanje", "Crkva Svetog Đorđa"],
  ["16:30", "Okupljanje gostiju", "Vila Jelena"],
  ["17:00", "Građansko venčanje", "Vila Jelena"],
  ["18:00", "Svečana večera", "Vila Jelena"],
];

function Timeline() {
  return (
    <section className="inv4-timeline" aria-labelledby="inv4-timeline-title">
      <div className="inv4-content">
        <h2 id="inv4-timeline-title" data-inv4-reveal>Raspored događaja</h2>
        <div className="inv4-timeline__list">
          {events.map(([time, title, place], index) => (
            <article data-inv4-reveal style={{ "--inv4-delay": `${index * 0.11}s` } as CSSProperties} key={time}>
              <span className="inv4-timeline__diamond" aria-hidden="true" />
              <time>{time}</time><h3>{title}</h3><p>{place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
