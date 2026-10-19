import { invitation9Data as data } from "../invitation9Data";
import BotanicalOrnament from "./BotanicalOrnament";

function WeddingHero() {
  return (
    <header className="i9-hero">
      <BotanicalOrnament src={data.assets.goldCorner} className="i9-hero__corner i9-hero__corner--tl" />
      <BotanicalOrnament src={data.assets.goldCorner} mirrored className="i9-hero__corner i9-hero__corner--tr" />
      <BotanicalOrnament src={data.assets.ivoryBranch} className="i9-hero__branch i9-hero__branch--left" />
      <BotanicalOrnament src={data.assets.ivoryBranch} mirrored className="i9-hero__branch i9-hero__branch--right" />
      <div className="i9-hero__content">
        <div className="i9-monogram" data-reveal>{data.couple.monogram}</div>
        <p className="i9-kicker" data-reveal>Sa radošću vas pozivamo</p>
        <h1 data-reveal>
          <span>{data.couple.bride}</span>
          <b>&amp;</b>
          <span>{data.couple.groom}</span>
        </h1>
        <div className="i9-gold-rule" data-reveal><i /></div>
        <p className="i9-hero__date" data-reveal>{data.wedding.displayDate}</p>
        <p className="i9-hero__location" data-reveal>{data.wedding.location}</p>
      </div>
      <a className="i9-scroll" href="#i9-quote">Otkrijte našu priču <span>↓</span></a>
    </header>
  );
}

export default WeddingHero;
