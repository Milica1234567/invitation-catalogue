import "./PhotoStory.css";
import couplePhoto from "../../assets/img1.jpg";

function PhotoStory() {
  return (
    <section className="inv6-story" aria-label="Naša priča u fotografijama">
      <div className="inv6-story__texture" aria-hidden="true" />
      <figure className="inv6-story__portrait" data-inv6-reveal><img src={couplePhoto} alt="Mladenci držeći se za ruke" /><figcaption>U pokretu, zajedno.</figcaption></figure>
      <figure className="inv6-story__detail" data-inv6-reveal><img src={couplePhoto} alt="Detalj venčanice i ruku" /></figure>
      <blockquote data-inv6-reveal>Naša najlepša<br />priča tek počinje.</blockquote>
      <figure className="inv6-story__wide" data-inv6-reveal><img src={couplePhoto} alt="Mladenci u filmskom kadru" /></figure>
    </section>
  );
}

export default PhotoStory;
