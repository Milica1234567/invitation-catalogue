import "./Hero.css";

function Hero() {
  return (
    <section className="inv6-hero" aria-labelledby="inv6-title">
      <div className="inv6-hero__cover" aria-hidden="true" />
      <div className="inv6-hero__content">
        <p className="inv6-hero__line inv6-hero__enter inv6-hero__enter--1">Jedno drugom. Zauvek.</p>
        <h1 id="inv6-title">
          <span className="inv6-hero__enter inv6-hero__enter--2">Aleksandra</span>
          <i className="inv6-hero__enter inv6-hero__enter--3">&amp;</i>
          <span className="inv6-hero__enter inv6-hero__enter--4">Nikola</span>
        </h1>
        <time className="inv6-hero__enter inv6-hero__enter--5" dateTime="2026-10-18">18 · 10 · 2026</time>
      </div>
      <a href="#inv6-photo-intro" className="inv6-hero__continue" aria-label="Nastavite"><span /></a>
    </section>
  );
}

export default Hero;
