import "./PhotoIntro.css";
import couplePhoto from "../../assets/img1.jpg";

function PhotoIntro() {
  return (
    <section className="inv6-photo-intro" id="inv6-photo-intro">
      <img src={couplePhoto} alt="Mladenci u pokretu" />
      <blockquote data-inv6-reveal>Postoje trenuci koji traju jedan dan,<br />a pamtimo ih zauvek.</blockquote>
    </section>
  );
}

export default PhotoIntro;
