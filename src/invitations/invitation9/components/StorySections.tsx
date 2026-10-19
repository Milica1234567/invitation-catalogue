import { invitation9Data as data } from "../invitation9Data";
import BotanicalOrnament from "./BotanicalOrnament";

export function RomanticQuote() {
  return (
    <section id="i9-quote" className="i9-section i9-quote">
      <BotanicalOrnament src={data.assets.goldBranch} className="i9-quote__branch" />
      <blockquote data-reveal>
        “Ljubav nije samo gledati jedno drugo, već zajedno <em>gledati u istom pravcu.</em>”
        <cite>— {data.quote.author}</cite>
      </blockquote>
    </section>
  );
}

export function LoveStory() {
  return (
    <section className="i9-section i9-story">
      <div className="i9-heading" data-reveal>
        <span>Chapitre d'amour</span><h2>Naša priča</h2>
        <p>Svaka velika ljubav počinje jednim susretom.</p>
      </div>
      <div className="i9-story__grid">
        {data.story.map((moment, index) => (
          <article data-reveal key={moment.title} className={index === 1 ? "i9-story__item--offset" : ""}>
            <div className="i9-story__photo">
              <BotanicalOrnament src={[data.assets.floralSpray, data.assets.ivoryWreath, data.assets.berryBranch][index]} />
              <span>{moment.label}</span>
            </div>
            <h3>{moment.title}</h3><p>{moment.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FamilySection() {
  return (
    <section className="i9-section i9-families">
      <BotanicalOrnament src={data.assets.floralCrest} className="i9-families__crest" />
      <div className="i9-heading" data-reveal><span>Zajedno sa</span><h2>Sa blagoslovom naših porodica</h2></div>
      <div className="i9-families__grid">
        <div data-reveal><small>Porodica mlade</small><h3>{data.families.bride.surname}</h3><p>{data.families.bride.parents}</p></div>
        <div className="i9-families__mark">A <i>&amp;</i> A</div>
        <div data-reveal><small>Porodica mladoženje</small><h3>{data.families.groom.surname}</h3><p>{data.families.groom.parents}</p></div>
      </div>
    </section>
  );
}
