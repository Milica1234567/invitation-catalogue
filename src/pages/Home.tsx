import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1>Pozivnice</h1>

      <div className="home__grid">
        <Link
          to="/invitation-catalogue/ana-marko"
          className="home__card"
        >
          <h2>Ana & Marko</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>

        <Link
          to="/invitation-catalogue/jovana-nikola"
          className="home__card"
        >
          <h2>Jovana & Nikola</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>

        <Link
          to="/invitation-catalogue/jelena-nikola"
          className="home__card"
        >
          <h2>Jelena & Nikola</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>

         <Link
          to="/invitation-catalogue/invitation4"
          className="home__card"
        >
          <h2>Invitation 4</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>

        <Link
          to="/invitation-catalogue/invitation5"
          className="home__card"
        >
          <h2>Invitation 5</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>

        <Link
          to="/invitation-catalogue/invitation6"
          className="home__card"
        >
          <h2>Invitation 6</h2>
          <p>Pogledaj pozivnicu</p>
        </Link>
      </div>
    </main>
  );
}

export default Home;