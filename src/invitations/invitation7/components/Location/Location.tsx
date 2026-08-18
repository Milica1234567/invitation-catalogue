import "./Location.css";

function Location() {
  return (
    <section className="inv7-location" aria-labelledby="inv7-location-title">
      <div className="inv7-content" data-inv7-reveal>
        <p className="inv7-kicker">Mesto proslave</p>
        <h2 id="inv7-location-title">Vila Aleksandra</h2>
        <address>Beograd</address>
        <p className="inv7-location__description">Veče posvećeno ljubavi, muzici<br />i najdražim ljudima.</p>
        <a href="https://maps.google.com/?q=Vila+Aleksandra+Beograd" target="_blank" rel="noreferrer">Pogledaj lokaciju <span>↗</span></a>
      </div>
    </section>
  );
}

export default Location;
