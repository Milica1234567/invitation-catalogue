import "./PhotoStory.css";
import motionPhoto from "../../assets/img1.jpg";
import detailPhoto from "../../assets/img3.jpg";
import filmPhoto from "../../assets/img4.jpg";

function PhotoStory() {
  return (
    <section className="inv7-story" aria-label="Naša priča u fotografijama">
      <div className="inv7-story__texture" aria-hidden="true" />
      <figure className="inv7-story__portrait" data-inv7-reveal><img src={detailPhoto} alt="Mladenci sa bidermajerom" /><figcaption>U pokretu, zajedno.</figcaption></figure>
      <figure className="inv7-story__detail" data-inv7-reveal><img src={filmPhoto} alt="Filmski detalj mladenaca" /></figure>
      <blockquote data-inv7-reveal>Naša najlepša<br />priča tek počinje.</blockquote>
      <figure className="inv7-story__wide" data-inv7-reveal><img src={motionPhoto} alt="Mladenci u filmskom kadru" /></figure>
    </section>
  );
}

export default PhotoStory;
