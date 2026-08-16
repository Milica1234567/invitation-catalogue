import "./Location.css";

function Location() {
  return (
    <section className="inv6-location" aria-labelledby="inv6-location-title">
      <div className="inv6-content" data-inv6-reveal>
        <p className="inv6-kicker">Mesto proslave</p>
        <h2 id="inv6-location-title">Vila Aleksandra</h2>
        <address>Beograd</address>
        <p className="inv6-location__description">Veče posvećeno ljubavi, muzici<br />i najdražim ljudima.</p>
        <a href="https://maps.google.com/?q=Vila+Aleksandra+Beograd" target="_blank" rel="noreferrer">Pogledaj lokaciju <span>↗</span></a>
      </div>
    </section>
  );
}

export default Location;
