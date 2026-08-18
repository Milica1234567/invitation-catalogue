import "./PhotoIntro.css";
import couplePhoto from "../../assets/img2.jpg";

function PhotoIntro() {
  return (
    <section className="inv7-photo-intro" id="inv7-photo-intro">
      <img src={couplePhoto} alt="Mladenci u pokretu" />
      <blockquote data-inv7-reveal>Postoje trenuci koji traju jedan dan,<br />a pamtimo ih zauvek.</blockquote>
    </section>
  );
}

export default PhotoIntro;
