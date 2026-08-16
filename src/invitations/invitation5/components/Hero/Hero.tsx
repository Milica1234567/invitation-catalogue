import "./Hero.css";

function Hero() {
  return (
    <section className="inv5-hero" aria-labelledby="inv5-title">
      <div className="inv5-hero__texture" aria-hidden="true" />
      <div className="inv5-hero__veil" aria-hidden="true" />
      <div className="inv5-hero__content">
        <p className="inv5-hero__kicker inv5-hero__enter inv5-hero__enter--1">Venčanje</p>
        <h1 id="inv5-title">
          <span className="inv5-hero__name inv5-hero__name--sofija inv5-hero__enter inv5-hero__enter--2">Sofija</span>
          <span className="inv5-hero__and inv5-hero__enter inv5-hero__enter--3">i</span>
          <span className="inv5-hero__name inv5-hero__name--aleksandar inv5-hero__enter inv5-hero__enter--4">Aleksandar</span>
        </h1>
        <time className="inv5-hero__date inv5-hero__enter inv5-hero__enter--5" dateTime="2027-07-18">18 · 07 · 2027</time>
        <p className="inv5-hero__place inv5-hero__enter inv5-hero__enter--6">Beograd</p>
      </div>
      <a className="inv5-hero__scroll" href="#inv5-intro" aria-label="Nastavite"><span /></a>
    </section>
  );
}

export default Hero;
