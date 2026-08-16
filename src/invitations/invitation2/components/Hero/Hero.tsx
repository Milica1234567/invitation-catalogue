import "./Hero.css";

function Hero() {
  return (
    <section className="watercolor-hero" aria-labelledby="invitation-two-title">
      <div className="watercolor-hero__content">
        <p className="watercolor-hero__eyebrow">Venčanje</p>
        <h1 id="invitation-two-title">
          <span>Jelena</span><i>&amp;</i><span>Nikola</span>
        </h1>
        <div className="watercolor-hero__sprig" aria-hidden="true"><span /><i /><span /></div>
        <time dateTime="2027-06-06">06 · 06 · 2027.</time>
      </div>
      <a className="watercolor-hero__scroll" href="#invitation-message">
        <span>Nastavite</span><i aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
