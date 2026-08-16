import "./Location.css";

function Location() {
  return (
    <section className="inv5-location" aria-labelledby="inv5-location-title">
      <div className="inv5-petal-crop inv5-location__petal" aria-hidden="true" />
      <div className="inv5-content" data-inv5-reveal>
        <p className="inv5-kicker">Lokacija</p>
        <h2 id="inv5-location-title">Vila Aleksandar</h2>
        <address>Beograd</address>
        <a href="https://maps.google.com/?q=Vila+Aleksandar+Beograd" target="_blank" rel="noreferrer">Prikaži lokaciju <span>↗</span></a>
      </div>
    </section>
  );
}

export default Location;
