import { invitation9Data as data } from "../invitation9Data";
import BotanicalOrnament from "./BotanicalOrnament";

export function WeddingTimeline() {
  return (
    <section className="i9-section i9-timeline">
      <BotanicalOrnament src={data.assets.ivoryBranch} className="i9-timeline__botanical" />
      <div className="i9-heading" data-reveal><span>Dimanche</span><h2>Plan našeg dana</h2></div>
      <ol>{data.timeline.map(([time, title], index) => <li data-reveal key={time}><time>{time}</time><i>{String(index + 1).padStart(2, "0")}</i><h3>{title}</h3></li>)}</ol>
    </section>
  );
}

export function VenueSection() {
  return (
    <section className="i9-section i9-venues">
      <div className="i9-heading" data-reveal><span>Rendez-vous</span><h2>Mesto našeg slavlja</h2></div>
      <div className="i9-venues__grid">{data.venues.map((venue, index) => <article data-reveal key={venue.name}>
        <BotanicalOrnament src={index ? data.assets.berryBranch : data.assets.goldBranch} />
        <span>{venue.type}</span><h3>{venue.name}</h3><time>{venue.time}</time><p>{venue.address}</p>
        <a href={venue.mapUrl} target="_blank" rel="noreferrer">Pogledajte lokaciju</a>
      </article>)}</div>
    </section>
  );
}

export function DressCode() {
  return (
    <section className="i9-section i9-dress">
      <div className="i9-heading" data-reveal><span>Dress code</span><h2>Elegancija u svakom detalju</h2></div>
      <h3 data-reveal>{data.dressCode.title}</h3><p data-reveal>{data.dressCode.text}</p>
      <div className="i9-palette" data-reveal>{data.dressCode.colors.map(([name, color]) => <div key={name}><i style={{ backgroundColor: color }} /><span>{name}</span></div>)}</div>
    </section>
  );
}
