import "./Hero.css";

function Hero() {
  return (
    <section className="inv3-hero" aria-labelledby="inv3-title">
      <div className="inv3-hero__inner">
        <div className="inv3-hero__monogram inv3-hero__enter inv3-hero__enter--1" aria-label="J i N">
          <span>J</span><i aria-hidden="true" /><span>N</span>
        </div>
        <p className="inv3-hero__invitation inv3-hero__enter inv3-hero__enter--2">
          Sa velikom radošću<br />pozivamo vas na venčanje
        </p>
        <h1 id="inv3-title">
          <span className="inv3-hero__name inv3-hero__enter inv3-hero__enter--3">Jelena</span>
          <span className="inv3-hero__and inv3-hero__enter inv3-hero__enter--4">i</span>
          <span className="inv3-hero__name inv3-hero__enter inv3-hero__enter--5">Nikola</span>
        </h1>
        <time className="inv3-hero__date inv3-hero__enter inv3-hero__enter--6" dateTime="2027-06-06">06 · 06 · 2027.</time>
        <p className="inv3-hero__place inv3-hero__enter inv3-hero__enter--7">Topola</p>
      </div>
      <a className="inv3-hero__continue" href="#inv3-intro" aria-label="Nastavite na pozivni tekst"><span /></a>
    </section>
  );
}

export default Hero;
