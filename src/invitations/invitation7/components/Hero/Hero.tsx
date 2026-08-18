import "./Hero.css";

function Hero() {
  return (
    <section className="inv7-hero" aria-labelledby="inv7-title">
      <div className="inv7-hero__cover" aria-hidden="true" />
      <div className="inv7-hero__content">
        <p className="inv7-hero__line inv7-hero__enter inv7-hero__enter--1">Jedno drugom. Zauvek.</p>
        <h1 id="inv7-title">
          <span className="inv7-hero__enter inv7-hero__enter--2">Aleksandra</span>
          <i className="inv7-hero__enter inv7-hero__enter--3">&amp;</i>
          <span className="inv7-hero__enter inv7-hero__enter--4">Nikola</span>
        </h1>
        <time className="inv7-hero__enter inv7-hero__enter--5" dateTime="2026-10-18">18 · 10 · 2026</time>
      </div>
      <a href="#inv7-photo-intro" className="inv7-hero__continue" aria-label="Nastavite"><span /></a>
    </section>
  );
}

export default Hero;
