import "./Hero.css";

function Hero() {
  return (
    <section className="inv4-hero" aria-labelledby="inv4-title">
      <div className="inv4-hero__inner">
        <div className="inv4-hero__monogram inv4-hero__enter inv4-hero__enter--1" aria-label="J i N"><span>J</span><i>❦</i><span>N</span></div>
        <p className="inv4-hero__intro inv4-hero__enter inv4-hero__enter--2">Sa velikom radošću<br />pozivamo vas na naše venčanje</p>
        <h1 id="inv4-title">
          <span className="inv4-hero__name inv4-hero__enter inv4-hero__enter--3">Jelena</span>
          <span className="inv4-hero__and inv4-hero__enter inv4-hero__enter--4">i</span>
          <span className="inv4-hero__name inv4-hero__enter inv4-hero__enter--5">Nikola</span>
        </h1>
        <time className="inv4-hero__date inv4-hero__enter inv4-hero__enter--6" dateTime="2027-06-06">06&nbsp; · &nbsp;06&nbsp; · &nbsp;2027.</time>
        <p className="inv4-hero__location inv4-hero__enter inv4-hero__enter--7">Topola</p>
      </div>
      <a className="inv4-hero__scroll" href="#inv4-intro" aria-label="Nastavite"><span /></a>
    </section>
  );
}

export default Hero;
