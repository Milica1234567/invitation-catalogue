import { useState } from "react";
import { invitation9Data as data } from "../invitation9Data";
import BotanicalOrnament from "./BotanicalOrnament";

const gallery = [data.assets.floralSpray, data.assets.ivoryBranch, data.assets.berryBranch, data.assets.goldBranch, data.assets.floralCrest];

function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="i9-section i9-gallery">
      <div className="i9-heading" data-reveal><span>Notre mémoire</span><h2>Trenuci koji nas spajaju</h2></div>
      <div className="i9-gallery__grid">{gallery.map((image, index) => <button data-reveal type="button" key={image} onClick={() => setActive(index)} aria-label={`Otvori fotografiju ${index + 1}`}><BotanicalOrnament src={image} /><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
      {active !== null && <div className="i9-lightbox" role="dialog" aria-modal="true" aria-label="Pregled fotografije" onClick={() => setActive(null)}><button type="button" aria-label="Zatvori">×</button><BotanicalOrnament src={gallery[active]} /><p>Mesto za vašu fotografiju</p></div>}
    </section>
  );
}

export default PhotoGallery;
